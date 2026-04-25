export default function TagPill({ tag }: { tag: string }) {
  return (
    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
      {tag}
    </span>
  );
}
