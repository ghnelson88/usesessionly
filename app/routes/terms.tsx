import type { Route } from "./+types/terms";
import { Link } from "react-router";

/*
 * These Terms are written against the product as it actually exists. Every
 * operative clause below was checked against the Sessionly repo — the
 * migrations, the intake form, and the client — on 2026-08-30. See
 * `docs/terms-draft-2026-08-30.md` there for the clause-by-clause record of
 * what grounds each statement, and for the list of decisions a lawyer still
 * owes us.
 *
 * Four things this document must not do:
 *   1. Describe billing, subscriptions, plans, refunds or a payment processor.
 *      None exist. `payment_events` records a status an operator typed; no
 *      money moves through Sessionly, and a "refund" here is a note, not a
 *      transaction.
 *   2. Reference an app store. The mobile app is distributed by TestFlight and
 *      over-the-air updates and is on neither store.
 *   3. Promise deletion the product does not perform. Account erasure
 *      ANONYMISES, and it REFUSES outright in two named situations. This must
 *      stay consistent with Section 9 of the Privacy Policy.
 *   4. Assert a governing law or venue without a decision behind it. See the
 *      TODO(legal) marker below.
 *
 * There is deliberately NO arbitration clause and NO class-action waiver. Those
 * are not clauses to draft speculatively.
 */

const CONTACT_EMAIL = "ops@usesessionly.com";
const EFFECTIVE_DATE = "2026-08-30";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Terms of Service — Sessionly" },
		{
			name: "description",
			content:
				"Sessionly Terms of Service. Who may use it, what instructors are responsible for, what happens when a program closes, and what account deletion actually does.",
		},
	];
}

export default function Terms() {
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
				<h1 className="text-4xl font-semibold text-ink">Terms of Service</h1>
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

				<div className="mt-8 rounded-2xl border border-sage-mist bg-surface p-6 text-sm text-body">
					<p className="font-semibold text-ink">Before you read on</p>
					<p className="mt-2">
						These Terms take effect on {EFFECTIVE_DATE} and apply from that date
						to everyone using Sessionly. If we change anything that materially
						affects your rights or what you can do with the Service, we will
						update the date above and tell you inside the Service before the
						change takes effect.
					</p>
					<p className="mt-2">
						They are written in plain English on purpose. Where a section
						describes what the software does — archiving, deletion, email — it
						describes the behaviour we actually built, not an intention.
					</p>
				</div>

				<div className="mt-10 space-y-10 text-body leading-relaxed">
					<p>
						Sessionly is operated by{" "}
						<span className="font-medium text-body">
							G&amp;J Family Ventures LLC
						</span>{" "}
						(&quot;Sessionly,&quot; &quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;). These Terms of Service (the &quot;Terms&quot;) are
						an agreement between you and us, and they cover all three places
						Sessionly runs: the Sessionly mobile application, the program
						application site at{" "}
						<span className="font-medium text-body">apply.usesessionly.com</span>
						, and the operator console at{" "}
						<span className="font-medium text-body">
							manage.usesessionly.com
						</span>{" "}
						(together, the &quot;Service&quot;).
					</p>
					<p>
						Our{" "}
						<Link
							to="/privacy"
							className="font-medium text-ink underline underline-offset-2 hover:text-ink"
						>
							Privacy Policy
						</Link>{" "}
						explains what we collect and what we do with it. It is part of these
						Terms.
					</p>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							1. Accepting These Terms
						</h2>
						<p className="mt-4">
							You accept these Terms by creating a Sessionly account, by joining
							a program with an invite code, by submitting an application at
							apply.usesessionly.com, or by otherwise using the Service. If you
							do not agree with them, do not use the Service.
						</p>
						<p className="mt-2">
							If you are using Sessionly on behalf of an organisation — a
							school, an enrichment company, a camp — you confirm you are
							authorised to accept these Terms for that organisation, and
							&quot;you&quot; means both you and it.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							2. Who May Use Sessionly
						</h2>
						<p className="mt-4">
							You must be 18 or older to create a Sessionly account. Accounts
							are for adults: instructors who run programs, and parents or
							guardians who enrol a child in one.
						</p>
						<p className="mt-2">
							<span className="font-medium text-body">
								Children do not hold Sessionly accounts.
							</span>{" "}
							There is no child login, no child role, and no way for a child to
							sign in. A child appears in Sessionly only as a roster entry
							created by their parent or guardian, or by the instructor running
							their program. Everything recorded about a child — attendance,
							whether a permission slip came back, which piece of program
							equipment they have out — is entered by an adult and read by
							adults.
						</p>
						<p className="mt-2">
							If you enter information about a child, you must be that
							child&apos;s parent or legal guardian, or an instructor or
							operator with a lawful basis for holding it. See Section 6.
						</p>
						<p className="mt-2">
							You may not use the Service if we have previously terminated your
							access.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							3. Your Account
						</h2>
						<p className="mt-4">
							A Sessionly account has one of two roles: instructor or parent.
							The role is set when you sign up and determines which parts of the
							Service you see. You cannot change your own role, and the
							restriction is enforced in our database, not just in the app.
						</p>
						<p className="mt-2">You agree to:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Give accurate information when you sign up, and keep it current
							</li>
							<li>Keep your password to yourself and not share your login</li>
							<li>
								Tell us at{" "}
								<a
									href={`mailto:${CONTACT_EMAIL}`}
									className="font-medium text-ink underline underline-offset-2 hover:text-ink"
								>
									{CONTACT_EMAIL}
								</a>{" "}
								if you believe someone else has used your account
							</li>
						</ul>
						<p className="mt-4">
							You are responsible for what happens under your account. One
							account belongs to one person — do not create an account for
							someone else, and do not let another adult use yours to act as
							you.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							4. What Sessionly Is, and What It Is Not
						</h2>
						<p className="mt-4">
							Sessionly is a coordination tool for short-lived programs. It
							carries announcements, schedules, volunteer and supply requests,
							attendance, event participation, and equipment custody between an
							instructor and the families in one program.
						</p>
						<p className="mt-2">Sessionly is deliberately not:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">A messaging app.</span>{" "}
								Parents cannot message instructors or each other through
								Sessionly. A parent can respond to an announcement with one of
								four emoji reactions and nothing else. Email we send to families
								is read-only — replies go to a real person at the program&apos;s
								reply address, not back into the Service.
							</li>
							<li>
								<span className="font-medium text-body">
									A student information system or a school record.
								</span>{" "}
								Sessionly holds a record of participation in one program. It is
								not a gradebook, a transcript, or an academic record.
							</li>
							<li>
								<span className="font-medium text-body">
									A medical, emergency, or safeguarding system.
								</span>{" "}
								There is nowhere in Sessionly to store allergies, medical
								information, a date of birth, a home address, or emergency
								contacts, and the application form does not ask for them. Do not
								use Sessionly to communicate anything urgent or
								safety-critical, and do not rely on it in an emergency. Keep the
								records your program is legally required to keep somewhere else.
							</li>
							<li>
								<span className="font-medium text-body">A payment system.</span>{" "}
								See Section 10.
							</li>
						</ul>
						<p className="mt-4">
							Sessionly never holds a signed permission slip. Where the Service
							tracks a permission slip, it tracks only whether one has been
							handed back — paper remains the record.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							5. Acceptable Use
						</h2>
						<p className="mt-4">When using Sessionly, you agree not to:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Break the law, or use the Service to harass, threaten, defame,
								or endanger anyone
							</li>
							<li>
								Post content that is inappropriate for a program involving
								children
							</li>
							<li>
								Try to reach data that is not yours — another family&apos;s
								child, another instructor&apos;s program, another
								organisation&apos;s roster
							</li>
							<li>
								Guess, farm, or share invite codes, or attempt to join a program
								you were not invited to. Invite redemption is limited to five
								attempts per account every fifteen minutes, and codes can expire
								and can have a fixed number of uses
							</li>
							<li>
								Submit applications in bulk, or automate the application form.
								Submissions are rate limited by network address
							</li>
							<li>
								Probe, scan, or test the security of the Service, or interfere
								with its operation
							</li>
							<li>
								Scrape the Service, or use an automated system to access it,
								except for a standard search engine reading our public pages
							</li>
							<li>
								Reverse engineer the Service, or attempt to derive our source
								code
							</li>
							<li>
								Export or reuse family contact details for anything other than
								running the program they were given for. Do not add them to a
								mailing list, sell them, or pass them on
							</li>
							<li>
								Impersonate an instructor, a guardian, an organisation, or us
							</li>
						</ul>
						<p className="mt-4">
							If you see content in Sessionly that breaks these rules, you can
							report an announcement or a program from within the app. Reports
							reach us; we review them by hand and we do not promise a response
							time.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							6. If You Run a Program
						</h2>
						<p className="mt-4">
							Sessionly gives authority over a program to the instructor who
							owns it. That authority comes with responsibility. If you create a
							program, you are responsible for it.
						</p>
						<p className="mt-2">Specifically, you are responsible for:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">
									The lawful basis for the family data you enter.
								</span>{" "}
								You decide which children are on your roster and what you record
								about them, including their name, grade, school, classroom
								teacher, before- and after-class care arrangements, attendance,
								payment status, and which equipment they hold. You must have the
								right to collect and hold that information, and to give it to us
								to store on your behalf. Where your program requires parental
								consent, a school agreement, a district policy, or a data
								protection notice of its own, obtaining and honouring that is
								yours to do, not ours.
							</li>
							<li>
								<span className="font-medium text-body">
									What you write, and who you send it to.
								</span>{" "}
								Announcements you post are delivered to the audience you choose
								— families, staff, or both — by email and, where a recipient has
								allowed it, by push notification. Once sent, a message has been
								sent.
							</li>
							<li>
								<span className="font-medium text-body">
									Who you invite, and who you accept.
								</span>{" "}
								Invite codes, application decisions, and the staff contact list
								for your program are yours to manage. Anyone you add to a staff
								contact list will receive staff announcements at the address you
								entered.
							</li>
							<li>
								<span className="font-medium text-body">
									Running the program itself.
								</span>{" "}
								Sessionly is the noticeboard, not the class. We are not a party
								to any arrangement between you and a family, we set no fee, we
								take no money, and we take no position on whether a program ran
								as promised.
							</li>
							<li>
								<span className="font-medium text-body">
									Complying with the rules that apply to you.
								</span>{" "}
								Child protection, background checks, licensing, insurance,
								school and district policy, and any privacy law that applies to
								your program are your obligations.
							</li>
						</ul>
						<p className="mt-4">
							If you are a parent and you want your child&apos;s details in a
							program corrected or removed, ask that program&apos;s instructor
							first. They control the roster. You can also contact us.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							7. Organisations, Coordinators, and Teachers
						</h2>
						<p className="mt-4">
							A program can be run under a shared organisation — an after-school
							enrichment company, for example. An organisation has one owner,
							and members holding one of two roles: coordinator or teacher.
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								A <span className="font-medium text-body">coordinator</span> can
								read across every program the organisation runs, including
								applications, rosters, guardian contact details, payment
								records, and announcements addressed to staff, and can decide
								applications. A coordinator cannot read individual attendance
								records, and cannot read announcements an instructor addressed
								to families. Both limits are enforced in our database.
							</li>
							<li>
								A <span className="font-medium text-body">teacher</span> gains
								none of that. They see the organisation&apos;s equipment
								inventory and whether an item is currently out, and nothing
								about children or guardians in programs they do not run.
							</li>
						</ul>
						<p className="mt-4">
							If you invite someone into your organisation, you are giving them
							that access, and you are responsible for the choice. Membership
							can be revoked at any time by the owner or a coordinator. Revoking
							ends the access immediately; it does not erase the record that the
							person was a member, which is kept so that &quot;who could see
							this roster, and when&quot; has an answer.
						</p>
						<p className="mt-2">
							Only the owner can transfer ownership of an organisation, and only
							to someone who is already a current member.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							8. Your Content
						</h2>
						<p className="mt-4">
							You keep ownership of what you put into Sessionly — your
							announcements, your program descriptions, your roster entries,
							your application answers, your notes. We do not claim it.
						</p>
						<p className="mt-2">
							So that we can actually run the Service, you give us a
							non-exclusive, worldwide, royalty-free licence to host, store,
							copy, format, and transmit your content, for as long as you use
							the Service and for as long as it is needed to keep a program&apos;s
							record intact. That licence exists only to deliver your content to
							the people you addressed it to and to keep it available to them
							afterwards. It lets us:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>Store your content in our database</li>
							<li>
								Show it to the people the Service is designed to show it to —
								the families in your program, your organisation&apos;s
								coordinators, your staff contacts
							</li>
							<li>
								Send it by email through our email provider, and as a push
								notification through our app platform, as described in the
								Privacy Policy
							</li>
						</ul>
						<p className="mt-4">
							It does not let us publish your content, sell it, use it to
							advertise, use it to train a model, or show it to anyone the
							Service would not show it to. We do not do those things.
						</p>
						<p className="mt-2">
							You confirm you have the right to give us that licence for
							everything you upload, and that your content does not infringe
							anyone else&apos;s rights.
						</p>
						<p className="mt-2">
							If you paste a link into Sessionly — a video for an application,
							for example — we store the link, not the thing it points at. What
							is at the other end, and who can see it, is yours to manage.
						</p>
						<p className="mt-2">
							Sessionly itself — the applications, the design, the name, and the
							logo — belongs to us. These Terms do not give you any right to it
							beyond using the Service as intended.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							9. Email and Notifications
						</h2>
						<p className="mt-4">
							If you are enrolled in a program, or you applied to one, we will
							email you about it. That is how the Service works, and it is not
							marketing — we do not send marketing email.
						</p>
						<p className="mt-2">
							You can unsubscribe from a program&apos;s email using the link at
							the bottom of any message. Unsubscribing is per program, so
							leaving one does not stop email about another. If your address
							hard-bounces or you mark our mail as spam, we stop emailing that
							address everywhere, permanently, and you will need to contact us
							to undo it.
						</p>
						<p className="mt-2">
							Push notifications are optional. The mobile app asks once, you can
							decline, and everything still works without them.
						</p>
						<p className="mt-2">
							We cannot guarantee that any particular email or notification
							arrives. Mail providers block, filter, and delay messages for
							reasons outside our control. Do not depend on a Sessionly message
							reaching someone in time for something that matters.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							10. Payments
						</h2>
						<p className="mt-4">
							<span className="font-medium text-body">
								Sessionly does not process payments.
							</span>{" "}
							There is no checkout, no card form, no payment processor, and no
							subscription. We never see or store card details, and no money
							moves through the Service.
						</p>
						<p className="mt-2">
							What Sessionly does is record a status that an instructor typed
							in: whether a child&apos;s program fee is unpaid, paid, waived, or
							refunded, along with an optional amount, method, and note.
							Recording a fee as &quot;refunded&quot; in Sessionly does not
							issue a refund — it notes that one happened somewhere else. A
							price shown on a program is a description written by the
							instructor, not an amount we charge.
						</p>
						<p className="mt-2">
							Any actual payment, refund, or scholarship is a matter between you
							and the program. We are not a party to it, we do not hold funds,
							and we cannot resolve a dispute about one.
						</p>
						<p className="mt-2">
							Sessionly is free to use today. If we ever charge for it, we will
							say so clearly in advance and these Terms will be updated first.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							11. Programs End, and That Is on Purpose
						</h2>
						<p className="mt-4">
							Every Sessionly program has a start and an end date. Closure is a
							feature, not a failure. A program can end in one of two ways.
						</p>
						<p className="mt-4 font-medium text-body">Archiving</p>
						<p className="mt-2">
							An active program archives automatically once it is more than
							three days past its end date. The job that does it runs daily. No
							one has to remember.
						</p>
						<p className="mt-2 font-medium text-body">Cancellation</p>
						<p className="mt-2">
							An instructor can cancel a program that has not yet ended. Nothing
							in Sessionly cancels a program automatically — it is always a
							person&apos;s decision, and it requires a message, which is posted
							to the program as an announcement so families are told. A
							cancellation cannot be undone and a cancelled program cannot be
							reopened.
						</p>
						<p className="mt-4 font-medium text-body">
							What changes when a program closes
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								The program becomes read-only. New announcements, schedule
								changes, and new volunteer or supply requests are refused by our
								database, not merely hidden in the app.
							</li>
							<li>
								Volunteer signups and supply commitments close, and new invite
								codes stop working.
							</li>
							<li>
								Families keep access to their own history — the announcements
								they were sent, the schedule that ran, the record of the
								program.
							</li>
						</ul>
						<p className="mt-4">
							We retain closed programs so that families keep that history, and
							a closed program is not deleted when the instructor who created it
							deletes their account. See Section 12.
						</p>
						<p className="mt-2">
							We do not promise that a closed program will remain available
							forever. If we ever decide to remove closed programs after a fixed
							period, we will change these Terms and the Privacy Policy first,
							and give notice before anything is removed.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							12. Ending Your Account
						</h2>
						<p className="mt-4">
							You can delete your account yourself, from your profile in the
							mobile app. You will be asked to type a confirmation word first.
							Deletion then happens immediately — there is no waiting period and
							no undo. You can also email us and we will do it for you.
						</p>
						<p className="mt-4 font-medium text-body">
							Two things you must do first
						</p>
						<p className="mt-2">
							Deletion will be refused, with an explanation, until you have:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								Archived or cancelled any program you own that has not already
								ended. Deleting your account would otherwise pull the program
								out from under the families relying on it.
							</li>
							<li>
								Transferred ownership of any shared organisation that still has
								other members, to one of those members.
							</li>
						</ul>
						<p className="mt-4 font-medium text-body">
							What deletion actually does
						</p>
						<p className="mt-2">
							Deletion removes <span className="font-medium text-body">you</span>
							. It does not erase the programs other people were part of. This
							matters, so it is stated plainly:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								<span className="font-medium text-body">Deleted outright:</span>{" "}
								your profile and login, your emoji reactions, your volunteer
								signups, your supply commitments, and your push notification
								tokens. Signups and commitments you had claimed are released
								back to the program.
							</li>
							<li>
								<span className="font-medium text-body">
									Handed to your co-parent:
								</span>{" "}
								where your child has another guardian on the same enrolment, the
								enrolment passes to them intact and the family keeps its place.
							</li>
							<li>
								<span className="font-medium text-body">
									Anonymised, not erased:
								</span>{" "}
								otherwise, your enrolment, your child&apos;s roster entry, and
								any application you submitted are stripped of the details that
								identify you. Names are replaced with a placeholder; email,
								phone, second guardian, written answers, teacher and care
								details, and payment notes are cleared. The de-identified rows
								stay, so an instructor&apos;s attendance record and a
								program&apos;s history do not develop holes.
							</li>
							<li>
								<span className="font-medium text-body">
									Kept, but no longer yours:
								</span>{" "}
								programs and announcements you created as an instructor, and any
								organisation you owned, remain. They belong to nobody
								afterwards, the families in them keep their access, and your
								name is removed from the fields recording who took an action.
							</li>
						</ul>
						<p className="mt-4">
							If you applied to a program and never created an account, there is
							no account to delete. Contact us and we will redact your
							application.
						</p>
						<p className="mt-4 font-medium text-body">
							Termination by us
						</p>
						<p className="mt-2">
							We may suspend or terminate your access if you break these Terms,
							if your use puts other people&apos;s data or the Service at risk,
							or if we are required to by law. Where it is reasonable to do so,
							we will tell you why and give you a chance to put it right first.
							If we terminate an account, the same rules above govern what
							happens to the data — we do not quietly delete a program that
							families depend on.
						</p>
						<p className="mt-2">
							We may also stop offering the Service. If we do, we will give
							reasonable notice and a way to get your data out before it goes.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							13. Disclaimers
						</h2>
						<p className="mt-4">
							The Service is provided{" "}
							<span className="font-medium text-body">as is</span> and{" "}
							<span className="font-medium text-body">as available</span>. To
							the fullest extent permitted by law, we disclaim all warranties,
							express or implied, including implied warranties of
							merchantability, fitness for a particular purpose, and
							non-infringement.
						</p>
						<p className="mt-2">In particular, we do not warrant that:</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>
								The Service will be uninterrupted, timely, or free of errors
							</li>
							<li>
								Any email or push notification will be delivered, or delivered
								in time
							</li>
							<li>
								Anything anyone else posts in Sessionly is accurate. Programs,
								schedules, prices, attendance, and payment statuses are entered
								by instructors and operators. We do not verify them
							</li>
							<li>
								Any instructor, program, or organisation is qualified, licensed,
								insured, vetted, or safe. We do not screen them
							</li>
						</ul>
						<p className="mt-4">
							Sessionly is a coordination tool, not a safeguarding measure.
							Decisions about a child&apos;s safety, care, and supervision are
							made by the adults responsible for that child, not by this
							software.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							14. Limitation of Liability
						</h2>
						<p className="mt-4">
							To the fullest extent permitted by law, G&amp;J Family Ventures
							LLC will not be liable for any indirect, incidental, special,
							consequential, or punitive damages, or for any loss of profits,
							revenue, data, goodwill, or opportunity, arising out of or
							connected with your use of the Service — even if we were told such
							damages were possible.
						</p>
						<p className="mt-2">
							We are also not liable for anything that happens between you and a
							program: a class that does not run, a fee that is not refunded, a
							message that is not read, or a dispute with an instructor, a
							family, or an organisation.
						</p>
						<p className="mt-2">
							Where liability cannot be excluded, our total liability to you for
							all claims relating to the Service is limited to the greater of
							(a) the amount you paid us for the Service in the twelve months
							before the claim, and (b) one hundred US dollars. Sessionly is
							currently free, so in practice (b) is the operative figure.
						</p>
						<p className="mt-2">
							Some jurisdictions do not allow the exclusion of certain
							warranties or the limitation of certain damages. Where that is the
							case, the exclusions and limits above apply to you only as far as
							the law allows, and nothing here limits liability for fraud, or
							for death or personal injury caused by negligence.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							15. Changes to These Terms
						</h2>
						<p className="mt-4">
							We may update these Terms as the product changes. When we do:
						</p>
						<ul className="mt-2 list-disc space-y-1 pl-6">
							<li>We will update the &quot;Last Updated&quot; date above</li>
							<li>
								If the change is material — if it affects your rights, or what
								you can do with the Service — we will give notice inside the
								Service before it takes effect
							</li>
						</ul>
						<p className="mt-4">
							Continuing to use Sessionly after a change takes effect means you
							accept the updated Terms. If you do not accept them, delete your
							account as described in Section 12.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">
							16. Governing Law
						</h2>
						{/*
						  TODO(legal): JURISDICTION AND VENUE ARE NOT DECIDED.

						  California is a PLACEHOLDER, chosen only because the operating
						  entity is based in Petaluma, California. Nothing in the repo, the
						  LLC filing, or any prior policy establishes a governing law or a
						  venue, so this clause is the one paragraph on this page that is
						  not grounded in a verified fact.

						  A lawyer must decide, before this page is relied on:
						    - governing law (state, and whether US federal law is carved out)
						    - venue / exclusive jurisdiction, and whether to name a county
						    - whether to add a dispute-resolution clause at all

						  Deliberately absent: any arbitration agreement, class-action
						  waiver, or jury-trial waiver. Those are not clauses to draft
						  speculatively, and adding one changes what a user gives up. If
						  one is wanted, it is a lawyer's to write.
						*/}
						<p className="mt-4">
							These Terms are governed by the laws of the State of California,
							without regard to its conflict of laws rules. Any dispute arising
							from them or from the Service will be brought in the state or
							federal courts located in California, and you and we each consent
							to the jurisdiction of those courts.
						</p>
						<p className="mt-2">
							If any part of these Terms is found unenforceable, the rest stays
							in force. Our not enforcing a term on one occasion does not waive
							it.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-ink">17. Contact</h2>
						<p className="mt-4">
							Questions about these Terms, a report about content, or a request
							about your data — all reach us at the same address:
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
						<p className="mt-2">
							G&amp;J Family Ventures LLC, operator of Sessionly.
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
						{/* Matches home.tsx and privacy.tsx. "Terms" is a plain span
						    because this IS the terms page; "Privacy" is a real link. */}
						<div className="flex flex-wrap gap-6">
							<Link to="/privacy" className="hover:text-ink">
								Privacy
							</Link>
							<span className="font-medium text-body">Terms</span>
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
