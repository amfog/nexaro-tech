const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase",
  "PostgreSQL", "Flutter", "Node.js", "discord.js", "Vercel",
];

/** The stack we build on, as a slow text marquee (CSS only, pauses on hover). */
export default function TechMarquee() {
  return (
    <div className="group relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, i) => (
          <span key={i} className="text-lg font-medium tracking-tight text-dim md:text-xl" aria-hidden={i >= technologies.length}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
