import type { Route } from "./+types/privacy";
import { Link } from "react-router";

/*
 * This policy is rewritten against the product as it actually exists, not as
 * it existed when the page was first written. Every factual claim below was
 * checked against the Sessionly repo — the migrations, the intake form, and
 * the client — on 2026-08-30. See `docs/privacy-rewrite-2026-08-30.md` there
 * for the claim-by-claim record of what changed and why.
 *
 * Three things this document must not do, because each of them was true of
 * the version it replaces:
 *   1. Scope itself to "the mobile application". Two public web properties are
 *      live, and one of them takes data about a named child from a member of
 *      the public who has no account.
 *   2. Promise deletion the product does not perform. Account erasure
 *      ANONYMISES and can REFUSE outright; it does not cascade.
 *   3. Deny collecting behavioural records. Per-child attendance,
 *      permission-slip state and equipment custody all exist.
 */

const CONTACT_EMAIL = "ops@usesessionly.com";
const EFFECTIVE_DATE = "2026-08-30";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Privacy Policy — Sessionly" },
		{
			name: "description",
			content:
				"Sessionly Privacy Policy. What we collect across the app, the application site, and the operator console — and what happens when you delete your account.",
		},
	];
}

export default function Privacy() {
	return (
		<div className="min-h-screen bg-cream text-ink">
			<header className="border-b border-sage-mist">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-deep text-sm font-semibold text-white">
							S
						</span>
						<div>
							<p className="text-lg font-semibold">Sessionly</p>
							<p className="text-xs uppercase tracking-[0.2em] text-meta">
								Program Communication
							</p>
						</div>
					</Link>
					<Link
						to="/"
						className="rounded-full border border-sage-mist px-5 py-2 text-sm font-semibold text-body transition hover:border-sage hover:text-ink"
					>
						Back to home
					</Link>
				</div>
			</header>

			<main className="mx-auto w-full max-w-3xl px-6 py-16">
				<h1 className="text-4xl font-semibold text-ink">
					Privacy Policy
				</h1>
				<div className="mt-4 flex flex-wrap gap-4 text-sm text-meta">
					<p>
						<span className="font-medium text-body">Effective Date:</span>{" "}
						{EFFECTIVE_DATE}
					</p>
					<p>
						<span className="font-medium text-body">Last Updated:</span>{" "}
						{EFFECTIVE_DATE}
					</p>
				</div>

				<div className="mt-10 space-y-10 text-body leading-relaxed">
					<p>
						Sessionly (&quot;Sessionly,&quot; &quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;) respects your privacy. This Privacy Policy explains
						how we collect, use, store, and protect your information when you use
						the Sessionly mobile application, our program application site at{" "}
						<span className="font-medium text-body">
							apply.usesessionly.com
						</span>
						, and our operator console at{" "}
						<span className="font-medium text-body">
							manage.usesessionly.com
						</span>{" "}
						(together, the &quot;Service&quot;).
					</p>
					<p>
						Sessionly is designed for calm, structured communication between
						instructors and parents during short-lived programs. We collect only
						the information necessary to provide that service. We do not sell it,
						we do not advertise against it, and we do not use it to profile
						anyone.
					</p>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							1. Who This Policy Applies To
						</h2>
						<p className="mt-4">This policy applies to:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">Instructors</span>{" "}
								who create and manage programs
							</li>
							<li>
								<span className="font-medium text-body">
									Parents / Guardians
								</span>{" "}
								who join a program with an invite code, or by applying online
							</li>
							<li>
								<span className="font-medium text-body">Applicants</span>{" "}
								who submit an application at apply.usesessionly.com without
								creating an account
							</li>
							<li>
								<span className="font-medium text-body">
									Organisation staff
								</span>{" "}
								— coordinators and teachers who belong to a shared provider
								organisation and use the operator console
							</li>
						</ul>
						<p className="mt-4">
							Sessionly does not create accounts for children and does not
							collect information directly from children. Information about a
							child is provided by that child&apos;s parent or guardian, or by
							the instructor running their program.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							2. Information We Collect
						</h2>
						<p className="mt-4">
							We collect information in the following categories:
						</p>

						<h3 className="mt-6 text-lg font-semibold text-ink">
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

						<h3 className="mt-6 text-lg font-semibold text-ink">
							B. Program Participation Information
						</h3>
						<p className="mt-2">Depending on your role:</p>
						<p className="mt-4 font-medium text-body">
							Instructors may provide:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Program name, description, dates, and location</li>
							<li>Announcements, and the audience each one is sent to</li>
							<li>Schedule sessions, including days a school is closed</li>
							<li>Volunteer needs and supply needs</li>
							<li>Invite codes</li>
							<li>
								A roster entry for each enrolled child: the child&apos;s name,
								and optionally their grade, school, classroom teacher, and
								before- and after-class care arrangements
							</li>
							<li>
								Whether a child&apos;s program fee is unpaid, paid, waived, or
								refunded, and any note the instructor writes about it. Sessionly
								does not process payments and never sees card details — this is
								a record of a payment made elsewhere
							</li>
							<li>
								Attendance for each session, and whether a permission slip has
								been returned for an event
							</li>
							<li>
								Which piece of program equipment a child currently has out
							</li>
							<li>
								Names, email addresses and roles for school staff they want
								copied on staff announcements
							</li>
						</ul>
						<p className="mt-4 font-medium text-body">
							Parents may provide:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Their child&apos;s name and enrolment details</li>
							<li>Volunteer signups</li>
							<li>Supply commitments</li>
							<li>Emoji reactions to announcements</li>
							<li>
								Whether their child will attend an event that needs a permission
								slip
							</li>
						</ul>

						<h3 className="mt-6 text-lg font-semibold text-ink">
							C. Technical Information
						</h3>
						<p className="mt-2">
							We collect limited technical data necessary for app functionality:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Authentication tokens (stored securely on your device)</li>
							<li>
								Device and session information required for login persistence
							</li>
							<li>
								A push notification token, if you allow notifications. You can
								decline, and the app works without it
							</li>
							<li>
								Error reports when something goes wrong, so we can fix it.
								These are configured not to capture personal information, and
								we do not record your screen or your keystrokes
							</li>
							<li>
								A small number of first-party product events — for example that
								a volunteer need was filled, that attendance was completed for a
								session, or that someone joined a program. These are stored in
								our own database, linked to your account, and contain
								identifiers and counts rather than names or free text. They are
								not sent to any analytics company
							</li>
							<li>
								Whether an announcement has been opened. This is reported to the
								instructor only as a count of how many households have opened
								it — no instructor, coordinator, or anyone else can see whether
								a particular person opened a particular announcement
							</li>
						</ul>
						<p className="mt-4 font-medium text-body">
							We do not collect:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Location data. The app requests no location permission. Locations
								you type into a program or session are stored only as the text
								you wrote
							</li>
							<li>Contacts from your phone</li>
							<li>Photo library, camera, or microphone data</li>
							<li>Advertising identifiers, or data for advertising networks</li>
							<li>
								Behavioural profiling, engagement scoring, or cross-site
								tracking
							</li>
						</ul>
						<p className="mt-2">
							The mobile app requests exactly one device permission:
							notifications.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-ink">
							D. Program Applications
						</h3>
						<p className="mt-2">
							When you apply to a program at apply.usesessionly.com you do not
							need an account, and we do not ask you to create one. You provide:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">
									About your child:
								</span>{" "}
								their name (required), and optionally their grade, their school,
								and their classroom teacher
							</li>
							<li>
								<span className="font-medium text-body">
									Care and dismissal:
								</span>{" "}
								whether your child will be in a care program before the class
								and whether they go to one afterwards, and if so the name of
								that care program. We treat this as child-safety information,
								not a preference
							</li>
							<li>
								<span className="font-medium text-body">
									About your household:
								</span>{" "}
								your name and email address (required), your phone number, and
								optionally a second guardian&apos;s name, email, and phone
							</li>
							<li>
								<span className="font-medium text-body">
									Scholarship:
								</span>{" "}
								whether you are requesting a scholarship. This indicates
								financial need, and is visible to the operator of the program
								you applied to
							</li>
							<li>
								<span className="font-medium text-body">
									A written answer or a video:
								</span>{" "}
								a short written answer to a question the instructor chooses, or
								a link to a short video instead. If you provide a link, we store
								the link and not the video — the video stays wherever you host
								it, and the form asks you to make sure anyone with the link can
								view it
							</li>
						</ul>
						<p className="mt-4">
							We also record the IP address the application was submitted from,
							in order to limit abuse. Those records are deleted once they are
							more than an hour old; the deletion runs when the next application
							arrives, so a record can persist longer if nobody applies in the
							meantime. IP addresses are not linked to your application.
						</p>
						<p className="mt-2">
							The application form does{" "}
							<span className="font-medium text-body">not</span> ask for a
							date of birth, a home address, allergies, medical information, or
							emergency contacts, and there is nowhere in Sessionly to store
							them.
						</p>
						<p className="mt-2">
							An application is visible to the instructor of the program you
							applied to, and to coordinators of the organisation that runs it
							(see Section 4). If your application is accepted, we email you a
							link to join, and the details you provided become the starting
							point for your child&apos;s roster entry.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
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
								Enable announcements, schedules, volunteer signups, supply
								commitments, attendance, events, and equipment tracking
							</li>
							<li>
								Let an instructor or coordinator review, accept, waitlist, or
								decline applications to their programs
							</li>
							<li>
								Send program communications by email and, where you have allowed
								it, by push notification
							</li>
							<li>Maintain security and prevent unauthorized access</li>
							<li>Provide customer support</li>
							<li>Comply with legal obligations</li>
						</ul>
						<p className="mt-4 font-medium text-body">We do not:</p>
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
						<h2 className="text-2xl font-semibold text-ink">
							4. Role-Based Data Access
						</h2>
						<p className="mt-4">
							Sessionly enforces strict role-based access control:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Instructors can access only programs they own.</li>
							<li>
								An instructor can see the names and email addresses of the
								guardians enrolled in their own programs, and the phone numbers
								those guardians supplied on an application.
							</li>
							<li>Parents can access only programs they are enrolled in.</li>
							<li>
								<span className="font-medium text-body">
									Parents cannot see other families.
								</span>{" "}
								A parent cannot read another household&apos;s child, their care
								or payment details, their attendance, or any other
								guardian&apos;s name, email, or phone number.
							</li>
							<li>Parents cannot message other parents.</li>
							<li>
								Users can only modify their own profile, reactions, signups, and
								commitments.
							</li>
						</ul>
						<p className="mt-4 font-medium text-body">
							Organisations and coordinators
						</p>
						<p className="mt-2">
							A program can be run under a shared provider organisation — an
							after-school enrichment company, for example. Where it is, a
							person holding the{" "}
							<span className="font-medium text-body">coordinator</span>{" "}
							role in that organisation can read, for{" "}
							<span className="font-medium text-body">every</span> program
							the organisation runs and not only the ones they teach: the
							programs themselves, applications submitted to them (including the
							written answer, the video link, the scholarship request, and
							guardian contact details), enrolments and their guardian links,
							the children&apos;s roster entries including care and payment
							details, payment records, equipment assignments, event
							participation, the staff contact list, and announcements addressed
							to staff.
						</p>
						<p className="mt-2">
							Two limits on that role are enforced in the database rather than
							in the interface. A coordinator{" "}
							<span className="font-medium text-body">cannot</span> read
							individual attendance records — they see only aggregate counts for
							a program. And a coordinator{" "}
							<span className="font-medium text-body">cannot</span> read
							announcements an instructor addressed to families; only those
							addressed to staff.
						</p>
						<p className="mt-2">
							A person holding the{" "}
							<span className="font-medium text-body">teacher</span> role
							in an organisation gains none of the above. They can see the
							organisation&apos;s equipment inventory and whether an item is
							currently out, and nothing about children or guardians in programs
							they do not run.
						</p>
						<p className="mt-4">
							All access control is enforced at the database level, not just in
							the app interface.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							5. Data Storage &amp; Security
						</h2>
						<p className="mt-4">Sessionly is built on secure infrastructure:</p>
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
								We do not embed elevated server keys in the mobile application,
								the application site, or the operator console.
							</li>
							<li>All network traffic is encrypted via HTTPS.</li>
							<li>
								Application submissions are rate limited, and invite code
								redemption is limited to five attempts per fifteen minutes.
							</li>
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
						<h2 className="text-2xl font-semibold text-ink">
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
						<p className="mt-4">
							We retain archived program data so that families keep access to
							their own history. An archived program is not deleted when the
							instructor who created it deletes their account — it remains, no
							longer attributed to anyone, and the families in it keep their
							access. Personal details within it are anonymised as described in
							Section 9.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							7. Third-Party Services
						</h2>
						<p className="mt-4">
							Sessionly uses the following providers to operate the Service:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">Supabase</span> —
								database, authentication, and secure data storage. All program
								data lives here.
							</li>
							<li>
								<span className="font-medium text-body">Resend</span> —
								delivery of the email we send to families and staff. Resend
								receives the recipient&apos;s email address and the full content
								of the message.{" "}
								<span className="font-medium text-body">
									This includes a child&apos;s name
								</span>{" "}
								— an acceptance email carries it in the subject line and in the
								body — as well as the program name and whatever the instructor
								wrote. Our emails contain no tracking pixels and load no
								external images.
							</li>
							<li>
								<span className="font-medium text-body">Expo</span> —
								delivery of push notifications, and over-the-air updates to the
								mobile app. A push carries a program name and a short
								operational sentence; it does not carry a child&apos;s name or
								the text of an announcement. The app checks for updates when it
								launches, which tells Expo the device&apos;s IP address and
								platform.
							</li>
							<li>
								<span className="font-medium text-body">Sentry</span> —
								error and reliability monitoring across the app, the application
								site, and the console. Session replay is disabled, and the
								sending of personal information with error reports is switched
								off.
							</li>
							<li>
								<span className="font-medium text-body">Vercel</span> —
								hosting for apply.usesessionly.com and manage.usesessionly.com.
							</li>
							<li>
								<span className="font-medium text-body">Cloudflare</span> —
								hosting for this website.
							</li>
						</ul>
						<p className="mt-4">
							These providers process data only as necessary to operate the
							Service and are contractually obligated to maintain
							confidentiality and security.
						</p>
						<p className="mt-2">
							Sessionly does not integrate with advertising networks, does not
							use a third-party analytics or tracking SDK, and does not use a
							payment processor.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							8. Children&apos;s Privacy
						</h2>
						<p className="mt-4">
							Sessionly does not create accounts for children, and children do
							not log in. We do not collect child email addresses, child phone
							numbers, grades or assessments from a school, or academic records.
						</p>
						<p className="mt-2">
							Information about a child is entered by their parent or guardian,
							or by the instructor running their program. Beyond the roster and
							application details described in Section 2, an instructor may
							record, for children in their own program:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">Attendance</span>{" "}
								for each session — present, absent, late, or excused
							</li>
							<li>
								Whether a{" "}
								<span className="font-medium text-body">
									permission slip
								</span>{" "}
								has been returned for an event, and whether the child is
								attending it. Sessionly never holds the signed paper form itself
							</li>
							<li>
								Which piece of{" "}
								<span className="font-medium text-body">
									program equipment
								</span>{" "}
								the child currently has out, and since when
							</li>
						</ul>
						<p className="mt-4">
							This is a record of participation in one short program. It is
							visible to that program&apos;s instructor and to the child&apos;s
							own guardians, and it is retained with the program record. It is
							not shared outside the program, not used to build a profile, and
							not combined with anything else.
						</p>
						<p className="mt-4">
							If you are a parent and want your child&apos;s details corrected
							or removed, contact your program&apos;s instructor, or contact us
							at{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="font-medium text-ink underline underline-offset-2 hover:text-ink"
							>
								{CONTACT_EMAIL}
							</a>
							. If you believe we have collected information directly from a
							child, please contact us and we will remove it.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							9. Your Rights &amp; Choices
						</h2>
						<p className="mt-4">
							Depending on your jurisdiction, you may have the right to:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Access your personal information</li>
							<li>Correct inaccurate information</li>
							<li>Request deletion of your account and associated data</li>
							<li>Withdraw consent where applicable</li>
						</ul>
						<p className="mt-4">
							You can see and correct your own profile in the app. For anything
							else — including a copy of your data, which we produce by hand
							rather than through a self-serve export — contact us at{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="font-medium text-ink underline underline-offset-2 hover:text-ink"
							>
								{CONTACT_EMAIL}
							</a>
							.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-ink">
							Deleting your account
						</h3>
						<p className="mt-2">
							You can delete your account yourself, from your profile in the
							mobile app. You will be asked to type a confirmation word first.
							Deletion then happens immediately — there is no waiting period,
							and there is no undo. You can also email us at{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="font-medium text-ink underline underline-offset-2 hover:text-ink"
							>
								{CONTACT_EMAIL}
							</a>{" "}
							and we will do it for you.
						</p>
						<p className="mt-4">
							In two situations we will{" "}
							<span className="font-medium text-body">
								ask you to do something first
							</span>
							, and the deletion will not proceed until you have:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								If you own a program that has not yet been archived or
								cancelled, archive or cancel it first. Deleting your account
								would otherwise take away the program that enrolled families are
								relying on.
							</li>
							<li>
								If you own a shared organisation that still has other members,
								transfer ownership to one of them first.
							</li>
						</ul>
						<p className="mt-4 font-medium text-body">
							What happens when your account is deleted
						</p>
						<p className="mt-2">
							Deletion removes you. It does not erase the programs other people
							were part of. Specifically:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">Deleted:</span>{" "}
								your profile and login credentials, your emoji reactions, your
								volunteer signups, your supply commitments, and your push
								notification tokens.
							</li>
							<li>
								<span className="font-medium text-body">
									Handed to your co-parent:
								</span>{" "}
								where your child has another guardian on the same enrolment,
								that enrolment passes to them, intact. The family keeps its
								place in the program.
							</li>
							<li>
								<span className="font-medium text-body">
									Anonymised, not erased:
								</span>{" "}
								otherwise, your enrolment record, your child&apos;s roster
								entry, and any application you submitted are stripped of the
								details that identify you. Names are replaced with a
								placeholder; your email, phone, second guardian, written answer,
								teacher and care details, and payment notes are cleared. The
								de-identified rows remain, so that the instructor&apos;s
								attendance record and program history stay intact.
							</li>
							<li>
								<span className="font-medium text-body">
									Kept, no longer attributed to you:
								</span>{" "}
								programs and announcements you created as an instructor, and any
								organisation you owned, remain with the program. They belong to
								nobody afterwards, and the families in them keep their access.
								Attendance, payment and application records remain in
								anonymised form, and your name is removed from the fields
								recording who took an action.
							</li>
						</ul>
						<p className="mt-4">
							Emails we already sent you are redacted at the same time, with one
							exception: a message sent to you as an applicant, before you had
							an account, is not reached by that redaction and is instead
							removed by our routine deletion of sent-email records after 90
							days.
						</p>
						<p className="mt-2">
							If you applied to a program and never created an account, your
							application is not connected to any login, so there is no account
							to delete. Contact us and we will redact it.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							10. Data Retention
						</h2>
						<p className="mt-4">We retain information:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>For the duration of your account</li>
							<li>For the lifecycle of programs you participate in</li>
							<li>As required to comply with legal obligations</li>
						</ul>
						<p className="mt-4">Some data is deleted on a fixed schedule:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Records of the emails we have sent, including their content, are
								deleted after 90 days.
							</li>
							<li>
								IP addresses recorded against application submissions are
								deleted once they are more than an hour old.
							</li>
							<li>
								Invite code attempt records used for rate limiting are deleted
								after an hour.
							</li>
						</ul>
						<p className="mt-4">
							We do not retain data longer than necessary to provide the
							service.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							11. International Users
						</h2>
						<p className="mt-4">
							Sessionly is operated from the United States, and the Service and
							its providers process data there. If you access Sessionly from
							outside the United States, your information will be transferred to
							and processed in the United States. By using the Service, you
							consent to that transfer.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							12. Changes to This Policy
						</h2>
						<p className="mt-4">
							We may update this Privacy Policy from time to time.
						</p>
						<p className="mt-2">If changes are material, we will:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Update the &quot;Last Updated&quot; date above</li>
							<li>Provide notice within the Service where appropriate</li>
						</ul>
						<p className="mt-4">
							We encourage you to review this policy from time to time. If you
							do not agree with an update, you can delete your account as
							described in Section 9.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							13. Contact Us
						</h2>
						<p className="mt-4">
							If you have questions about this Privacy Policy or our data
							practices, contact:
						</p>
						<p className="mt-2">
							Email:{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="font-medium text-ink underline underline-offset-2 hover:text-ink"
							>
								{CONTACT_EMAIL}
							</a>
						</p>
					</section>
				</div>
			</main>

			<footer className="border-t border-sage-mist bg-cream-tinted py-10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-meta">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="font-semibold text-body">Sessionly</p>
							<p>Calm, structured communication for short-lived programs.</p>
						</div>
						{/* Matches home.tsx. "Security" and "Support" were dead <span>s
						    styled to sit in a link row; gone rather than pointed at pages
						    that 404. "Privacy" stays a plain span because this IS the
						    privacy page. */}
						<div className="flex flex-wrap gap-6">
							<span className="font-medium text-body">Privacy</span>
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
