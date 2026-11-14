"use client";

/**
 * Home, revamped 14 Nov 2026 (owner: "revamp Nexaro Tech like decent companies; no useless
 * emojis, suggested images, animation"; scope: same content, new design).
 *
 * Calm product-company layout: one headline, a real product screenshot, proof, then services with
 * real screenshots instead of icon tiles. Every number and quote is the one the site already had.
 * Images to add later are listed in docs/IMAGE_SUGGESTIONS.md.
 */

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import NeonButton from "@/components/ui/neon-button";
import TechMarquee from "@/components/ui/tech-marquee";
import ProductNodeCard from "@/components/products/product-node-card";
import { Aurora, BrowserFrame, CountUp, Reveal } from "@/components/ui/motion-bits";
import ParticlesBg from "@/components/ui/particles-bg";

const STATS = [
  { value: "335", label: "Matches" },
  { value: "364", label: "Players" },
  { value: "24", label: "Countries" },
  { value: "3,660", label: "Discord members" },
];

const SERVICES = [
  { n: "01", title: "Business Systems (ERP)", desc: "People, projects, clients, invoices, stock and reports in one system. Switch on only the modules you need.", img: "/images/erp/people.webp", alt: "Nexaro ERP team directory" },
  { n: "02", title: "Websites", desc: "Fast company websites in Arabic and English, built for phones, found on Google, with leads sent to your inbox.", img: "/case-studies/pc8/home.webp", alt: "pyramidsqueue.com home page" },
  { n: "03", title: "Esports Systems", desc: "Discord bots, tournament seasons, community websites and a staff app, the stack behind Pyramids Cup 8.", img: "/case-studies/pc8/league.webp", alt: "Pyramids Cup 8 league standings" },
  { n: "04", title: "Apps, Automation and AI", desc: "Shop and delivery operations, dashboards, approvals, reminders, imports from Excel and AI assistants.", img: "/images/erp/settings.webp", alt: "Nexaro ERP modules and Nexaro AI settings" },
];

const ERP_TABS = [
  { key: "dashboard", label: "Dashboard", img: "/images/erp/dashboard.webp", points: ["Active projects, open tasks, unpaid invoices", "Income and expenses for the last six months", "What is due this week, and who owns it"] },
  { key: "people", label: "Team", img: "/images/erp/people.webp", points: ["Each person's open tasks, projects and hours", "Leave, timesheets, attendance and payroll", "Search by name, title or department"] },
  { key: "settings", label: "Modules", img: "/images/erp/settings.webp", points: ["Switch modules on and off, nothing is deleted", "Three looks for the same system", "Nexaro AI for the CEO, on your own AI key"] },
];

const WHO = [
  { title: "IT and software firms", desc: "Projects, timesheets, clients, invoices, devices and licences in one place." },
  { title: "Furniture and small factories", desc: "Quotes, orders, stock levels, delivery dates and workshop tasks." },
  { title: "Law firms and clinics", desc: "A bilingual website plus a client file system with documents and deadlines." },
  { title: "Online shops and delivery", desc: "Orders, couriers, cash collection and daily reports with Mandoob OS." },
  { title: "Training centres", desc: "Booking, student records, attendance, payments and certificates." },
  { title: "Gaming communities", desc: "Inhouse bots, tournament seasons, player profiles and community sites." },
];

const STEPS = [
  { title: "Discovery call", desc: "30 minutes on how you work today and what slows you down." },
  { title: "Written scope", desc: "What we build, in which phases, and one fixed price before we start." },
  { title: "Build in phases", desc: "You see the real system on a preview link and approve each phase." },
  { title: "Launch and training", desc: "Your data moved in, your team trained, a short written guide." },
  { title: "Monitoring", desc: "Uptime, backups and fixes every month. New features are priced first." },
];

const WORK = [
  { name: "Pyramids Queue", sub: "Esports platform, Pyramids Cup 8", img: "/images/pyramids-queue-home.webp", href: "/en/case-studies/pyramids-cup-8" },
  { name: "Alahsa Festival Platform", sub: "Festival ticketing platform", img: "/images/alahsa-festival-home.webp", href: "/en/portfolio" },
  { name: "Phygital KSA", sub: "National phygital competitions", img: "/images/phygital-ksa-hero.webp", href: "/en/portfolio" },
];

const NODES = [
  { code: "NX-007.E", name: "Nexaro ERP", desc: "HR, projects, CRM, finance and stock", logo: "/nexaro-hr.svg" },
  { code: "NX-002.T", name: "Teams OS", desc: "Staff app for esports organisations", logo: "/teams-os.svg" },
  { code: "NX-008.MD", name: "Mandoob OS", desc: "Orders and couriers for online shops", logo: "/nexaro-crm.svg" },
  { code: "NX-002.O", name: "Vicious OS", desc: "Esports operations", logo: "/vicious-os.svg" },
  { code: "NX-008.M", name: "Master Control", desc: "Projects, pipeline and daily routine", logo: "/nexaro-master-control.svg" },
  { code: "NX-001.L", name: "Nexaro Life", desc: "Personal AI operating system", logo: "/nexaro-life.svg" },
];

function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto mb-14 max-w-2xl text-center" : "mb-14 max-w-2xl"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-[44px] md:leading-[1.1]">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-mute">{sub}</p>}
    </Reveal>
  );
}

function ErpSpotlight() {
  const [tab, setTab] = useState(ERP_TABS[0]);
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="mb-6 inline-flex rounded-full border border-line p-1">
          {ERP_TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${tab.key === t.key ? "text-black" : "text-mute hover:text-ink"}`}
            >
              {tab.key === t.key && <motion.span layoutId="erp-tab" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.ul key={tab.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="space-y-4">
            {tab.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-ink/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {p}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
        <div className="mt-8 flex flex-wrap gap-3">
          <NeonButton href="https://nexaro-erp.vercel.app">Open the live demo <ArrowUpRight className="h-4 w-4" /></NeonButton>
          <NeonButton href="/en/services" variant="secondary">See the modules</NeonButton>
        </div>
      </div>
      <div className="relative lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div key={tab.key} initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <BrowserFrame src={tab.img} alt={`Nexaro ERP ${tab.label}`} url="nexaro-erp.vercel.app" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-space text-ink">
      {/* 14 Nov 2026 (owner): the original background is back: the faint cyan grid and the particles. */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <ParticlesBg />
      <div className="relative z-10">
      {/* 1. HERO */}
      <section className="relative px-5 pb-10 pt-20 md:pt-28">
        <Aurora />
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-mute">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Now booking new projects
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-ink md:text-7xl">
              Systems your business
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">runs on</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
              Business systems (ERP), bilingual websites and esports platforms, in Arabic and English. One build price, no price per user, and a team that keeps it running after launch.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NeonButton href="/en/contact" size="lg">Start your project <ArrowRight className="h-4 w-4" /></NeonButton>
            <NeonButton href="/en/portfolio" size="lg" variant="secondary">View our work</NeonButton>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="relative mx-auto mt-16 max-w-5xl">
          <BrowserFrame src="/images/erp/dashboard.webp" alt="Nexaro ERP dashboard with projects, tasks, invoices and a six month income chart" url="nexaro-erp.vercel.app" tilt priority />
        </Reveal>
      </section>

      {/* 2. TRUST STRIP: real projects only */}
      <section className="px-5 py-14">
        <p className="mb-7 text-center text-sm text-dim">Platforms we have shipped for</p>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
          {[
            { src: "/pyramids-queue.png", alt: "Pyramids Queue", h: "h-10" },
            { src: "/vicious-os.svg", alt: "The Vicious Esports", h: "h-10" },
            { src: "/phygital-ksa-logo.png", alt: "Phygital KSA", h: "h-8" },
            { src: "/alahsa-festival.svg", alt: "Alahsa Festival", h: "h-10" },
          ].map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={l.alt} src={l.src} alt={l.alt} title={l.alt} className={`${l.h} w-auto object-contain`} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED CASE STUDY: Pyramids Cup 8 (numbers as before) */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Featured case study · Pyramids Cup 8" title={<>Six weeks, four stages, 335 matches. <span className="text-mute">One system ran all of it.</span></>} />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-mute">
                The MENA Wild Rift circuit inside the Rift Legends ecosystem, run by a staff of five. We built the tournament bot, the operations app, the public website and the database behind it. JSK Esports won the Grand Final 3-2 against SBO3A; both go on to the Rift Legends Regional Groups.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="text-sm text-dim">{s.label}</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-ink"><CountUp value={s.value} /></dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <NeonButton href="/en/case-studies/pyramids-cup-8">Read the case study</NeonButton>
                <NeonButton href="https://pyramidsqueue.com" variant="secondary">View it live <ArrowUpRight className="h-4 w-4" /></NeonButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              {/* The live site, not a screenshot: a scaled iframe of pyramidsqueue.com, pointer events off.
                  Allowed by the frame-ancestors list in the pyramids-queue next.config.ts. */}
              <div className="overflow-hidden rounded-xl border border-line-2 bg-panel">
                <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
                  </span>
                  <span className="truncate font-mono text-[11px] text-dim">pyramidsqueue.com</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <iframe
                    src="https://pyramidsqueue.com/"
                    title="pyramidsqueue.com, live"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    style={{ width: "200%", height: "200%", border: "none", transform: "scale(0.5)", transformOrigin: "top left", pointerEvents: "none" }}
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-dim">Pyramids Queue and The Vicious Esports, powered by Nexaro. Supported by the Rift Legends Program by The Purge.</p>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <Link href="/en/case-studies/pyramids-q-player-platform" className="group grid items-center gap-8 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-line-2 md:p-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="eyebrow mb-3 !text-gold">Side project case study</p>
                <p className="text-2xl font-semibold tracking-tight">Pyramids Q Player Platform</p>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">
                  Player profiles, Pyramids Q Inhouses and Fantasy: built for the off-season, to grow the player base and help new teams form between cups.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 text-xs text-mute">
                  {["72 player profiles", "Inhouses Season 1", "Fantasy in development"].map((t) => (
                    <li key={t} className="rounded-full border border-line-2 px-3 py-1">{t}</li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
                  Read it <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="grid grid-cols-5 gap-3 lg:col-span-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/profiles_top5.webp" alt="Player profiles on pyramidsqueue.com" className="col-span-5 w-full rounded-lg border border-line" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/inhouse_open.webp" alt="Pyramids Q Inhouses session open" className="col-span-3 w-full rounded-lg border border-line" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/card_basil.webp" alt="A player card" className="col-span-2 h-full max-h-40 w-full rounded-lg border border-line object-cover object-top" loading="lazy" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. SERVICES: screenshots instead of icon tiles */}
      <section className="border-t border-line bg-[#0d122d]/80 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="What we do" title="Four things we build" sub="Each one priced once, after a short discovery call." />
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.08}>
                <Link href="/en/services" className="group block h-full overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-line-2">
                  <div className="p-7">
                    <span className="font-mono text-xs text-dim">{s.n}</span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-mute">{s.desc}</p>
                  </div>
                  <div className="relative mx-7 h-48 overflow-hidden rounded-t-lg border border-b-0 border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.alt} loading="lazy" className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02]" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SPOTLIGHT: Nexaro ERP */}
      <section className="relative px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Nexaro ERP" title="One system for people, projects, clients and money" sub="Modular: switch on only what you need. Arabic and English on every screen." />
          <Reveal><ErpSpotlight /></Reveal>
        </div>
      </section>

      {/* 6. WHO WE WORK WITH */}
      <section className="border-t border-line px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Who we work with" title="Companies of about 10 to 80 people" sub="Big enough to feel the mess, small enough to move fast." />
          <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {WHO.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06} className="border-b border-line py-7 sm:pe-8">
                <h3 className="text-[17px] font-medium text-ink">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mute">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK: a timeline that draws itself */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How we work" title="Every payment is tied to something you can see" />
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-brand/70 via-line-2 to-transparent md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <ol className="grid gap-8 md:grid-cols-5 md:gap-6">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={0.15 + i * 0.12}>
                  <li className="relative">
                    <span className="relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-brand bg-space" />
                    <p className="mt-5 font-mono text-xs text-dim">Step {i + 1}</p>
                    <h3 className="mt-1 text-[17px] font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 8. OUR WORK */}
      <section className="border-t border-line px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Our work" title="Websites, platforms and products we have shipped" />
            <Reveal className="mb-14">
              <Link href="/en/portfolio" className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink">
                See every project <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WORK.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.08}>
                <Link href={w.href} className="group block">
                  <div className="overflow-hidden rounded-xl border border-line bg-panel">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.img} alt={w.name} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  </div>
                  <p className="mt-4 font-medium text-ink">{w.name}</p>
                  <p className="text-sm text-mute">{w.sub}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRODUCT FAMILY */}
      <section className="bg-[#080b1a]/80 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="The Nexaro node family" title="Products we build on and reuse" sub="So every client project starts further ahead." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NODES.map((n, i) => (
              <Reveal key={n.code} delay={(i % 3) * 0.06}>
                <ProductNodeCard code={n.code} name={n.name} desc={n.desc} logo={n.logo} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHAT CLIENTS SAY: same quotes, one client, no star icons */}
      <section className="border-t border-line px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow mb-6">What clients say</p>
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-[32px]">
              &ldquo;The most comprehensive esports operations system we&apos;ve seen. It eliminated 80% of our manual work and unified our entire team.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-dim">On Vicious OS</p>
            <blockquote className="mt-8 text-lg leading-relaxed text-mute">
              &ldquo;Nexaro transformed our vision into a scalable platform that exceeded expectations.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-dim">On the Alahsa Festival Platform</p>
            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-sm font-medium text-ink">AA</span>
              <div>
                <p className="text-sm font-medium">Ahmed Alhassan</p>
                <p className="text-xs text-dim">Founder and CEO, The Vicious Esports</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-7">
              <p className="eyebrow mb-4">In production</p>
              <p className="text-xl font-semibold leading-snug tracking-tight">Pyramids Cup 8: 335 matches across four stages, run by a staff of five.</p>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">
                Our tournament bot, back office and public site carried the whole season, from open qualifiers to a five-game Grand Final, with every result checked by a person before it was published.
              </p>
              <Link href="/en/case-studies/pyramids-cup-8" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-ink">
                Read the case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="px-5 pb-24 pt-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-panel px-6 py-16 text-center md:py-20">
            <Aurora className="opacity-60" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Running on Excel and WhatsApp?</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-mute">Tell us how your team works today. We reply with the questions that matter and, after a short call, a written scope and price.</p>
              <div className="mt-9 flex justify-center">
                <NeonButton href="/en/contact" size="lg">Book a discovery call <ArrowRight className="h-4 w-4" /></NeonButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 12. STACK */}
      <section className="border-t border-line px-5 py-12">
        <p className="mb-6 text-center text-sm text-dim">Built with</p>
        <TechMarquee />
      </section>
      </div>
    </main>
  );
}
