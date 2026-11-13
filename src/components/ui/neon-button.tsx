"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Site button (name kept so every page keeps working). 14 Nov 2026 revamp: no neon glow and no
 * gradient. Primary is a solid white button, secondary a hairline outline, outline uses the brand
 * colour. The old primary was a gradient made of colours Tailwind v4 never loaded, so it rendered
 * as text with no background.
 */
interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  glow?: boolean;
}

export default function NeonButton({ children, href, variant = "primary", size = "md", onClick, className }: NeonButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const variants = {
    primary: "bg-white text-black hover:bg-white/85",
    secondary: "border border-line-2 text-ink hover:border-white/40 hover:bg-white/[0.04]",
    outline: "border border-brand/50 text-brand hover:bg-brand/10",
  };
  const sizes = { sm: "h-9 px-4 text-sm", md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-[15px]" };
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    ) : (
      <Link href={href} className={cls}>{children}</Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
