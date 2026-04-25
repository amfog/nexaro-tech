export default function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 bg-[rgba(0,245,255,0.05)] border border-[rgba(0,245,255,0.15)] rounded text-xs font-mono text-cyan-300">
      {tech}
    </span>
  );
}
