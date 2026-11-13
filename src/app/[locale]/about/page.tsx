"use client";

import NeonButton from "@/components/ui/neon-button";
import { Reveal } from "@/components/ui/motion-bits";

// 14 Nov 2026 revamp: same mission, vision and principles; no icons, calmer layout.
const principles = [
  { title: "AI-First", desc: "Intelligent automation at the core of every system we build" },
  { title: "Privacy-First", desc: "Self-hosted options, data ownership, and security by design" },
  { title: "MENA-Native", desc: "Built for Arabic workflows and regional business needs" },
];

export default function AboutPage() {
  return (
    <main className="bg-space px-5 pb-24 pt-20 text-ink md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">About Nexaro</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">A software studio in Egypt</h1>
          <p className="mt-6 text-lg leading-relaxed text-mute">
            A software studio in Egypt building the systems small and mid-size companies run on: business systems, websites and esports platforms, in Arabic and English.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-line pt-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Mission</p>
            <p className="text-xl leading-relaxed text-ink/90">
              To eliminate operational chaos for teams that need to move fast. We build intelligent systems that automate workflows, unify data, and accelerate growth, allowing organizations to focus on what matters most: innovation and impact.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Vision</p>
            <p className="text-xl leading-relaxed text-ink/90">
              A world where operational complexity never stands in the way of great ideas. Where AI-powered systems handle the mundane, humans focus on the meaningful, and teams across MENA and beyond can scale without friction.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-panel p-7">
                <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mute">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-panel p-8">
          <p className="text-lg text-ink">See what we have built, or tell us what you need.</p>
          <div className="flex gap-3">
            <NeonButton href="/en/portfolio" variant="secondary">Our work</NeonButton>
            <NeonButton href="/en/contact">Book a call</NeonButton>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
