"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  glow?: boolean;
}

export default function NeonButton({
  children, href, variant = "primary", size = "md", onClick, className, glow = true,
}: NeonButtonProps) {
  const baseStyles = "relative font-semibold rounded-xl transition-all duration-300 overflow-hidden cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-cyan to-neon-purple text-space hover:opacity-90",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    outline: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const glowEffect = glow && variant === "primary" ? "shadow-[0_0_15px_rgba(0,245,255,0.5)] hover:shadow-[0_0_25px_rgba(0,245,255,0.7)]" : "";

  const Content = (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], glowEffect, className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return <Link href={href} className="block">{Content}</Link>;
  }

  return Content;
}
