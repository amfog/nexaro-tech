"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NeonButton from "@/components/ui/neon-button";
import { BrowserFrame, Reveal } from "@/components/ui/motion-bits";

// 12 Nov 2026 audit: the four services we sell (same as the partner deck), plus consulting.
// Highlights are facts we can show; no figures we cannot back up.
// 14 Nov 2026 revamp: same text; alternating rows with a real screenshot instead of icon tiles.
const services = [
  {
    title: "Business Systems (ERP)",
    desc: "One system for people, projects, clients, money and stock, built around how your company already works.",
    features: [
      "HR: people, departments, leave, timesheets",
      "Projects and tasks with hours per person",
      "Clients, quotes, invoices with VAT, payments",
      "Stock and orders, reports, Arabic and English",
    ],
    highlight: "Modular: switch on only what you need, three looks to choose from",
    img: "/images/erp/dashboard.webp",
    url: "nexaro-erp.vercel.app",
  },
  {
    title: "Websites",
    desc: "Company websites in Arabic and English that load fast on phones and send every enquiry to your inbox.",
    features: [
      "Six steps, you approve each one",
      "Two rounds of changes on the design and two on the build",
      "Google basics, legal page, contact form",
      "30 days of fixes after launch, optional monthly care",
    ],
    highlight: "Domain, hosting account and content in your name",
    // 14 Nov 2026 (owner): Pyramids Queue in What we build: pyramidsqueue.com is our own site.
    img: "/case-studies/pc8/home.webp",
    url: "pyramidsqueue.com",
  },
  {
    title: "Esports Systems",
    desc: "The tournament and community stack that ran Pyramids Cup 8, for organisers and gaming communities.",
    features: [
      "Tournament bot: registration, check-in, brackets, results",
      "Inhouse bot with ratings, ladder and weekly posts",
      "Community website with player profiles",
      "Teams OS staff app: tasks, roles, incidents",
    ],
    highlight: "Pyramids Cup 8: 335 matches, 364 players, run by a staff of five",
    img: "/case-studies/pc8/league.webp",
    url: "pyramidsqueue.com",
  },
  {
    title: "Apps, Automation and AI",
    desc: "Remove the manual steps between your tools, and put an assistant inside the systems your team uses.",
    features: [
      "Shop and delivery operations (Mandoob OS)",
      "Approvals, reminders and scheduled reports",
      "Imports from Excel and Google Sheets",
      "AI assistants that prepare tasks, replies and reports",
    ],
    highlight: "Built on the same stack as our own daily tools",
    img: "/images/erp/settings.webp",
    url: "nexaro-erp.vercel.app/settings",
  },
  {
    title: "Systems Consulting",
    desc: "A clear map of how your operations run today and what to automate first, before you spend on software.",
    features: [
      "Workflow audits",
      "Tool stack recommendations",
      "Team onboarding playbooks",
      "KPI framework design",
    ],
    // 14 Nov 2026 (owner): PMP, not CAPM; and use Pyramids Queue in What we build: the
    // operations we mapped and run for Pyramids Queue (Teams OS workflows) instead of an empty card.
    highlight: "Google PM Certified · PMP in progress",
    img: "/images/teams-os-ops-tasks.webp",
    url: "Teams OS: Pyramids Queue ops tasks",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-space px-5 pb-24 pt-20 text-ink md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">What we build</h1>
          <p className="mt-6 text-lg leading-relaxed text-mute">
            Four things we build, each priced once after a short discovery call. The monthly fee covers monitoring; new features are always priced first.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <section key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-mute">{s.desc}</p>
                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-ink/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm text-mute"><span className="text-ink">In short:</span> {s.highlight}</p>
                <Link href="/en/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                {s.img ? (
                  <BrowserFrame src={s.img} alt={s.title} url={s.url ?? undefined} />
                ) : (
                  <div className="flex aspect-[16/10] flex-col justify-end rounded-2xl border border-line bg-panel p-8">
                    <p className="eyebrow mb-3">Credentials</p>
                    <p className="text-2xl font-medium tracking-tight">{s.highlight}</p>
                  </div>
                )}
              </Reveal>
            </section>
          ))}
        </div>

        <Reveal className="mt-32 rounded-3xl border border-line bg-panel px-6 py-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Not sure which one you need?</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">Tell us what slows your team down. We will say what we would build first, and what it would cost.</p>
          <div className="mt-8 flex justify-center">
            <NeonButton href="/en/contact" size="lg">Get in touch</NeonButton>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
