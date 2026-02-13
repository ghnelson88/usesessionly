import type { Route } from "./+types/privacy";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Privacy Policy — Sessionly" },
		{
			name: "description",
			content:
				"Sessionly Privacy Policy. Learn how we collect, use, store, and protect your information.",
		},
	];
}

export default function Privacy() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<header className="border-b border-slate-200">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
							S
						</span>
						<div>
							<p className="text-lg font-semibold">Sessionly</p>
							<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
								Program Communication
							</p>
						</div>
					</Link>
					<Link
						to="/"
						className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
					>
						Back to home
					</Link>
				</div>
			</header>

			<main className="mx-auto w-full max-w-3xl px-6 py-16">
				<h1 className="text-4xl font-semibold text-slate-900">
					Privacy Policy
				</h1>
				<div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
					<p>
						<span className="font-medium text-slate-700">Effective Date:</span>{" "}
						[Insert Date]
					</p>
					<p>
						<span className="font-medium text-slate-700">Last Updated:</span>{" "}
						[Insert Date]
					</p>
				</div>

				<div className="mt-10 space-y-10 text-slate-600 leading-relaxed">
					<p>
						Sessionly (&quot;Sessionly,&quot; &quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;) respects your privacy. This Privacy Policy explains
						how we collect, use, store, and protect your information when you use
						the Sessionly mobile application (the &quot;App&quot;).
					</p>
					<p>
						Sessionly is designed for calm, structured communication between
						instructors and parents during short-lived programs. We collect only
						the information necessary to provide that service.
					</p>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							1. Who This Policy Applies To
						</h2>
						<p className="mt-4">This policy applies to:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-slate-700">Instructors</span>{" "}
								who create and manage programs
							</li>
							<li>
								<span className="font-medium text-slate-700">
									Parents / Guardians
								</span>{" "}
								who join programs via invite code
							</li>
						</ul>
						<p className="mt-4">
							Sessionly does not create student accounts and does not collect
							information directly from children.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							2. Information We Collect
						</h2>
						<p className="mt-4">
							We collect information in the following categories:
						</p>

						<h3 className="mt-6 text-lg font-semibold text-slate-800">
							A. Account Information
						</h3>
						<p className="mt-2">When you create an account, we collect:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Full name</li>
							<li>Email address</li>
							<li>Role (Instructor or Parent)</li>
							<li>
								Encrypted password (handled securely via authentication
								provider)
							</li>
						</ul>

						<h3 className="mt-6 text-lg font-semibold text-slate-800">
							B. Program Participation Information
						</h3>
						<p className="mt-2">Depending on your role:</p>
						<p className="mt-4 font-medium text-slate-700">
							Instructors may provide:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Program name and description</li>
							<li>Program dates and location</li>
							<li>Announcements</li>
							<li>Schedule sessions</li>
							<li>Volunteer needs</li>
							<li>Supply needs</li>
							<li>Invite codes</li>
						</ul>
						<p className="mt-4 font-medium text-slate-700">
							Parents may provide:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Child&apos;s first name (for roster purposes)</li>
							<li>Volunteer signups</li>
							<li>Supply commitments</li>
							<li>Emoji reactions to announcements</li>
						</ul>

						<h3 className="mt-6 text-lg font-semibold text-slate-800">
							C. Technical Information
						</h3>
						<p className="mt-2">
							We collect limited technical data necessary for app functionality:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Authentication tokens (stored securely on your device)
							</li>
							<li>
								Device and session information required for login persistence
							</li>
							<li>
								Basic usage logs for reliability and security monitoring
							</li>
						</ul>
						<p className="mt-4 font-medium text-slate-700">
							We do not collect:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Location tracking data</li>
							<li>Contacts from your phone</li>
							<li>Photo library access</li>
							<li>
								Microphone or camera data (unless required by future features
								and explicitly requested)
							</li>
							<li>Background behavioral tracking</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							3. How We Use Your Information
						</h2>
						<p className="mt-4">We use your information only to:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Create and manage your account</li>
							<li>Authenticate your identity</li>
							<li>
								Route you to the correct role experience (Instructor or Parent)
							</li>
							<li>Allow instructors to manage programs</li>
							<li>Allow parents to participate in programs</li>
							<li>
								Enable announcements, schedules, volunteer signups, and supply
								commitments
							</li>
							<li>Maintain security and prevent unauthorized access</li>
							<li>Provide customer support</li>
							<li>Comply with legal obligations</li>
						</ul>
						<p className="mt-4 font-medium text-slate-700">We do not:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Sell your data</li>
							<li>Rent your data</li>
							<li>Use your data for advertising</li>
							<li>Profile users for marketing</li>
							<li>Share data with third-party advertisers</li>
						</ul>
						<p className="mt-4">
							Sessionly is not an engagement-driven platform and does not
							monetize user behavior.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							4. Role-Based Data Access
						</h2>
						<p className="mt-4">
							Sessionly enforces strict role-based access control:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Instructors can access only programs they own.</li>
							<li>
								Parents can access only programs they are enrolled in.
							</li>
							<li>Parents cannot message other parents.</li>
							<li>
								Parents cannot see other parents&apos; private data beyond what
								appears in program context.
							</li>
							<li>
								Users can only modify their own profile, reactions, signups,
								and commitments.
							</li>
						</ul>
						<p className="mt-4">
							All access control is enforced at the database level, not just in
							the app interface.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							5. Data Storage &amp; Security
						</h2>
						<p className="mt-4">
							Sessionly is built on secure infrastructure:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Data is stored in a managed PostgreSQL database.</li>
							<li>
								Row Level Security (RLS) policies restrict access at the
								database layer.
							</li>
							<li>
								Authentication is handled via secure token-based sessions.
							</li>
							<li>
								Tokens are stored in secure device storage (not local plaintext
								storage).
							</li>
							<li>
								We do not embed elevated server keys in the mobile application.
							</li>
							<li>All network traffic is encrypted via HTTPS.</li>
						</ul>
						<p className="mt-4">
							We implement reasonable administrative, technical, and
							organizational safeguards to protect your information.
						</p>
						<p className="mt-2">
							No system is 100% secure, but we design for safety,
							predictability, and auditability.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							6. Program Lifecycle &amp; Archiving
						</h2>
						<p className="mt-4">
							Programs in Sessionly are temporary by design.
						</p>
						<p className="mt-2">When a program is archived:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>It becomes read-only.</li>
							<li>New announcements and updates are disabled.</li>
							<li>Parents retain access to historical content.</li>
							<li>Volunteer and supply actions are disabled.</li>
						</ul>
						<p className="mt-4">We retain archived program data unless:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>An instructor deletes their account, or</li>
							<li>A user requests deletion (see Section 9).</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							7. Third-Party Services
						</h2>
						<p className="mt-4">
							Sessionly uses trusted infrastructure providers for:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Authentication</li>
							<li>Secure data storage</li>
							<li>Push notification delivery</li>
							<li>Application hosting</li>
						</ul>
						<p className="mt-4">
							These providers process data only as necessary to operate the
							service and are contractually obligated to maintain
							confidentiality and security.
						</p>
						<p className="mt-2">
							Sessionly does not integrate with advertising networks.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							8. Children&apos;s Privacy
						</h2>
						<p className="mt-4">
							Sessionly does not create accounts for children.
						</p>
						<p className="mt-2">
							Parents may enter a child&apos;s first name solely for roster
							identification within a program. We do not collect:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Child email addresses</li>
							<li>Child phone numbers</li>
							<li>Academic records</li>
							<li>Behavioral records</li>
							<li>Grades or assessments</li>
						</ul>
						<p className="mt-4">
							If you believe we have collected information directly from a child
							inappropriately, please contact us.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							9. Your Rights &amp; Choices
						</h2>
						<p className="mt-4">
							Depending on your jurisdiction, you may have the right to:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Access your personal information</li>
							<li>Correct inaccurate information</li>
							<li>
								Request deletion of your account and associated data
							</li>
							<li>Withdraw consent where applicable</li>
						</ul>
						<p className="mt-4">
							To request account deletion, contact:{" "}
							<a
								href="mailto:help@usesessionly.com"
								className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-700"
							>
								help@usesessionly.com
							</a>
						</p>
						<p className="mt-4">When you delete your account:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Your user profile is removed.</li>
							<li>Your program enrollments are removed.</li>
							<li>Your reactions and commitments are deleted.</li>
							<li>
								Instructor-owned program content may remain if required for
								other participants.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							10. Data Retention
						</h2>
						<p className="mt-4">We retain information:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>For the duration of your account</li>
							<li>For the lifecycle of programs you participate in</li>
							<li>As required to comply with legal obligations</li>
						</ul>
						<p className="mt-4">
							We do not retain data longer than necessary to provide the
							service.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							11. International Users
						</h2>
						<p className="mt-4">
							If you access Sessionly outside the country where our servers are
							located, your information may be transferred and processed in that
							country. By using the App, you consent to that transfer.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							12. Changes to This Policy
						</h2>
						<p className="mt-4">
							We may update this Privacy Policy from time to time.
						</p>
						<p className="mt-2">If changes are material, we will:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Update the &quot;Last Updated&quot; date</li>
							<li>Provide notice within the App where appropriate</li>
						</ul>
						<p className="mt-4">
							Continued use of Sessionly after changes indicates acceptance of
							the updated policy.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-slate-900">
							13. Contact Us
						</h2>
						<p className="mt-4">
							If you have questions about this Privacy Policy or our data
							practices, contact:
						</p>
						<p className="mt-2">
							Email:{" "}
							<a
								href="mailto:help@usesessionly.com"
								className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-700"
							>
								help@usesessionly.com
							</a>
						</p>
					</section>
				</div>
			</main>

			<footer className="border-t border-slate-200 bg-slate-50 py-10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="font-semibold text-slate-700">Sessionly</p>
						<p>Calm, structured communication for short-lived programs.</p>
					</div>
					<div className="flex flex-wrap gap-6">
						<span className="font-medium text-slate-700">Privacy</span>
						<span>Security</span>
						<span>Support</span>
					</div>
				</div>
			</footer>
		</div>
	);
}
