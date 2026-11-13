"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Card (name kept so every page keeps working). 14 Nov 2026 revamp: hairline border, no glow. */
export default function GlassCard({ children, className, glowColor: _glow, ...props }: HTMLAttributes<HTMLDivElement> & { glowColor?: string }) {
  void _glow; // old prop, no glow any more
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-line-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
