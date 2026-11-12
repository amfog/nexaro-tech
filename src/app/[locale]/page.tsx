"use client";

import { motion } from "framer-motion";
import NeonButton from "@/components/ui/neon-button";
import GlassCard from "@/components/ui/glass-card";
import ParticlesBg from "@/components/ui/particles-bg";
import TechMarquee from "@/components/ui/tech-marquee";
import MirrorHallCarousel from "@/components/hero/mirror-hall-carousel";
import ProductNodeCard from "@/components/products/product-node-card";
import { ArrowRight, Building2, Globe, Trophy, Bot, Star, Code2, Factory, Scale, ShoppingBag, GraduationCap, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0A0E27] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none z-0" />
      <ParticlesBg />

      <div className="relative z-10">
        
        {/* 1. HERO */}
        <section className="flex flex-col items-center justify-center pt-16 md:pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] mb-5 text-sm text-cyan-400"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Now booking new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
            >
              Systems Your Business<br />
              <span className="text-cyan-400">Runs On</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Business systems (ERP), bilingual websites and esports platforms, in Arabic and English. One build price, no price per user, and a team that keeps it running after launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/en/contact">
                <NeonButton size="lg">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </NeonButton>
              </Link>
              <Link href="/en/portfolio">
                <NeonButton variant="secondary" size="lg">
                  View Our Work
                </NeonButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. FEATURED CASE STUDY, RIGHT AFTER THE HERO (21 Oct 2026)
            The proof comes before the list of services: Pyramids Cup 8, then
            the off-season side project as its own, smaller case study. Cup
            numbers only; the side project's numbers are never added to them. */}
        <section className="pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.07] via-[rgba(255,255,255,0.02)] to-yellow-500/[0.06] p-6 md:p-12"
            >
              <p className="font-orbitron text-xs tracking-[0.3em] uppercase text-cyan-400 mb-4">
                Featured case study · Pyramids Cup 8
              </p>

              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-orbitron text-2xl md:text-4xl font-bold leading-tight mb-5">
                    Six weeks, four stages, 335 matches.
                    <br />
                    <span className="text-cyan-400">One system ran all of it.</span>
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    The MENA Wild Rift circuit inside the Rift Legends ecosystem, run by a staff of five. We built the
                    tournament bot, the operations app, the public website and the database behind it. JSK Esports won
                    the Grand Final 3-2 against SBO3A; both go on to the Rift Legends Regional Groups.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { value: "335", label: "Matches" },
                      { value: "364", label: "Players" },
                      { value: "24", label: "Countries" },
                      { value: "3,660", label: "Discord members" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</p>
                        <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/en/case-studies/pyramids-cup-8">
                      <NeonButton>Read the case study</NeonButton>
                    </Link>
                    <a
                      href="https://pyramidsqueue.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(255,255,255,0.15)] text-sm text-gray-200 hover:border-cyan-400/50 hover:text-white transition-colors"
                    >
                      View it live <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* THE LIVE SITE, NOT A SCREENSHOT (24 Oct): a scaled iframe of
                      pyramidsqueue.com, pointer events off so it never steals a
                      scroll. Allowed by the frame-ancestors list in the
                      pyramids-queue next.config.ts. */}
                  <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-1.5">
                    <div className="relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0A0E27] aspect-[16/10]">
                      <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                      </span>
                      <iframe
                        src="https://pyramidsqueue.com/"
                        title="pyramidsqueue.com, live"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        style={{
                          width: "200%",
                          height: "200%",
                          border: "none",
                          transform: "scale(0.5)",
                          transformOrigin: "top left",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Pyramids Queue and The Vicious Esports, powered by Nexaro. Supported by the Rift Legends Program by The Purge.
                  </p>
                </div>
              </div>
            </motion.div>

            <Link
              href="/en/case-studies/pyramids-q-player-platform"
              className="mt-6 grid gap-6 rounded-2xl border border-orange-500/25 bg-orange-500/[0.04] p-6 md:p-8 hover:border-orange-400/60 transition-colors lg:grid-cols-5 items-center"
            >
              <div className="lg:col-span-2">
                <p className="font-orbitron text-[11px] tracking-[0.3em] uppercase text-orange-400 mb-2">Side project case study</p>
                <p className="font-orbitron text-xl font-bold text-white">Pyramids Q Player Platform</p>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  Player profiles, Pyramids Q Inhouses and Fantasy: built for the off-season, to grow the player base and
                  help new teams form between cups.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-cyan-300">72 player profiles</span>
                  <span className="rounded-full border border-orange-400/30 px-3 py-1 text-orange-300">Inhouses Season 1</span>
                  <span className="rounded-full border border-purple-400/30 px-3 py-1 text-purple-300">Fantasy in development</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-orange-300">
                  Read it <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="lg:col-span-3 grid grid-cols-5 gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/profiles_top5.webp" alt="Player profiles on pyramidsqueue.com" className="col-span-5 w-full rounded-xl border border-white/10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/inhouse_open.webp" alt="Pyramids Q Inhouses session open" className="col-span-3 w-full rounded-xl border border-white/10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-studies/pc8/card_basil.webp" alt="A player card" className="col-span-2 w-full h-full max-h-40 object-cover object-top rounded-xl border border-white/10" />
              </div>
            </Link>
          </div>
        </section>

        {/* 2. SERVICES */}
        <section className="py-24 px-4 bg-[#0d122d]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-cyan-400">What We Do</h2>
              <p className="text-gray-300">Four things we build, each one priced once after a short discovery call</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Business Systems (ERP)", desc: "People, projects, clients, invoices, stock and reports in one system. Switch on only the modules you need." },
                { icon: Globe, title: "Websites", desc: "Fast company websites in Arabic and English, built for phones, found on Google, with leads sent to your inbox." },
                { icon: Trophy, title: "Esports Systems", desc: "Discord bots, tournament seasons, community websites and a staff app, the stack behind Pyramids Cup 8." },
                { icon: Bot, title: "Apps, Automation and AI", desc: "Shop and delivery operations, dashboards, approvals, reminders, imports from Excel and AI assistants." },
              ].map((service, i) => (
                <GlassCard key={i}>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,245,255,0.1)] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-rajdhani text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* 2b. WHO WE WORK WITH and HOW WE WORK (12 Nov 2026, same story as the partner deck) */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">Who We <span className="text-cyan-400">Work With</span></h2>
              <p className="text-gray-300">Companies of about 10 to 80 people: big enough to feel the mess, small enough to move fast.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Code2, title: "IT and software firms", desc: "Projects, timesheets, clients, invoices, devices and licences in one place." },
                { icon: Factory, title: "Furniture and small factories", desc: "Quotes, orders, stock levels, delivery dates and workshop tasks." },
                { icon: Scale, title: "Law firms and clinics", desc: "A bilingual website plus a client file system with documents and deadlines." },
                { icon: ShoppingBag, title: "Online shops and delivery", desc: "Orders, couriers, cash collection and daily reports with Mandoob OS." },
                { icon: GraduationCap, title: "Training centres", desc: "Booking, student records, attendance, payments and certificates." },
                { icon: Gamepad2, title: "Gaming communities", desc: "Inhouse bots, tournament seasons, player profiles and community sites." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-6">
                  <item.icon className="w-6 h-6 text-cyan-400 mb-3" />
                  <h3 className="font-rajdhani text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-24 mb-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">How We <span className="text-cyan-400">Work</span></h2>
              <p className="text-gray-300">Every payment is tied to something you can see.</p>
            </div>
            <ol className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Discovery call", desc: "30 minutes on how you work today and what slows you down." },
                { title: "Written scope", desc: "What we build, in which phases, and one fixed price before we start." },
                { title: "Build in phases", desc: "You see the real system on a preview link and approve each phase." },
                { title: "Launch and training", desc: "Your data moved in, your team trained, a short written guide." },
                { title: "Monitoring", desc: "Uptime, backups and fixes every month. New features are priced first." },
              ].map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-5">
                  <span className="font-orbitron text-2xl font-bold text-cyan-400">{i + 1}</span>
                  <h3 className="font-rajdhani text-lg font-semibold text-white mt-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. OUR WORK: the carousel, moved down from the hero (21 Oct 2026) */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-3">
              Our <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-gray-400 mb-4">Websites, platforms and products we have shipped.</p>
            <MirrorHallCarousel />
            <Link href="/en/portfolio" className="inline-flex items-center gap-2 mt-6 text-sm text-cyan-300 hover:text-white transition-colors">
              See every project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 4. NODE FAMILY / ECOSYSTEM */}
        <section className="py-24 px-4 bg-[#080b1a]">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4 text-white">The Nexaro <span className="text-cyan-400">Node Family</span></h2>
            <p className="text-gray-400">The products we build on and reuse, so every client project starts further ahead.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            {/* MASTER card, full width */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <img src="/nexaro-master.svg" alt="Nexaro Platform" className="h-32 w-auto" />
              <div className="text-center sm:text-left">
                <span className="font-orbitron text-xs font-bold tracking-widest text-cyan-400 block mb-1">MASTER</span>
                <p className="text-white font-semibold text-xl">Nexaro Platform</p>
                <p className="text-gray-400 text-sm mt-1">The unified ecosystem core</p>
              </div>
            </div>

            {/* Product grid: 2 cols mobile, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { code: "NX-007.E", name: "Nexaro ERP", desc: "HR, projects, CRM, finance and stock", logo: "/nexaro-hr.svg" },
                { code: "NX-002.T", name: "Teams OS", desc: "Staff app for esports organisations", logo: "/teams-os.svg" },
                { code: "NX-008.MD", name: "Mandoob OS", desc: "Orders and couriers for online shops", logo: "/nexaro-crm.svg" },
                { code: "NX-002.O", name: "Vicious OS", desc: "Esports operations", logo: "/vicious-os.svg" },
                { code: "NX-008.M", name: "Master Control", desc: "Projects, pipeline and daily routine", logo: "/nexaro-master-control.svg", accent: "#FFD700" },
                { code: "NX-001.L", name: "Nexaro Life", desc: "Personal AI operating system", logo: "/nexaro-life.svg" },
              ].map((node, i) => (
                <ProductNodeCard key={i} code={node.code} name={node.name} desc={node.desc} logo={node.logo} accent={node.accent} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl font-bold mb-12 text-purple-400">Client Love</h2>
            {/* 24 Oct: both quotes come from the same client, so they sit under one
                name instead of looking like two different people. The card next
                to it is a result, not a quote. */}
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <GlassCard className="flex flex-col">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                {[
                  { quote: "The most comprehensive esports operations system we've seen. It eliminated 80% of our manual work and unified our entire team.", project: "Vicious OS" },
                  { quote: "Nexaro transformed our vision into a scalable platform that exceeded expectations.", project: "Alahsa Festival Platform" },
                ].map((t) => (
                  <blockquote key={t.project} className="mb-5">
                    <p className="text-lg text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-xs text-cyan-400/70 mt-2">{t.project}</p>
                  </blockquote>
                ))}
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Ahmed Alhassan</p>
                    <p className="text-xs text-gray-500">Founder and CEO, The Vicious Esports</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="flex flex-col">
                <p className="font-orbitron text-[11px] tracking-[0.3em] uppercase text-cyan-400 mb-4">In production</p>
                <p className="font-orbitron text-2xl font-bold text-white leading-snug">
                  Pyramids Cup 8: 335 matches across four stages, run by a staff of five.
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Our tournament bot, back office and public site carried the whole season, from open qualifiers to a
                  five-game Grand Final, with every result checked by a person before it was published.
                </p>
                <Link href="/en/case-studies/pyramids-cup-8" className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white transition-colors">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center bg-[rgba(255,255,255,0.02)] p-12 rounded-3xl">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">Running on Excel and WhatsApp?</h2>
            <p className="text-gray-300 mb-8">Tell us how your team works today. We reply with the questions that matter and, after a short call, a written scope and price.</p>
            <Link href="/en/contact">
              <NeonButton size="lg">Book a discovery call</NeonButton>
            </Link>
          </div>
        </section>

        {/* 7. POWERED BY */}
        <section className="py-12 pb-40 bg-[#080b1a]">
          <p className="text-center text-gray-500 font-rajdhani text-sm tracking-widest uppercase mb-6">Powered By</p>
          <TechMarquee />
        </section>

      </div>
    </main>
  );
}