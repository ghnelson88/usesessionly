import { createRequestHandler } from "react-router";

declare module "react-router" {
	export interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: ExecutionContext;
		};
	}
}

const requestHandler = createRequestHandler(
	() => import("virtual:react-router/server-build"),
	import.meta.env.MODE,
);

function applySecurityHeaders(request: Request, response: Response) {
	const headers = new Headers(response.headers);
	const isHttps = new URL(request.url).protocol === "https:";

	headers.set(
		"Content-Security-Policy",
		[
			"default-src 'self'",
			"base-uri 'self'",
			"frame-ancestors 'none'",
			"object-src 'none'",
			"form-action 'self'",
			"script-src 'self' 'unsafe-inline'",
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
			"font-src 'self' https://fonts.gstatic.com",
			"img-src 'self' data:",
			"connect-src 'self'",
			"upgrade-insecure-requests",
		].join("; "),
	);
	headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	headers.set("X-Content-Type-Options", "nosniff");
	headers.set("X-Frame-Options", "DENY");
	headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
	headers.set("Cross-Origin-Opener-Policy", "same-origin");
	headers.set("Cross-Origin-Resource-Policy", "same-origin");

	if (isHttps) {
		headers.set(
			"Strict-Transport-Security",
			"max-age=31536000; includeSubDomains; preload",
		);
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

export default {
	fetch(request, env, ctx) {
		return requestHandler(request, {
			cloudflare: { env, ctx },
		}).then((response) => applySecurityHeaders(request, response));
	},
} satisfies ExportedHandler<Env>;
