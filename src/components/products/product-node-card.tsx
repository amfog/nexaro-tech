import type { ReactNode } from "react";

interface ProductNodeCardProps {
  code: string;
  name: string;
  desc: string;
  logo?: string;
  accent?: string;
  visual?: ReactNode;
  className?: string;
}

/** One product of the Nexaro family. 14 Nov 2026 revamp: logo, code in mono, name, one line. */
export default function ProductNodeCard({ code, name, desc, logo, visual, className }: ProductNodeCardProps) {
  return (
    <div className={`group flex items-center gap-4 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-line-2 ${className ?? ""}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/[0.03]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {visual ?? (logo ? <img src={logo} alt="" className="h-12 w-12 object-contain" /> : null)}
      </div>
      <div className="min-w-0">
        <span className="font-mono text-[11px] text-dim">{code}</span>
        <h4 className="text-[15px] font-medium text-ink">{name}</h4>
        <p className="mt-0.5 text-sm text-mute">{desc}</p>
      </div>
    </div>
  );
}
