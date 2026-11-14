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

export default function ProductNodeCard({ code, name, desc, logo, accent, visual, className }: ProductNodeCardProps) {
  return (
    <div
      className={`bg-[#0d122d] rounded-xl p-4 text-center transition-colors group flex flex-col items-center justify-center ${className ?? ""}`}
      style={{ border: `1px solid ${accent ? accent + "33" : "rgba(255,255,255,0.05)"}` }}
    >
      <div className="mb-3 flex justify-center w-full">
        {visual ?? <img src={logo} alt={name} className="w-full h-auto max-h-[80px] object-contain" />}
      </div>
      <span className="text-xs font-mono block mb-1" style={{ color: accent ? accent + "cc" : "#6b7280" }}>
        {code}
      </span>
      <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{name}</h4>
      <p className="text-xs text-gray-400 mt-1">{desc}</p>
    </div>
  );
}
