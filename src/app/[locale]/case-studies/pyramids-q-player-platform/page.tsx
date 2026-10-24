"use client";

/*
  PYRAMIDS Q PLAYER PLATFORM (21 Oct 2026)

  The side project, kept apart from the Pyramids Cup 8 case study on purpose:
  profiles, inhouses and fantasy are built for the off-season, and their
  numbers are never added to the cup's. Inhouse prizes come from TUN and DUSK,
  who are partners of the inhouses only.
*/

import { motion } from "framer-motion";
import Link from "next/link";
import NeonButton from "@/components/ui/neon-button";
import { ArrowLeft, ArrowRight, ExternalLink, IdCard, Swords, Sparkles, Target, CheckCircle2 } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const goals = [
  ["Grow the player base", "A reason to join and stay in the community when no cup is running."],
  ["More teams", "Players meet, play together and find teammates, so new teams form before the next registration."],
  ["More competitive players", "A rating and a record players can show captains and scouts, built game by game."],
];

const profileFeatures = [
  "Submitted in Discord with one command, checked by staff before it goes live",
  "Peak rank, Legendary rank and seasons reached, from Master to Sovereign",
  "Verified Pyramids Cup history and placements, back to the first editions",
  "Current cup stats and the inhouse rating side by side",
  "A profile score with its parts shown, best player per role, and compare",
  "Download as a card, a story or a post, or share a link",
  "Create your team: up to five cards and a team score in one image",
];

const inhouseFeatures = [
  "Join a queue in Discord; at ten players a five-minute ready check starts",
  "Teams balanced by rating and by each player's chosen lanes only",
  "A private lobby thread and team voice channels per game",
  "Both sides report the winner; every player enters their line (champion, K/D/A, MVP)",
  "Staff check the result and lines against the scoreboard before any rating moves",
  "Missed ready checks are penalised: out for 3, 5, then 10 lobbies, then the season",
  "A High-Level queue for the top teams and invited players",
  "Report a player and rate the night, both straight to staff",
];

function Shot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure>
      <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/10 p-1.5 rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl border border-white/10" />
      </div>
      {caption && <figcaption className="text-xs text-gray-500 mt-2 text-center">{caption}</figcaption>}
    </figure>
  );
}

function List({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((a) => (
        <li key={a} className="flex gap-2.5 text-sm text-gray-300 leading-relaxed">
          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${color}`} />
          {a}
        </li>
      ))}
    </ul>
  );
}

export default function PlayerPlatformCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/en/case-studies/pyramids-cup-8" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Pyramids Cup 8 case study
          </Link>
          <p className="font-orbitron text-xs md:text-sm tracking-[0.3em] uppercase text-orange-400 mb-5">
            Case study · Side project · Pyramids Q Player Platform
          </p>
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            A cup lasts six weeks.{" "}
            <span className="text-orange-400">This keeps players playing for the rest of the year.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
            Alongside Pyramids Cup 8 we started building an off-season platform for the same community: player
            profiles, Pyramids Q Inhouses and Pyramids Q Fantasy. It is separate from the cup and its numbers are never
            added to the cup&apos;s.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Player profiles", "Inhouse matchmaking", "Ratings", "Discord bot", "Next.js", "Supabase"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">{t}</span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/10 p-1.5">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0E27] aspect-[16/9]">
              <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
              <iframe
                src="https://pyramidsqueue.com/profiles"
                title="Player profiles on pyramidsqueue.com, live"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                style={{ width: "200%", height: "200%", border: "none", transform: "scale(0.5)", transformOrigin: "top left", pointerEvents: "none" }}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">pyramidsqueue.com/profiles, live: top five, best per role, team cards</p>
        </motion.div>

        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-7 h-7 text-orange-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Why build it</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {goals.map(([t, b]) => (
              <div key={t} className="bg-[#0d122d] border border-white/[0.06] rounded-xl p-5">
                <p className="font-semibold text-white mb-2">{t}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <IdCard className="w-7 h-7 text-cyan-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Player profiles</h2>
          </div>
          <p className="text-xs uppercase tracking-wider text-cyan-400/80 mb-6">Live · 72 profiles and growing</p>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <List items={profileFeatures} color="text-cyan-400" />
            <div className="grid grid-cols-2 gap-4">
              <Shot src="/case-studies/pc8/card_basil.webp" alt="A downloadable player card" />
              <Shot src="/case-studies/pc8/card_dignity.webp" alt="A downloadable player card" />
            </div>
          </div>
          <div className="mt-8">
            <Shot src="/case-studies/pc8/profile_full.webp" alt="A full player profile" caption="A full profile: score, seasons reached, badges and rank positions" />
          </div>
        </motion.section>

        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <Swords className="w-7 h-7 text-orange-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Pyramids Q Inhouses</h2>
          </div>
          <p className="text-xs uppercase tracking-wider text-orange-400/80 mb-6">Live · Season 1 · prizes by TUN and DUSK</p>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-300 leading-relaxed mb-5">
                Balanced 5v5 custom games, run by our community bot in Discord. Ratings only change after staff approve a
                game, so the leaderboard can be trusted, and the results feed every player&apos;s profile.
              </p>
              <List items={inhouseFeatures} color="text-orange-400" />
            </div>
            <div className="space-y-4">
              <Shot src="/case-studies/pc8/inhouse_open.webp" alt="Inhouse session open banner" />
              <Shot src="/case-studies/pc8/inhouse_results.webp" alt="Inhouse game results banner" />
              <Shot src="/case-studies/pc8/inhouse_ended.webp" alt="Inhouse session ended banner" caption="Session open, game results and session ended posts in Discord" />
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-7 h-7 text-purple-400" />
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">Pyramids Q Fantasy</h2>
          </div>
          <p className="text-xs uppercase tracking-wider text-purple-400/80 mb-6">In development</p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Pick a team from cup and inhouse players and score on their real, staff-approved results. A fantasy card
            mock-up exists for one player today; the game opens once a full season of inhouse data is in.
          </p>
        </motion.section>

        <motion.section {...reveal} className="mt-20">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Built on the same system as the cup</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The platform runs on its own bot, PQ Community, so a change to inhouses never restarts the tournament bot.
            It shares the database and the website with the cup, so a player&apos;s cup history and inhouse rating sit
            on one profile, while the two sets of numbers stay apart.
          </p>
          <Link
            href="/en/case-studies/pyramids-cup-8"
            className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.05] p-6 hover:border-cyan-400/60 transition-colors"
          >
            <div>
              <p className="font-orbitron text-[11px] tracking-[0.3em] uppercase text-cyan-400 mb-2">Main case study</p>
              <p className="font-semibold text-white">Pyramids Cup 8: six weeks, four stages, 335 matches</p>
            </div>
            <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0" />
          </Link>
        </motion.section>

        <motion.section {...reveal} className="mt-24 text-center border-t border-white/[0.08] pt-16">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">Keep your community playing</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeonButton size="lg" href="https://pyramidsqueue.com/profiles">
              <ExternalLink className="w-4 h-4" /> See the profiles
            </NeonButton>
            <NeonButton variant="secondary" size="lg" href="/en/contact">
              Talk to us
            </NeonButton>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
