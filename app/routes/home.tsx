import type { Route } from "./+types/home";
import { Link } from "react-router";

/*
 * Every call to action on this page was a `<button>` with no `onClick`, no
 * `href`, and no handler anywhere in the bundle — five of them, including both
 * enterprise-shaped ones, at a moment when the first prospective paying
 * customer is an after-school enrichment provider. They are real links now.
 *
 * Both destinations are things that actually exist today. `manage.usesessionly.com`
 * returns 200; the app is on NEITHER store (measured 2026-08-29:
 * `play.google.com/...?id=com.sessionly.app` 404, and an iTunes lookup returns
 * `resultCount: 0`), so nothing here points at a store listing or promises one.
 */
const CONTACT_EMAIL = "ops@usesessionly.com";
const CONSOLE_URL = "https://manage.usesessionly.com";

const demoMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
	"Sessionly demo request",
)}`;
const salesMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
	"Sessionly for our organisation",
)}`;

const TITLE = "Sessionly — Calm, structured communication";
const DESCRIPTION =
	"Sessionly is the calm, structured way to run short-lived programs — announcements, schedules, applications, and closure. Operators work on mobile or the web; families can take part entirely by email.";

export function meta({}: Route.MetaArgs) {
	// Open Graph and Twitter cards. Without these, a link shared into a Slack,
	// a WhatsApp group or a district email — which is exactly how this site
	// would reach an enrichment provider — renders as a bare URL.
	return [
		{ title: TITLE },
		{ name: "description", content: DESCRIPTION },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Sessionly" },
		{ property: "og:title", content: TITLE },
		{ property: "og:description", content: DESCRIPTION },
		{ property: "og:url", content: "https://usesessionly.com/" },
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: TITLE },
		{ name: "twitter:description", content: DESCRIPTION },
		{ name: "theme-color", content: "#2E4A3C" },
	];
}

const USE_CASES = [
	{
		title: "After-school enrichment providers",
		body: "Run twenty programs across five schools with one roster, one application inbox, and one equipment inventory.",
	},
	{
		title: "Camps (3–5 days)",
		body: "A program that exists for a week needs closure built in, not an account families keep forever.",
	},
	{
		title: "Robotics clubs",
		body: "Track who has kit 7 and what never came back, across terms — the kits outlive the program.",
	},
	{
		title: "Performing arts workshops",
		body: "Rehearsal schedules change. Tell every family once, in the place they already look.",
	},
	{
		title: "Seasonal programs",
		body: "A season that meets weekly runs into school closures. Sessionly knows which Wednesdays are not there.",
	},
	{
		title: "Field trips and events",
		body: "See who still owes a permission slip, and chase exactly those families — not all of them.",
	},
	{
		title: "Pop-up educational experiences",
		body: "Take applications on a public page, accept who fits, and be finished when the program is.",
	},
];

const PRINCIPLES = [
	{
		title: "Programs are temporary",
		description:
			"Every program has a start and end date. Closure is a feature, not a bug.",
	},
	{
		title: "Authority is instructor-owned",
		description:
			"Instructors own the program. Parents participate without becoming peers.",
	},
	{
		// Amended 2026-08-08. The site published the superseded wording — "Calm
		// over engagement" — which, read literally, argues against the operator
		// console this product now ships.
		title: "Calm for families, capable for operators",
		description:
			"No feeds optimised for activity — parents get what they need and nothing more. Coordinators running twenty programs get the density and aggregation that job actually takes.",
	},
	{
		title: "Decision support, not social",
		description:
			"Sessionly supports coordination, not social interaction.",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-cream text-ink">
			<header className="border-b border-sage-mist">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<div className="flex items-center gap-3">
						<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-deep text-sm font-semibold text-cream">
							S
						</span>
						<div>
							<p className="text-lg font-semibold">Sessionly</p>
							<p className="text-xs uppercase tracking-[0.2em] text-meta">
								Program Communication
							</p>
						</div>
					</div>
					<nav className="hidden items-center gap-8 text-sm font-medium text-body md:flex">
						<a className="hover:text-ink" href="#use-cases">
							Use cases
						</a>
						<a className="hover:text-ink" href="#principles">
							Principles
						</a>
						<a className="hover:text-ink" href="#features">
							Features
						</a>
					</nav>
					<a
						href={demoMailto}
						className="rounded-full bg-sage-deep px-5 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-sage"
					>
						Request a demo
					</a>
				</div>
			</header>

			<main>
				<section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-center">
					<div className="flex-1 space-y-6">
						{/* The dot is Sand — the brand's warm accent, and the only place
						    it appears. Without it the page is sage-and-cream only, and
						    Sand is a token the design system defines but this site would
						    otherwise never show. The `gap-2` was already here waiting for
						    something. */}
						<p className="inline-flex items-center gap-2 rounded-full bg-cream-tinted px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-body">
							<span
								aria-hidden="true"
								className="h-1.5 w-1.5 rounded-full bg-sand"
							/>
							Calm, structured communication
						</p>
						<h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
							Keep parents aligned without turning your program into a
							school system.
						</h1>
						<p className="text-lg text-body">
							Sessionly helps instructors run short-lived programs with clarity:
							announcements, schedules, volunteer coordination, and closure.
							Operators work on mobile or on the web — and families can take
							part entirely by email, without installing anything.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<a
								href={CONSOLE_URL}
								className="rounded-full bg-sage-deep px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-sage"
							>
								Start a program
							</a>
							<a
								href="#features"
								className="rounded-full border border-sage-mist px-6 py-3 text-sm font-semibold text-body transition hover:border-sage hover:text-ink"
							>
								See how it works
							</a>
						</div>
						<div className="flex flex-wrap gap-6 text-sm text-meta">
							<div>
								<p className="text-lg font-semibold text-ink">3–5 days</p>
								<p>Typical camp length</p>
							</div>
							<div>
								<p className="text-lg font-semibold text-ink">100%</p>
								<p>Instructor-owned programs</p>
							</div>
							<div>
								<p className="text-lg font-semibold text-ink">0</p>
								<p>Reply-all chaos</p>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<div className="rounded-3xl border border-sage-mist bg-gradient-to-br from-cream via-surface to-cream-tinted p-8 shadow-lg">
							<div className="space-y-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-meta">
											Summer Robotics Camp
										</p>
										<p className="text-lg font-semibold text-ink">
											Session 2 • Day 3
										</p>
									</div>
									<span className="rounded-full bg-cream-tinted px-3 py-1 text-xs font-semibold text-sage-deep">
										On track
									</span>
								</div>
								<div className="space-y-4 rounded-2xl border border-sage-mist bg-surface p-4">
									<p className="text-sm font-semibold text-ink">
										Today&apos;s announcement
									</p>
									<p className="text-sm text-body">
										Robots are ready for the demo! Please send a small box for
										carrying projects home tomorrow.
									</p>
									{/*
									 * The four reactions the product actually has — thumbs_up,
									 * heart, check, eyes. This mock previously showed 🧰 and 🎉,
									 * which a parent would look for and never find.
									 */}
									<div className="flex items-center gap-2 text-xs text-meta">
										<span className="rounded-full bg-cream-tinted px-2 py-1">
											👍 12
										</span>
										<span className="rounded-full bg-cream-tinted px-2 py-1">
											❤️ 8
										</span>
										<span className="rounded-full bg-cream-tinted px-2 py-1">
											✅ 5
										</span>
									</div>
								</div>
								<div className="grid gap-4 md:grid-cols-2">
									<div className="rounded-2xl border border-sage-mist bg-surface p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-meta">
											Volunteer slots
										</p>
										<p className="mt-2 text-2xl font-semibold text-ink">
											4 / 6
										</p>
										<p className="text-xs text-meta">Still needed today</p>
									</div>
									<div className="rounded-2xl border border-sage-mist bg-surface p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-meta">
											Supply list
										</p>
										<p className="mt-2 text-2xl font-semibold text-ink">
											12 items
										</p>
										<p className="text-xs text-meta">8 already claimed</p>
									</div>
								</div>
								<div className="flex items-center justify-between rounded-2xl bg-sage-deep px-4 py-3 text-cream">
									<p className="text-sm font-semibold">
										Program ends in 2 days
									</p>
									{/* Part of the mock, not a control. It was a real <button>
									    with no handler, which is indistinguishable from the four
									    dead CTAs this page actually had. */}
									<span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-sage-deep">
										Archive on Friday
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="use-cases" className="bg-cream-tinted py-16">
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-meta">
									Target use cases
								</p>
								<h2 className="mt-2 text-3xl font-semibold text-ink">
									Built for short-lived, high-trust programs
								</h2>
							</div>
							<p className="max-w-xl text-body">
								Sessionly shines when programs are temporary and communication
								needs to be calm, clear, and instructor-led — whether you run
								one class or fifty.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{USE_CASES.map((item) => (
								<div
									key={item.title}
									className="rounded-2xl border border-sage-mist bg-surface p-6 shadow-sm"
								>
									<p className="text-sm font-semibold text-ink">{item.title}</p>
									<p className="mt-2 text-sm text-body">{item.body}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="principles" className="py-16">
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-meta">
									Core principles
								</p>
								<h2 className="mt-2 text-3xl font-semibold text-ink">
									Clarity over noise.
								</h2>
								<p className="mt-4 text-body">
									Sessionly is designed for closure, authority, and calm
									communication. It supports instructors in leading programs
									with confidence while parents stay informed and supported.
								</p>
							</div>
							<div className="space-y-6">
								{PRINCIPLES.map((principle) => (
									<div
										key={principle.title}
										className="rounded-2xl border border-sage-mist bg-surface p-6 shadow-sm"
									>
										<h3 className="text-lg font-semibold text-ink">
											{principle.title}
										</h3>
										<p className="mt-2 text-sm text-body">
											{principle.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="bg-sage-deep py-16 text-cream">
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-sage-mist">
									Features
								</p>
								<h2 className="mt-2 text-3xl font-semibold">
									Everything a short program needs. Nothing it doesn&apos;t.
								</h2>
							</div>
							<p className="max-w-xl text-sage-mist">
								Sessionly supports instructors with structured workflows while
								parents get exactly the information they need.
							</p>
						</div>
						<div className="mt-10 grid gap-8 md:grid-cols-3">
							<div className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-sage-mist">
									For instructors
								</p>
								<ul className="mt-4 space-y-3 text-sm text-cream">
									<li>Create programs with start and end dates.</li>
									<li>Post announcements to all enrolled families.</li>
									<li>Manage schedules, sessions, and attendance.</li>
									<li>View and organize family rosters.</li>
									<li>Request volunteers and supply help.</li>
									<li>
										Run events that need a permission slip, and chase the ones
										outstanding.
									</li>
									<li>
										Reach every family by email, so nobody is excluded for not
										installing an app.
									</li>
									<li>Archive programs when they conclude.</li>
								</ul>
							</div>
							<div className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-sage-mist">
									For operators running several programs
								</p>
								{/*
								 * Surfaces are named per bullet on purpose. Every claim here
								 * is true of the product, but they do not all live in the
								 * same place -- applications and triage are the web console,
								 * equipment and letters are the mobile app, and the school
								 * calendar is both. Verified 2026-08-30: `web-console/` has
								 * ZERO references to equipment. A column headed "for
								 * operators" whose second bullet says "web console" would
								 * otherwise read as a promise that all five are in it, which
								 * is the kind of thing a buyer discovers in a demo.
								 */}
								<ul className="mt-4 space-y-3 text-sm text-cream">
									<li>Take applications on a public page, with your own questions.</li>
									<li>Review, accept, and waitlist from one web console.</li>
									<li>
										See which class days hit a school closure — in the console,
										and before you generate a recurring schedule.
									</li>
									<li>
										Track shared equipment across terms from your phone — who
										has kit 7, and what never came back.
									</li>
									<li>
										Draft the welcome letter from the program you already set
										up.
									</li>
								</ul>
							</div>
							<div className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-sage-mist">
									For parents
								</p>
								<ul className="mt-4 space-y-3 text-sm text-cream">
									<li>Apply to a program online, or join instantly with an invite code.</li>
									<li>Read announcements with emoji reactions.</li>
									<li>See upcoming schedules and sessions.</li>
									<li>Sign up for volunteer opportunities.</li>
									<li>Commit to bringing needed supplies.</li>
									<li>Access archived programs in read-only mode.</li>
									<li>
										Get announcements by email, or in the app — whichever suits
										you.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="border-t border-sage-mist bg-cream py-16">
					<div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
						<div>
							<h2 className="text-3xl font-semibold text-ink">
								Bring calm to your next program.
							</h2>
							<p className="mt-2 text-body">
								Invite parents, coordinate volunteers, and end on a strong note.
							</p>
						</div>
						<div className="flex flex-wrap gap-4">
							<a
								href={CONSOLE_URL}
								className="rounded-full bg-sage-deep px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-sage"
							>
								Get Sessionly
							</a>
							<a
								href={salesMailto}
								className="rounded-full border border-sage-mist px-6 py-3 text-sm font-semibold text-body transition hover:border-sage hover:text-ink"
							>
								Talk to sales
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-sage-mist bg-cream-tinted py-10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-meta">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="font-semibold text-ink">Sessionly</p>
							<p>Calm, structured communication for short-lived programs.</p>
						</div>
						{/*
						 * `Security` and `Support` were <span>s — dead text styled to look
						 * like links, next to a real one. Contact is a real mailto; the
						 * two dead entries are gone rather than pointed at pages that do
						 * not exist. A Terms of Service is still owed (TODOS #113) and is
						 * deliberately NOT stubbed here: legal text nobody has written is
						 * worse absent than invented.
						 */}
						<div className="flex flex-wrap gap-6">
							<Link to="/privacy" className="hover:text-ink">
								Privacy
							</Link>
							<Link to="/terms" className="hover:text-ink">
								Terms
							</Link>
							<a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">
								Contact
							</a>
						</div>
					</div>
					<div className="border-t border-sage-mist pt-6 text-xs text-meta">
						<p>&copy; 2026 G&amp;J Family Ventures LLC. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
