import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sessionly — Calm, structured communication" },
		{
			name: "description",
			content:
				"Sessionly is the calm, structured way for instructors to communicate with parents during short-lived programs.",
		},
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<header className="border-b border-slate-200">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
					<div className="flex items-center gap-3">
						<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
							S
						</span>
						<div>
							<p className="text-lg font-semibold">Sessionly</p>
							<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
								Program Communication
							</p>
						</div>
					</div>
					<nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
						<a className="hover:text-slate-900" href="#use-cases">
							Use cases
						</a>
						<a className="hover:text-slate-900" href="#principles">
							Principles
						</a>
						<a className="hover:text-slate-900" href="#features">
							Features
						</a>
					</nav>
					<button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
						Request a demo
					</button>
				</div>
			</header>

			<main>
				<section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-center">
					<div className="flex-1 space-y-6">
						<p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
							Calm, structured communication
						</p>
						<h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
							Keep parents aligned without turning your program into a
							school system.
						</h1>
						<p className="text-lg text-slate-600">
							Sessionly helps instructors run short-lived programs with clarity:
							announcements, schedules, volunteer coordination, and closure —
							all in one focused mobile app.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800">
								Start a program
							</button>
							<button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
								See how it works
							</button>
						</div>
						<div className="flex flex-wrap gap-6 text-sm text-slate-500">
							<div>
								<p className="text-lg font-semibold text-slate-900">3–5 days</p>
								<p>Typical camp length</p>
							</div>
							<div>
								<p className="text-lg font-semibold text-slate-900">100%</p>
								<p>Instructor-owned programs</p>
							</div>
							<div>
								<p className="text-lg font-semibold text-slate-900">0</p>
								<p>Reply-all chaos</p>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-lg">
							<div className="space-y-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Summer Robotics Camp
										</p>
										<p className="text-lg font-semibold text-slate-900">
											Session 2 • Day 3
										</p>
									</div>
									<span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
										On track
									</span>
								</div>
								<div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
									<p className="text-sm font-semibold text-slate-900">
										Today&apos;s announcement
									</p>
									<p className="text-sm text-slate-600">
										Robots are ready for the demo! Please send a small box for
										carrying projects home tomorrow.
									</p>
									<div className="flex items-center gap-2 text-xs text-slate-500">
										<span className="rounded-full bg-slate-100 px-2 py-1">
											👍 12
										</span>
										<span className="rounded-full bg-slate-100 px-2 py-1">
											🧰 8
										</span>
										<span className="rounded-full bg-slate-100 px-2 py-1">
											🎉 5
										</span>
									</div>
								</div>
								<div className="grid gap-4 md:grid-cols-2">
									<div className="rounded-2xl border border-slate-200 bg-white p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Volunteer slots
										</p>
										<p className="mt-2 text-2xl font-semibold text-slate-900">
											4 / 6
										</p>
										<p className="text-xs text-slate-500">Still needed today</p>
									</div>
									<div className="rounded-2xl border border-slate-200 bg-white p-4">
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Supply list
										</p>
										<p className="mt-2 text-2xl font-semibold text-slate-900">
											12 items
										</p>
										<p className="text-xs text-slate-500">8 already claimed</p>
									</div>
								</div>
								<div className="flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-white">
									<p className="text-sm font-semibold">
										Program ends in 2 days
									</p>
									<button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
										Archive on Friday
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="use-cases"
					className="bg-slate-50 py-16"
				>
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
									Target use cases
								</p>
								<h2 className="mt-2 text-3xl font-semibold text-slate-900">
									Built for short-lived, high-trust programs
								</h2>
							</div>
							<p className="max-w-xl text-slate-600">
								Sessionly shines when programs are temporary and communication
								needs to be calm, clear, and instructor-led.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{[
								"After-school enrichment",
								"Camps (3–5 days)",
								"Robotics clubs",
								"Performing arts workshops",
								"Seasonal programs",
								"Pop-up educational experiences",
							].map((item) => (
								<div
									key={item}
									className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
								>
									<p className="text-sm font-semibold text-slate-900">{item}</p>
									<p className="mt-2 text-sm text-slate-600">
										Keep families aligned without adding the weight of a full
										school system.
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="principles" className="py-16">
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
									Core principles
								</p>
								<h2 className="mt-2 text-3xl font-semibold text-slate-900">
									Clarity over noise.
								</h2>
								<p className="mt-4 text-slate-600">
									Sessionly is designed for closure, authority, and calm
									communication. It supports instructors in leading programs
									with confidence while parents stay informed and supported.
								</p>
							</div>
							<div className="space-y-6">
								{[
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
										title: "Calm over engagement",
										description:
											"No feeds optimized for activity. Communication stays focused.",
									},
									{
										title: "Decision support, not social",
										description:
											"Sessionly supports coordination, not social interaction.",
									},
								].map((principle) => (
									<div
										key={principle.title}
										className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
									>
										<h3 className="text-lg font-semibold text-slate-900">
											{principle.title}
										</h3>
										<p className="mt-2 text-sm text-slate-600">
											{principle.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="bg-slate-900 py-16 text-white">
					<div className="mx-auto w-full max-w-6xl px-6">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Features
								</p>
								<h2 className="mt-2 text-3xl font-semibold">
									Everything a short program needs. Nothing it doesn&apos;t.
								</h2>
							</div>
							<p className="max-w-xl text-slate-300">
								Sessionly supports instructors with structured workflows while
								parents get exactly the information they need.
							</p>
						</div>
						<div className="mt-10 grid gap-8 md:grid-cols-2">
							<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-slate-300">
									For instructors
								</p>
								<ul className="mt-4 space-y-3 text-sm text-slate-100">
									<li>Create programs with start and end dates.</li>
									<li>Post announcements to all enrolled families.</li>
									<li>Manage schedules, sessions, and attendance.</li>
									<li>View and organize family rosters.</li>
									<li>Request volunteers and supply help.</li>
									<li>Invite parents with one-time access codes.</li>
									<li>Archive programs when they conclude.</li>
								</ul>
							</div>
							<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-slate-300">
									For parents
								</p>
								<ul className="mt-4 space-y-3 text-sm text-slate-100">
									<li>Join programs using invite codes.</li>
									<li>Read announcements with emoji reactions.</li>
									<li>See upcoming schedules and sessions.</li>
									<li>Sign up for volunteer opportunities.</li>
									<li>Commit to bringing needed supplies.</li>
									<li>Access archived programs in read-only mode.</li>
									<li>Stay informed without inbox clutter.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>


				<section className="border-t border-slate-200 bg-white py-16">
					<div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
						<div>
							<h2 className="text-3xl font-semibold text-slate-900">
								Bring calm to your next program.
							</h2>
							<p className="mt-2 text-slate-600">
								Invite parents, coordinate volunteers, and end on a strong note.
							</p>
						</div>
						<div className="flex flex-wrap gap-4">
							<button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800">
								Get Sessionly
							</button>
							<button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
								Talk to sales
							</button>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-slate-200 bg-slate-50 py-10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-slate-700 font-semibold">Sessionly</p>
						<p>Calm, structured communication for short-lived programs.</p>
					</div>
					<div className="flex flex-wrap gap-6">
						<span>Privacy</span>
						<span>Security</span>
						<span>Support</span>
					</div>
				</div>
			</footer>
		</div>
	);
}
