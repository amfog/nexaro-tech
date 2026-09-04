"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NeonButton from "@/components/ui/neon-button";
import {
  AlertTriangle,
  Layers,
  Workflow,
  Scale,
  Shield,
  BarChart3,
  Wrench,
  ExternalLink,
  ArrowLeft,
  Quote,
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const systems = [
  {
    name: "PyramidsQ Bot",
    accent: "text-cyan-400",
    bar: "from-cyan-400 to-blue-500",
    body:
      "A Discord bot that registers teams from a pasted roster, reads a Toornament bracket screenshot, creates a private channel per match with both team roles in it, DMs every player a direct link, posts the rules, fires a ready check ten minutes before kickoff, and reads the end-of-game scoreboard into per-player statistics.",
  },
  {
    name: "Nexaro Teams OS",
    accent: "text-purple-400",
    bar: "from-purple-500 to-pink-500",
    body:
      "The staff platform. 57 screens across tasks, approvals, reporting, directory, chat, and a 36-screen esports module covering tournaments, matches, incidents, prize pools, staff shifts, broadcast logs and fantasy.",
  },
  {
    name: "pyramidsqueue.com",
    accent: "text-emerald-400",
    bar: "from-emerald-500 to-teal-500",
    body:
      "The public site. Schedule, standings, player statistics, rosters, prizes, rules, and an explainer of how MENA feeds the EMEA league. Sixteen pages, five of them live from the database on a sixty second refresh.",
  },
  {
    name: "The database",
    accent: "text-gold",
    bar: "from-yellow-500 to-orange-500",
    body:
      "One Postgres instance behind all four, with row level security as the boundary between seven separate competitive circuits.",
  },
];

const steps = [
  "A moderator runs one command in the match channel with the end-of-game screenshot.",
  "The bot posts the score to the results channel, writes the series score to the database, and reads the scoreboard image into per-player rows.",
  (
    <>
      Standings on the public site update within a minute.{" "}
      <strong className="text-white font-semibold">Player statistics do not.</strong> They wait.
    </>
  ),
  "A staff member checks the extracted rows against the screenshot in Teams OS and approves them. Then they appear.",
];

const proof = [
  { value: "7", label: "Circuits on one deployment", accent: "text-cyan-400" },
  { value: "536", label: "Players in a single cup", accent: "text-purple-400" },
  { value: "195+", label: "Matches operated", accent: "text-emerald-400" },
  { value: "147K", label: "Live views tracked", accent: "text-gold" },
  { value: "4,394.3", label: "Hours watched", accent: "text-cyan-400" },
  { value: "86,000", label: "Lines of code across four systems", accent: "text-purple-400" },
];

const circuits = ["Türkiye", "Spain", "Italy", "France", "DACH", "CIS", "MENA"];

export default function PyramidsQueueCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <p className="font-orbitron text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-400 mb-5">
            Case Study: Pyramids Queue
          </p>
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            One operator was running a 500-player esports circuit out of a spreadsheet, a Discord
            server, and a group chat. We replaced it with{" "}
            <span className="text-cyan-400">four systems on one database.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Esports operations", "MENA · Wild Rift", "Discord bot", "Teams OS", "Public site", "Postgres + RLS"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-gray-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* The problem */}
        <motion.section {...reveal} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-7 h-7 text-cyan-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">The problem, in the client’s words</h2>
          </div>
          <blockquote className="border-l-2 border-cyan-400/40 pl-6 space-y-4 text-gray-300 leading-relaxed max-w-3xl">
            <p>
              Pyramids Queue runs the MENA circuit for Wild Rift, feeding into Rift Legends, the EMEA
              league. Cup 7 had 536 players, 195 matches, and seven streamers producing 4,394 hours of
              watch time.
            </p>
            <p>
              All of it was coordinated by hand. Registration was people posting rosters into a Discord
              channel. Standings were a spreadsheet somebody updated between matches. The results a
              broadcaster read on air came from a different place than the ones on the website. Nobody
              could answer “where are we” without asking three people.
            </p>
            <p>
              The cost was not the tools. It was that one person was the integration layer between
              them, and that person could not take a week off.
            </p>
          </blockquote>
        </motion.section>

        {/* What we built */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-7 h-7 text-purple-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">What we built</h2>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            Four systems, sharing one Postgres database. That last part is the whole design.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {systems.map((s) => (
              <div
                key={s.name}
                className="bg-[#0d122d] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${s.bar}`} />
                <div className="p-6">
                  <h3 className={`font-orbitron text-lg font-bold mb-3 ${s.accent}`}>{s.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <figure className="mt-10">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-2 rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/app-1.png"
                alt="Nexaro Teams OS operations dashboard"
                className="w-full rounded-xl border border-[rgba(255,255,255,0.08)]"
              />
            </div>
            <figcaption className="text-xs text-gray-500 mt-3 text-center">
              Nexaro Teams OS, the operations dashboard
            </figcaption>
          </figure>
        </motion.section>

        {/* The result a match takes */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Workflow className="w-7 h-7 text-cyan-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">The result a match takes</h2>
          </div>
          <ol className="space-y-4">
            {steps.map((body, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-space font-orbitron font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl px-5 py-4 text-gray-300 leading-relaxed">
                  {body}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-gray-400 max-w-3xl">
            Nobody retypes anything. Nobody reconciles two sources.
          </p>
          <figure className="mt-10">
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 p-2 rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/app-3.png"
                alt="Nexaro Teams OS player records screen"
                className="w-full rounded-xl border border-[rgba(255,255,255,0.08)]"
              />
            </div>
            <figcaption className="text-xs text-gray-500 mt-3 text-center">
              Nexaro Teams OS player records, where extracted stats wait for a human check
            </figcaption>
          </figure>
        </motion.section>

        {/* The decision that defines the system */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-7 h-7 text-purple-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">
              The decision that defines the system
            </h2>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <Quote className="w-10 h-10 text-purple-400/60 mb-4" />
            <blockquote className="font-orbitron text-2xl md:text-4xl font-bold leading-tight text-white mb-8">
              Automation removes typing, never judgement.
            </blockquote>
            <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl">
              <p>
                Anything a model extracted is held unverified until a person approves it, and the
                filter that enforces that lives in a database view rather than in a page, so no future
                feature can bypass it by querying differently.
              </p>
              <p>
                That distinction is not decoration. Wild Rift scoreboards print no champion names, only
                a circular portrait, so the champion field is image recognition rather than text. The
                model is instructed to return blank when unsure. A blank column a referee fills in is a
                minor annoyance. A confidently wrong one that reaches a public leaderboard is an
                argument, and after that nobody trusts any of the numbers.
              </p>
              <p>
                Match scores are treated differently and publish immediately, because a score is a
                number a moderator typed. There is nothing to verify.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Multi tenancy */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-7 h-7 text-emerald-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Multi tenancy, from day one</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {circuits.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl">
            <p>
              Seven circuits run on one deployment: Türkiye, Spain, Italy, France, DACH, CIS and MENA.
              Each sees only its own data, and that is enforced by row level security in the database
              rather than by a filter in application code, so a missing{" "}
              <code className="px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.08)] text-cyan-300 text-[0.85em]">
                where
              </code>{" "}
              clause in a future feature cannot leak another circuit’s data.
            </p>
            <p>
              White label throughout. Your name, your colours, your domain. The customers of a customer
              never see us.
            </p>
            <p>
              A new tournament, department or workflow is a settings change. No branch, no redeploy, no
              per-customer codebase to maintain.
            </p>
          </div>
        </motion.section>

        {/* Proof */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-7 h-7 text-cyan-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Proof</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {proof.map((p) => (
              <div
                key={p.label}
                className="bg-[#0d122d] border border-[rgba(255,255,255,0.06)] rounded-xl p-6"
              >
                <div className={`font-orbitron text-3xl md:text-4xl font-bold ${p.accent}`}>
                  {p.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">{p.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-3xl">
            Pyramids Cup 7 ran on this end to end. Pyramids Cup 8 opened on it in September 2026.
          </p>
          <figure className="mt-10">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-2 rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/app-2.png"
                alt="Nexaro Teams OS media reporting screen"
                className="w-full rounded-xl border border-[rgba(255,255,255,0.08)]"
              />
            </div>
            <figcaption className="text-xs text-gray-500 mt-3 text-center">
              Nexaro Teams OS media reporting
            </figcaption>
          </figure>
        </motion.section>

        {/* Why it did not become shelfware */}
        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-7 h-7 text-purple-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">
              Why it did not become shelfware
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Because the team that built it uses it every week to run a real tournament. Every awkward
            edge in the product exists because something went wrong on a live match day and had to be
            fixed by the following week. That is also why the roadmap has not drifted into features
            nobody asked for.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          {...reveal}
          className="mt-24 text-center border-t border-[rgba(255,255,255,0.08)] pt-16"
        >
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">See the live artefact</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Pyramids Cup 7 ran on this system end to end. The public site is live now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeonButton size="lg" href="https://pyramidsqueue.com">
              <ExternalLink className="w-4 h-4" /> Visit pyramidsqueue.com
            </NeonButton>
            <NeonButton variant="secondary" size="lg" href="/contact">
              Start a system like this
            </NeonButton>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
