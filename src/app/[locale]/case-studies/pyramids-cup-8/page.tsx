"use client";

/*
  PYRAMIDS CUP 8, THE LONG CASE STUDY (21 Oct 2026)

  Every number on this page comes from the Cup 8 tournament database, the
  published rulebook or Discord Server Insights, and the ones that do not are
  labelled "owner reported" where they appear. Nothing is rounded up.

  The player platform (profiles, inhouses, fantasy) is NOT part of this study.
  It is a separate side project with its own page, so the cup numbers are never
  mixed with off-season numbers.

  Partners of Cup 8: Pyramids Queue and The Vicious Esports, powered by Nexaro,
  supported by the Rift Legends Program by The Purge.
*/

import { motion } from "framer-motion";
import Link from "next/link";
import NeonButton from "@/components/ui/neon-button";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Flag,
  Globe2,
  Layers,
  ListChecks,
  MessagesSquare,
  Radio,
  ShieldCheck,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const headline = [
  { value: "331", label: "Matches", note: "Q1 130, Q2 167, League 30, Playoffs 4" },
  { value: "706", label: "Games", note: "all four stages, 14 in the Playoffs" },
  { value: "364", label: "Players", note: "436 player entries" },
  { value: "54", label: "Teams", note: "60 team entries" },
  { value: "24", label: "Countries", note: "14 of the 15 MENA countries" },
  { value: "3,660", label: "Discord members", note: "about 3,400 in August" },
  { value: "200K", label: "Stream views, up to", note: "owner reported" },
  { value: "800K", label: "Clip views, up to", note: "owner reported" },
];

const facts = [
  ["Dates", "8 September to 23 October 2026"],
  ["Game", "Wild Rift, mobile, EU server"],
  ["Region", "MENA, inside EMEA"],
  ["Format", "Two open qualifiers of 10 Swiss rounds, Bo3"],
  ["Draft", "Global ban in the qualifiers, Fearless Draft from the League Stage"],
  ["League and Playoffs", "12 teams in two groups, then a top 4 with Bo5 semi-finals and a Bo5 final"],
  ["Prize pool", "750 EUR: 300, 200, 150, 100"],
  ["Rosters", "Five starters plus up to three substitutes"],
  ["Eligibility", "16+ to play. 18+, or a parental agreement, for a prize"],
  ["Broadcast", "No official broadcast. Community creators covered it"],
];

const stages = [
  { name: "Qualifier 1", when: "8 to 18 Sep", body: "29 entries, 27 played. 10 Swiss rounds, 130 matches, 283 games. SBO3A went 10-0, the only unbeaten team in either qualifier." },
  { name: "Qualifier 2", when: "22 Sep to 2 Oct", body: "33 entries, all played. 10 Swiss rounds, 167 matches, 344 games. Bigger than the first, with no new campaign in between." },
  { name: "League Stage", when: "7 to 16 Oct", body: "Top six from each qualifier. Two groups of six, Bo3 Fearless, 30 series and 65 games. SBO3A and JSK Esports won their groups 5-0." },
  { name: "Playoffs", when: "22 and 23 Oct", body: "Top four. The teams asked for Bo5 semi-finals; the rule needed all four to agree in writing, and 4 of 4 did. JSK Esports won the Grand Final 3-2." },
  { name: "Rift Legends", when: "Next", body: "JSK Esports and SBO3A go to the Rift Legends Regional Groups. coming for you and 4Cats1Dog go to the Last Chance Qualifier." },
];

const challenge = [
  { title: "Sequencing", body: "Swiss round two cannot be paired until every round one result is in. One team that leaves after its own last game delays twenty five others." },
  { title: "Concurrency", body: "Thirteen matches per round, in two waves at 20:00 and 21:30 Cairo, to stagger the load on referees and creators." },
  { title: "Evidence", body: "Every game needs its scoreboard captured while the players are still in the room. Ten seconds during the match, twenty minutes after it." },
  { title: "Hard limits", body: "Discord caps a server at 500 channels and counts categories. Each round uses roughly seventeen." },
];

const stack = [
  { name: "Nexaro AI, the tournament bot", stat: "25 commands · ~17,900 lines of TypeScript", body: "Registration from a pasted roster, a private channel per match scoped to two teams, a referee and a moderator, bilingual rules briefs, byes, ready checks ten minutes before kickoff, team sheets per game, draft and ban tracking, results and scoreboard capture.", bar: "from-cyan-400 to-blue-500", accent: "text-cyan-400" },
  { name: "Teams OS, the back office", stat: "Flutter web · ~75,800 lines of Dart", body: "Rosters per stage, results review, incidents, champion review queue, media hub, staff roles and the bot log. Everything a referee or admin needs that is not a Discord command.", bar: "from-purple-500 to-pink-500", accent: "text-purple-400" },
  { name: "pyramidsqueue.com, the public record", stat: "20 public pages · Arabic and English", body: "Live standings per stage, player statistics, champion meta, schedule and bracket, rules, the region map and creators. Pages rebuild only when the data behind them changes.", bar: "from-emerald-500 to-teal-500", accent: "text-emerald-400" },
  { name: "One shared database", stat: "Supabase Postgres · 83 tables · 20 views", body: "Every number is written once and read everywhere. Public data leaves only through checked public views. Migrations are numbered, additive and logged.", bar: "from-yellow-500 to-orange-500", accent: "text-yellow-400" },
];

const night = [
  { t: "19:00", title: "Pre-flight", body: "A read-only check resolves every team in the next round and fails loudly, by name, if a team sheet would come out blank." },
  { t: "19:30", title: "Draw the round", body: "One command creates every match channel, scopes permissions, posts the brief, records the bye and reports how many channels are left." },
  { t: "19:50", title: "Ready check", body: "Posted ten minutes before kickoff. A moderator approves the start." },
  { t: "20:00", title: "The matches", body: "Team sheets per game, the draft and global ban recorded, the result submitted with screenshots." },
  { t: "23:30", title: "Close the night", body: "Every match submitted before the next round is paired, because Swiss pairs off the last round." },
  { t: "After", title: "Clips and champions", body: "The media hub and the champion review queue. Five minutes, and both go stale fast if skipped." },
];

const automated = [
  "Match channel creation and permission scoping",
  "Ready checks, ten minutes before kickoff",
  "Bye detection, recording and announcement",
  "Standings recalculated on every result",
  "Website rebuild, scoped to the page that changed",
  "Bilingual messages from stored templates",
  "Scoreboard rows matched to registered players",
  "Pre-flight checks before a match night",
];

const human = [
  "Whether a result is correct before it is published",
  "Whether a team sheet is real or an untouched template",
  "Every tiebreak and every ruling",
  "Which clips reach the public site",
  "Which champion corrections are accepted",
  "Whether a warning is issued, and at what level",
  "Eligibility, deliberately not automated",
];

const incidents = [
  { title: "Discord's 500 channel ceiling", when: "20 September", problem: "The server hit Discord's channel cap mid-tournament. Finished round categories were deleted to free space; results lived in the database and on the website, so only chat was lost.", change: "The bracket command now refuses a batch that will not fit and reports free channels after every round." },
  { title: "A team lookup that failed silently", when: "22 and 23 September", problem: "Six teams entered both qualifiers and held two roster rows on one Discord role. The lookup expected one, threw on two, and seven call sites swallowed the error. Team sheets and result attribution degraded with nothing logged.", change: "The lookup is now stage-aware, and the read-only pre-flight check resolves every team before the night starts." },
  { title: "A bye with no channel", when: "Qualifier 1", problem: "A team with no opponent got its point recorded but no channel and no message, so it had no confirmation it had not been forgotten.", change: "A bye now gets a channel and a bilingual brief, and still records and announces when there is no room, so a courtesy channel never takes a real match's slot." },
];

const playoffs = [
  { label: "Semi-final 1", when: "22 Oct, 19:00", a: "SBO3A", sa: 3, b: "4Cats1Dog", sb: 0, final: false },
  { label: "Semi-final 2", when: "22 Oct, 22:00", a: "JSK Esports", sa: 3, b: "coming for you", sb: 1, final: false },
  { label: "Third place", when: "23 Oct, 20:00", a: "coming for you", sa: 2, b: "4Cats1Dog", sb: 0, final: false },
  { label: "Grand Final", when: "23 Oct, 22:00", a: "JSK Esports", sa: 3, b: "SBO3A", sb: 2, final: true },
];

const countries = [
  ["Egypt", 249], ["Tunisia", 50], ["Iraq", 25], ["Jordan", 21], ["Saudi Arabia", 18], ["Morocco", 17], ["Algeria", 8], ["Libya", 5],
] as const;

const creators = [
  ["Fog", 160], ["Eazzy", 160], ["0wnz WildRift", 160], ["Bu3li", 100], ["Hemacr", 60], ["Zodiac", 60], ["SINA", 60],
] as const;

const proved = [
  ["A second qualifier can grow inside a live event", "33 team entries against 29, four weeks in, with no new campaign between them."],
  ["A staff of five can run a 331 match tournament", "Because the seventeen steps behind every match are handled by a system rather than by somebody remembering."],
  ["Partial data can be published honestly", "96.4% of 3,044 player statistic rows attach to a named player automatically. The other 111 wait for a person, and the site says so."],
  ["A rulebook survives being applied", "Five teams tied on twelve points for three seats. The published tiebreak order resolved it, with the full working written down."],
  ["The region is wider than Egypt", "24 declared countries, and Tunisia alone sent 50 player entries."],
];

function Section({ icon: Icon, title, kicker, children }: { icon: React.ElementType; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <motion.section {...reveal} className="mt-24">
      {kicker && <p className="font-orbitron text-[11px] tracking-[0.3em] uppercase text-cyan-400/80 mb-3">{kicker}</p>}
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-7 h-7 text-cyan-400 shrink-0" />
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function Shot({ src, alt, caption, ratio }: { src: string; alt: string; caption: string; ratio?: string }) {
  return (
    <figure>
      <div className="bg-gradient-to-br from-yellow-500/20 to-cyan-500/10 p-1.5 rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className={`w-full rounded-xl border border-white/10 object-cover object-top ${ratio ?? ""}`} />
      </div>
      <figcaption className="text-xs text-gray-500 mt-2 text-center">{caption}</figcaption>
    </figure>
  );
}

function Bars({ rows, max, color, unit }: { rows: readonly (readonly [string, number])[]; max: number; color: string; unit?: string }) {
  return (
    <div className="space-y-2.5">
      {rows.map(([name, n]) => (
        <div key={name} className="flex items-center gap-3 text-sm">
          <span className="w-28 shrink-0 text-gray-300 truncate">{name}</span>
          <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(n / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`h-full rounded-full ${color}`}
            />
          </div>
          <span className="w-14 shrink-0 text-right font-orbitron text-xs text-white tabular-nums">
            {n}
            {unit ?? ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PyramidsCup8CaseStudy() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/en/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to our work
          </Link>
          <p className="font-orbitron text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-400 mb-5">
            Case study · Pyramids Cup 8 · Wild Rift MENA
          </p>
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Six weeks, four stages, 331 matches.{" "}
            <span className="text-cyan-400">One system ran all of it.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
            Pyramids Cup 8 is the MENA local circuit inside the Wild Rift Rift Legends ecosystem. Nexaro built and
            operated the system behind it: a tournament bot, an operations app, a public website and one shared
            database. The whole season was run by a staff of five: Fog, mer, evil, itach and ananas.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Esports operations", "Discord bot", "Flutter web", "Next.js", "Supabase Postgres", "Arabic and English"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Pyramids Queue and The Vicious Esports, powered by Nexaro. Supported by the Rift Legends Program by The Purge.
          </p>
          <div className="mt-8">
            <Shot src="/case-studies/pc8/final-results.webp" alt="Pyramids Cup 8 final results: JSK Esports champions" caption="Final results: JSK Esports won the Grand Final 3-2 against SBO3A" />
          </div>
        </motion.div>

        {/* At a glance */}
        <Section icon={BarChart3} title="Cup 8 at a glance" kicker="The numbers">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {headline.map((s) => (
              <div key={s.label} className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-5">
                <div className="font-orbitron text-3xl font-bold text-cyan-400">{s.value}</div>
                <div className="text-sm text-white mt-1">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1">{s.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500 max-w-3xl">
            Tournament figures come from the Cup 8 database. Teams and players are counted two ways because six teams
            entered both qualifiers with different rosters: 60 team entries are 54 distinct teams, and 436 roster
            places are 364 distinct people. View numbers are reported by the organiser and the creators, and marked so.
          </p>
        </Section>

        {/* The brief */}
        <Section icon={Flag} title="The brief" kicker="Context">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Seven editions of Pyramids Cup came before this one, run on Discord, spreadsheets and manual posting.
                Each edition grew, and so did the work: every result was typed into five places, and every match night
                depended on somebody remembering seventeen steps.
              </p>
              <p>
                For Cup 8 the goal was a season that runs on a system: register, play, verify and publish once, in
                Arabic and English, with a public record any captain can check without asking an admin.
              </p>
            </div>
            <div className="lg:col-span-3 bg-[#0d122d] border border-white/[0.06] rounded-xl divide-y divide-white/5">
              {facts.map(([k, v]) => (
                <div key={k} className="flex gap-4 px-5 py-3 text-sm">
                  <span className="w-36 shrink-0 text-gray-500">{k}</span>
                  <span className="text-gray-200">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Structure */}
        <Section icon={CalendarDays} title="Two doors in, one road through" kicker="The season">
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            Two open qualifiers on separate team pools with separate standings, never merged into one table, because
            a merged table would rank teams against opponents they never played. A team that qualified from the first
            could not re-enter the second; every other team could, with a fresh entry.
          </p>
          <div className="grid md:grid-cols-5 gap-3">
            {stages.map((s, i) => (
              <div key={s.name} className={`rounded-xl border p-4 ${i === 4 ? "border-yellow-500/40 bg-yellow-500/[0.05]" : "border-white/[0.06] bg-[#0d122d]"}`}>
                <p className={`font-orbitron text-sm font-bold ${i === 4 ? "text-yellow-400" : "text-cyan-400"}`}>{s.name}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1 mb-3">{s.when}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Shot src="/case-studies/pc8/finals-boosted.webp" alt="The Grand Final on a creator stream" caption="The Grand Final live on a creator stream, with the Pyramids Cup partner bar on screen" />
            <Shot src="/case-studies/pc8/home.webp" alt="pyramidsqueue.com home page" caption="pyramidsqueue.com during the Playoffs" />
          </div>
        </Section>

        {/* Playoffs */}
        <Section icon={Trophy} title="JSK Esports are the champions" kicker="The Playoffs, 22 and 23 October">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {playoffs.map((m) => (
                <div key={m.label} className={`rounded-xl border p-5 ${m.final ? "border-yellow-500/50 bg-yellow-500/[0.05]" : "border-white/[0.06] bg-[#0d122d]"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={`font-orbitron text-xs font-bold uppercase tracking-wider ${m.final ? "text-yellow-400" : "text-cyan-400"}`}>{m.label}</p>
                    <p className="text-[11px] text-gray-500">{m.when}</p>
                  </div>
                  {[[m.a, m.sa], [m.b, m.sb]].map(([t, sc]) => {
                    const won = sc === Math.max(m.sa, m.sb);
                    return (
                      <div key={String(t)} className="flex items-center justify-between py-1">
                        <span className={won ? "font-semibold text-white" : "text-gray-500"}>{t}</span>
                        <span className={`font-orbitron text-lg font-bold ${won ? "text-yellow-400" : "text-gray-600"}`}>{sc}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-yellow-500/40 p-5">
              <p className="font-orbitron text-xs font-bold uppercase tracking-wider text-yellow-400 mb-4">Final placings</p>
              {[
                ["1", "JSK Esports", "Rift Legends Regional Groups"],
                ["2", "SBO3A", "Rift Legends Regional Groups"],
                ["3", "coming for you", "Last Chance Qualifier"],
                ["4", "4Cats1Dog", "Last Chance Qualifier"],
              ].map(([n, t, w]) => (
                <div key={t} className="flex gap-3 py-2">
                  <span className="font-orbitron text-xl font-bold text-yellow-400 w-5">{n}</span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-xs text-gray-500">{w}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-gray-300 max-w-3xl leading-relaxed">
            SBO3A won sixteen series in a row from 8 September: 10-0 in Qualifier 1, 5-0 in the League Stage and 3-0 in
            the semi-final. It took JSK Esports all five games of the Grand Final to stop them.
          </p>
        </Section>

        {/* Live */}
        <Section icon={Radio} title="The public record, live" kicker="pyramidsqueue.com">
          <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 to-cyan-500/10 p-1.5">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0E27] aspect-[16/9]">
              <iframe
                src="https://pyramidsqueue.com/season"
                title="pyramidsqueue.com season page, live"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                style={{ width: "200%", height: "200%", border: "none", transform: "scale(0.5)", transformOrigin: "top left", pointerEvents: "none" }}
              />
            </div>
          </div>
          <a href="https://pyramidsqueue.com/season" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white">
            Open the live season page <ExternalLink className="w-4 h-4" />
          </a>
        </Section>

        {/* Challenge */}
        <Section icon={Radio} title="What a match night actually is" kicker="The challenge">
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            Thirteen matches per round, two rounds a night, run by a staff of five in two languages, for players
            across nine time zones, on a platform with hard limits.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {challenge.map((c, i) => (
              <div key={c.title} className="flex gap-4 bg-[#0d122d] border border-white/[0.06] rounded-xl p-5">
                <span className="font-orbitron text-2xl font-bold text-purple-400 w-8 shrink-0">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{c.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Stack */}
        <Section icon={Layers} title="Four parts, one database" kicker="What we built">
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            None of it was bought. Each part was written in response to something that went wrong in an earlier
            edition, and every number below was counted from the live schema and the repositories.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {stack.map((s) => (
              <div key={s.name} className="bg-[#0d122d] border border-white/[0.06] rounded-xl overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${s.bar}`} />
                <div className="p-6">
                  <h3 className={`font-orbitron text-lg font-bold ${s.accent}`}>{s.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">{s.stat}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              ["244", "match channels created"],
              ["136", "team registrations taken"],
              ["1,014", "match events logged"],
              ["63", "incidents logged, each with a written record"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-white/[0.06] p-4">
                <p className="font-orbitron text-2xl font-bold text-white">{v}</p>
                <p className="text-xs text-gray-400 mt-1">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">Bot and incident counts as of the Cup 8 impact report; they grow every match night.</p>
        </Section>

        {/* Match night */}
        <Section icon={Workflow} title="A match night, in order" kicker="Operations">
          <ol className="relative border-l border-white/10 ml-3 space-y-6">
            {night.map((n) => (
              <li key={n.t} className="pl-6">
                <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <p className="font-orbitron text-xs text-cyan-400">{n.t}</p>
                <p className="font-semibold text-white mt-0.5">{n.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">{n.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-6">
              <p className="font-orbitron text-sm font-bold text-red-300 mb-3">Before: five places</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Discord, a spreadsheet, a bracket site, the website and a social post, each typed by hand. Five places,
                five chances to disagree.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
              <p className="font-orbitron text-sm font-bold text-emerald-300 mb-3">Now: one entry</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                A referee submits the result once. Standings, the website and analytics read the same row. The one
                manual step left, the external bracket site, is named as such rather than hidden.
              </p>
            </div>
          </div>
        </Section>

        {/* Integrity */}
        <Section icon={ShieldCheck} title="Automation removes typing, never judgement" kicker="Competitive integrity">
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            A published rulebook, applied in the order it is written: eligibility, roster locks between stages, draft
            rules, evidence for every result, five tiebreakers published before the first match, and sanctions recorded
            against a player identity so &ldquo;how many warnings&rdquo; is a query, not a scroll.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-6">
              <p className="font-orbitron text-sm font-bold text-cyan-400 mb-4">Handled by the system</p>
              <ul className="space-y-2.5">
                {automated.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-6">
              <p className="font-orbitron text-sm font-bold text-yellow-400 mb-4">Still decided by a person</p>
              <ul className="space-y-2.5">
                {human.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm text-gray-300">
                    <Users className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["3,044", "player statistic rows recorded"],
              ["96.4%", "attach to a registered player automatically"],
              ["111", "rows waiting for a person, by design"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-white/[0.06] p-4 text-center">
                <p className="font-orbitron text-2xl md:text-3xl font-bold text-white">{v}</p>
                <p className="text-xs text-gray-400 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Incidents */}
        <Section icon={Wrench} title="Where the system was tested" kicker="What went wrong, and what changed">
          <div className="space-y-4">
            {incidents.map((x) => (
              <div key={x.title} className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-6 grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-white">{x.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{x.when}</p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{x.problem}</p>
                <p className="text-sm text-emerald-300/90 leading-relaxed">{x.change}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-300 max-w-3xl leading-relaxed">
            One shape connects all three: something failed, was caught, and became a silent fallback. All three now
            fail loudly instead.
          </p>
        </Section>

        {/* Region */}
        <Section icon={Globe2} title="A MENA cup, not one country's" kicker="The region">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <Bars rows={countries} max={249} color="bg-gradient-to-r from-cyan-400 to-blue-500" />
              <p className="text-xs text-gray-500 mt-3">Player entries by declared nationality, top eight of 24</p>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                24 countries were declared across 431 of 436 player entries. 14 of the 15 MENA countries in the
                rulebook are represented.
              </p>
              <p>
                Everything players read is in Arabic and English: the website with full right-to-left support, the
                match channel briefs, the ready checks and the warnings, rendered from stored templates staff can edit
                without a code change.
              </p>
            </div>
          </div>
        </Section>

        {/* Community */}
        <Section icon={MessagesSquare} title="The community around the cup" kicker="Discord and creators">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              ["66.3%", "new member retention", "Discord benchmark: 20%"],
              ["718", "weekly visitors", "week to 10 October"],
              ["5,161", "messages in a week", "week to 10 October"],
              ["6,001", "voice minutes in a week", "week to 10 October"],
            ].map(([v, l, n]) => (
              <div key={l} className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-5">
                <p className="font-orbitron text-2xl font-bold text-cyan-400">{v}</p>
                <p className="text-sm text-white mt-1">{l}</p>
                <p className="text-xs text-gray-500 mt-1">{n}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Shot src="/case-studies/pc8/dc_members.webp" alt="Discord members chart" caption="Discord Server Insights: members, about 3,400 to 3,660 between August and October" />
            <div>
              <p className="text-gray-300 leading-relaxed mb-5">
                There was no official broadcast. Eight stream creators and four clip creators covered the cup in Arabic, with 70 clips and 23 VODs,
                for up to 200K stream views and 800K clip views across the season (owner reported). The Grand Final alone peaked at 580 viewers across three live streams: Fog 146, Eazzy 144, boosted 290.
              </p>
              <Bars rows={creators} max={160} color="bg-gradient-to-r from-yellow-400 to-orange-500" />
              <p className="text-xs text-gray-500 mt-3">Peak live viewers per creator, creator reported</p>
            </div>
          </div>
        </Section>

        {/* Proved */}
        <Section icon={Trophy} title="What Cup 8 proved" kicker="Outcomes">
          <div className="grid md:grid-cols-2 gap-4">
            {proved.map(([t, b], i) => (
              <div key={t} className="flex gap-4 bg-[#0d122d] border border-white/[0.06] rounded-xl p-5">
                <span className="font-orbitron text-lg font-bold text-cyan-400 w-8 shrink-0">0{i + 1}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Next */}
        <Section icon={ListChecks} title="What comes next" kicker="Before Cup 9">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Close the measurement gap", "Clip views, watch time and reach are reported by people today. They should be read from the platforms."],
              ["Finish the evidence loop", "Players already post end-of-game screenshots. Reading them into lines, with a person confirming, removes the last retyping."],
              ["Carry the record forward", "Standings, player stats and match history carry into the next edition, so a team's history starts with it."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-white/[0.06] p-5">
                <p className="font-semibold text-white mb-2">{t}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <Link
            href="/en/case-studies/pyramids-q-player-platform"
            className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/[0.05] p-6 hover:border-orange-400/60 transition-colors"
          >
            <div>
              <p className="font-orbitron text-[11px] tracking-[0.3em] uppercase text-orange-400 mb-2">Separate case study</p>
              <p className="font-semibold text-white">Pyramids Q Player Platform: profiles, inhouses and fantasy for the off-season</p>
              <p className="text-sm text-gray-400 mt-1">The side project built to grow the player base between cups.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-400 shrink-0" />
          </Link>
        </Section>

        {/* CTA */}
        <motion.section {...reveal} className="mt-24 text-center border-t border-white/[0.08] pt-16">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">Run your season on a system</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            The same stack is organisation-scoped: a new tournament or format is configuration, not a new codebase.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeonButton size="lg" href="https://pyramidsqueue.com">
              <ExternalLink className="w-4 h-4" /> Visit pyramidsqueue.com
            </NeonButton>
            <NeonButton variant="secondary" size="lg" href="/en/contact">
              Start a system like this
            </NeonButton>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
