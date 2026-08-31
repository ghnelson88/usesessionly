import type { Route } from "./+types/support";
import { Link } from "react-router";
import { SessionlyMark } from "../components/SessionlyMark";

/*
 * WHY THIS PAGE EXISTS, and why it should have existed sooner.
 *
 * "Support" sat in the footer of this site as a dead <span> for six months.
 * The 2026-08-30 rebrand removed it rather than building it, on the reasoning
 * that a label pointing at a 404 is worse than no label. That was true as far
 * as it went, and it missed something: `docs/APP_STORE_SUBMISSION.md` lists
 * `https://usesessionly.com/support` as the App Store listing's Support URL,
 * and APPLE FETCHES THAT URL DURING REVIEW. Deleting the link did not delete
 * the dependency; it just moved the 404 somewhere nobody was looking.
 *
 * So this page has two audiences, and the order matters: a parent or an
 * instructor who needs help, and an App Store reviewer checking that the
 * support commitment is real. Everything here has to be true for the first
 * audience for it to be worth anything to the second.
 *
 * NO PROMISE THIS OPERATION CANNOT KEEP. Sessionly is run by one person. There
 * is no support rota, no ticketing system and no phone line, so this page does
 * not invent one. What it can honestly say is who reads the mailbox, what to
 * include so the first reply is useful, and what someone can do without
 * waiting for a reply at all.
 */

const CONTACT_EMAIL = "ops@usesessionly.com";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Support — Sessionly" },
		{
			name: "description",
			content:
				"How to get help with Sessionly, what to include so we can answer quickly, and answers to the questions families and instructors ask most.",
		},
	];
}

/** Things a family can resolve without waiting for a reply. */
const FAMILY_FAQ = [
	{
		q: "I was accepted, but I do not see the class.",
		a: "Sign in with the same email address you used on the application. If it matches, the class attaches itself automatically the first time you sign in. If you applied with one address and made your account with another, tell us both and we will connect them.",
	},
	{
		q: "I did not get the acceptance email.",
		a: "Check spam, then tell us the child's name and the address you applied with. We can see whether the email was sent, and resend it.",
	},
	{
		q: "Do I have to install the app?",
		a: "No. Announcements and reminders reach you by email, and a class can run start to finish without any parent installing anything. The app adds the schedule, volunteer sign-ups and supply lists in one place — it is a convenience, not a requirement.",
	},
	{
		q: "I want to stop the emails.",
		a: "Every email has an unsubscribe link at the bottom, and it applies to that program only. Instructors cannot re-subscribe you.",
	},
	{
		q: "Both parents need to see this.",
		a: "A household can have a second guardian. Ask your instructor to send a co-parent invite, and you will both see the same child and the same messages.",
	},
	{
		q: "I want my data removed.",
		a: "You can delete your account in the app: tap the person icon at the top of your week, then Delete Account. What survives and what is erased is described in full in the Privacy Policy — attendance history stays with the instructor, and your name comes off it.",
	},
];

const OPERATOR_FAQ = [
	{
		q: "A family cannot get in.",
		a: "Most often the application email and the account email differ. Send them a fresh invite code from the program's roster — a code works regardless of which address they signed up with.",
	},
	{
		q: "My recurring schedule runs through a school holiday.",
		a: "Sessionly warns you at the moment you generate a recurring run if any date lands on a published school closure, and you can mark those days as no-class. It never changes your schedule for you.",
	},
	{
		q: "I need to stop a program early.",
		a: "Cancel it from the program's settings. Cancelling tells the families; it does not delete anything, and the history stays readable.",
	},
	{
		q: "Something looks wrong with a number.",
		a: "Tell us the program name and what you expected to see. Please do not send screenshots containing other families' children if you can avoid it — the program name is usually enough for us to find it.",
	},
];

function Faq({ items }: { items: { q: string; a: string }[] }) {
	return (
		<dl className="mt-4 space-y-5">
			{items.map((item) => (
				<div key={item.q}>
					<dt className="font-semibold text-ink">{item.q}</dt>
					<dd className="mt-1 text-body">{item.a}</dd>
				</div>
			))}
		</dl>
	);
}

export default function Support() {
	return (
		<div className="min-h-screen bg-cream text-ink">
			<header className="border-b border-sage-mist">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<SessionlyMark idSuffix="support" />
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
				<h1 className="text-4xl font-semibold text-ink">Support</h1>
				<p className="mt-4 text-lg text-body">
					One address, read by a person.
				</p>

				<section className="mt-10 rounded-2xl border border-sage-mist bg-surface p-6">
					<p className="text-sm uppercase tracking-[0.2em] text-meta">
						Contact
					</p>
					<p className="mt-3 text-2xl font-semibold">
						<a
							href={`mailto:${CONTACT_EMAIL}`}
							className="text-ink underline underline-offset-4 hover:text-sage-deep"
						>
							{CONTACT_EMAIL}
						</a>
					</p>
					<p className="mt-4 text-body">
						Sessionly is a small operation, and that address reaches the person
						who builds it rather than a queue. Expect a reply within two working
						days. If something is stopping a class from running today, put{" "}
						<span className="font-medium text-ink">Urgent</span> at the front of
						the subject line and it will be looked at first.
					</p>
					<p className="mt-3 text-body">
						There is no phone line and no live chat. Saying so is more useful
						than implying otherwise.
					</p>
				</section>

				<section className="mt-8 rounded-2xl border border-sage-mist bg-cream-tinted p-6">
					<h2 className="text-lg font-semibold text-ink">
						What to include, so the first reply is a useful one
					</h2>
					<ul className="mt-3 list-disc space-y-2 pl-6 text-body">
						<li>The program name, exactly as it appears in the app.</li>
						<li>
							The email address you sign in with — and, if they differ, the one
							you applied with.
						</li>
						<li>What you expected to happen, and what happened instead.</li>
						<li>
							Roughly when it happened. A date and an approximate time is
							enough.
						</li>
					</ul>
					<p className="mt-4 text-body">
						Please do not send passwords. Nobody at Sessionly will ever ask you
						for one, and we do not need it to help.
					</p>
				</section>

				<section className="mt-10">
					<h2 className="text-2xl font-semibold text-ink">
						For families
					</h2>
					<Faq items={FAMILY_FAQ} />
				</section>

				<section className="mt-10">
					<h2 className="text-2xl font-semibold text-ink">
						For instructors and coordinators
					</h2>
					<Faq items={OPERATOR_FAQ} />
				</section>

				<section className="mt-10">
					<h2 className="text-2xl font-semibold text-ink">
						Reporting something urgent
					</h2>
					<p className="mt-4 text-body">
						If you believe a child is at risk, contact your school or local
						emergency services first. Sessionly is a communication tool and
						nobody here is monitoring it in real time.
					</p>
					<p className="mt-3 text-body">
						To report content inside the app, press and hold any announcement
						and choose Report. That reaches us directly and is reviewed by a
						person.
					</p>
					<p className="mt-3 text-body">
						To report a security problem, see the{" "}
						<Link
							to="/security"
							className="font-medium text-ink underline underline-offset-2"
						>
							security page
						</Link>
						, which explains how to reach us and what to expect.
					</p>
				</section>

				<section className="mt-10 border-t border-sage-mist pt-8">
					<p className="text-body">
						See also the{" "}
						<Link
							to="/privacy"
							className="font-medium text-ink underline underline-offset-2"
						>
							Privacy Policy
						</Link>{" "}
						for what is collected and what deletion actually does, and the{" "}
						<Link
							to="/terms"
							className="font-medium text-ink underline underline-offset-2"
						>
							Terms of Service
						</Link>
						.
					</p>
				</section>
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
							<Link to="/security" className="hover:text-ink">
								Security
							</Link>
							<span className="font-medium text-body">Support</span>
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
