import type { Route } from "./+types/security";
import { Link } from "react-router";
import { SessionlyMark } from "../components/SessionlyMark";

/*
 * The audience for this page is a person doing diligence: an enrichment
 * provider's operations lead, or a school district asking what happens to
 * children's data before they let a class use it. That is a specific reader,
 * and they are unimpressed by adjectives.
 *
 * EVERY CLAIM HERE IS EITHER (a) A PROPERTY OF THE CODE, verified in the
 * Sessionly repo, or (b) EXPLICITLY MARKED AS SOMETHING WE DO NOT YET HAVE.
 * The second category is the one that earns trust. A security page from a
 * one-person operation that claims SOC 2 and a 24/7 SOC is less credible than
 * one that says plainly what exists and what does not.
 *
 * Consistency requirement: this page must not contradict /privacy §5, which
 * is the same operation described for a different reader. If a claim changes
 * there, change it here in the same commit.
 *
 * Deliberately NOT claimed: encryption at rest as our own control (it is a
 * property of the managed database provider, not something this codebase
 * demonstrates); any certification; any audit we have not had; any uptime
 * figure, since nothing here measures one.
 */

const CONTACT_EMAIL = "ops@usesessionly.com";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Security — Sessionly" },
		{
			name: "description",
			content:
				"How Sessionly protects program and family data: database-level access control, what each role can see, what happens on erasure, and what we do not yet have.",
		},
	];
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mt-10">
			<h2 className="text-2xl font-semibold text-ink">{title}</h2>
			<div className="mt-4 space-y-3 text-body">{children}</div>
		</section>
	);
}

export default function Security() {
	return (
		<div className="min-h-screen bg-cream text-ink">
			<header className="border-b border-sage-mist">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<SessionlyMark idSuffix="security" />
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
				<h1 className="text-4xl font-semibold text-ink">Security</h1>
				<p className="mt-4 text-lg text-body">
					Written for someone deciding whether to trust us with a roster of
					children. It says what exists, and what does not.
				</p>
				<p className="mt-3 text-sm text-meta">Last reviewed 31 August 2026.</p>

				<Section title="Access is enforced in the database, not in the app">
					<p>
						Every table carries row-level security, and the rules run inside
						PostgreSQL. That matters because it means a bug in a screen, a
						mistyped query, or a request crafted by hand cannot return rows the
						signed-in person is not entitled to — the check is not in the code
						that asks the question.
					</p>
					<p>
						Operations that need more privilege than a caller has — redeeming an
						invite, deciding an application, assigning equipment — run through
						named database functions with the authorisation test written into
						each one. There is no general-purpose write path that a client can
						reach around them.
					</p>
					<p>
						Elevated server keys are not embedded in the mobile app, the
						application site, or the operator console. A copy of any of those
						clients grants no more access than the person holding it already
						has.
					</p>
				</Section>

				<Section title="Who can see a child's details">
					<p>
						An instructor sees the families in their own programs. A guardian
						sees their own household. Neither can read across into another
						program or another family, and that boundary is the database's, not
						a screen's.
					</p>
					<p>
						An organisation can appoint coordinators. A coordinator can read
						across the programs their organisation runs — rosters, applications,
						payment status — because that is the job. The grant is deliberately
						read-only: coordinators hold no write permission on any of it, and
						they cannot read a child's individual attendance record. Attendance
						reaches them only as aggregate figures.
					</p>
					<p>
						Membership is never silently deleted. When someone's access is
						revoked, the record of what they could once see is kept, so the
						question "who could read this roster in March" has an answer.
					</p>
				</Section>

				<Section title="What we ask the device for">
					<p>
						The mobile app requests exactly one permission: notifications. It
						does not ask for location, camera, microphone, contacts, or the
						photo library, and the libraries that would provide them are not
						installed.
					</p>
					<p>
						Session tokens are held in the device's secure storage rather than
						ordinary app storage. All traffic is over HTTPS.
					</p>
				</Section>

				<Section title="Abuse and rate limits">
					<p>
						Invite codes are eight characters, generated with a cryptographic
						random source, and exclude characters that are easily confused.
						Redemption is limited to five attempts per fifteen minutes.
						Application submissions are rate limited separately.
					</p>
					<p>
						Email that Sessionly sends is read-only to families: there are no
						action links in it that change anything on a click. Anything that
						alters a roster happens behind a sign-in.
					</p>
				</Section>

				<Section title="Deletion, stated accurately">
					<p>
						This is the part most often overstated, so: erasure{" "}
						<span className="font-medium text-ink">anonymises</span> rather than
						deleting outright, and it can{" "}
						<span className="font-medium text-ink">refuse</span>.
					</p>
					<p>
						A household that erases its account keeps its erasure — names,
						contact details and application content are removed. The
						instructor's attendance history survives with the child's name taken
						off it, because a register that silently loses rows is not a
						register. Where another guardian is still active, the enrolment is
						handed to them rather than destroyed.
					</p>
					<p>
						Deletion is refused, with an explanation, while the person asking
						still owns a program that is running. Sessionly will not strip a
						live class away from the families enrolled in it as a side effect of
						one person closing their account.
					</p>
					<p>
						The{" "}
						<Link
							to="/privacy"
							className="font-medium text-ink underline underline-offset-2"
						>
							Privacy Policy
						</Link>{" "}
						sets out field by field what is removed and what remains.
					</p>
				</Section>

				<Section title="Who else processes your data">
					<p>
						Sessionly runs on Supabase (database, authentication), sends email
						through Resend, delivers mobile updates and notifications through
						Expo, reports crashes to Sentry, and serves its websites through
						Cloudflare and Vercel. There is no advertising network and no
						analytics broker; nothing here is sold or shared for marketing.
					</p>
					<p>
						Encryption at rest is a property of the managed database platform
						rather than a control this codebase implements, and we describe it
						that way on purpose.
					</p>
				</Section>

				<Section title="How we verify all of this">
					<p>
						The access rules are covered by an automated suite that asserts them
						as behaviour: it signs in as each role and checks what they can and
						cannot read, including cases that were once bugs. Object counts and
						the bodies of privileged database functions are pinned, so an
						authorisation check cannot be removed quietly — a change to one is a
						reviewable change to the expectation as well.
					</p>
					<p>
						The database schema is rebuilt from scratch and re-tested on every
						change, so what is documented is what a fresh install actually
						produces.
					</p>
				</Section>

				<Section title="What we do not have">
					<p>
						No SOC 2, ISO 27001, or comparable certification. No third-party
						penetration test. No bug bounty. No 24-hour monitoring, and no
						contractual uptime commitment. Sessionly is a small operation and
						these would be untrue if claimed.
					</p>
					<p>
						If your organisation needs a data processing agreement, a security
						questionnaire completed, or terms beyond what is published here,
						write to us and we will work through it properly rather than
						pointing at a page.
					</p>
				</Section>

				<Section title="Reporting a vulnerability">
					<p>
						Email{" "}
						<a
							href={`mailto:${CONTACT_EMAIL}`}
							className="font-medium text-ink underline underline-offset-2"
						>
							{CONTACT_EMAIL}
						</a>{" "}
						with enough detail to reproduce the issue. You will get an
						acknowledgement within two working days.
					</p>
					<p>
						Please do not access, modify or retain data belonging to anyone
						else, and give us a reasonable chance to fix the problem before
						describing it publicly. We will not pursue you for a good-faith
						report made on those terms. There is no bounty programme; we will
						credit you if you would like to be credited.
					</p>
				</Section>
			</main>

			<footer className="border-t border-sage-mist bg-cream-tinted py-10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-meta">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="font-semibold text-ink">Sessionly</p>
							<p>Calm, structured communication for short-lived programs.</p>
						</div>
						<div className="flex flex-wrap gap-6">
							<Link to="/privacy" className="hover:text-ink">
								Privacy
							</Link>
							<Link to="/terms" className="hover:text-ink">
								Terms
							</Link>
							<span className="font-medium text-body">Security</span>
							<Link to="/support" className="hover:text-ink">
								Support
							</Link>
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
