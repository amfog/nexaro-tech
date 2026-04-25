"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, ...props }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "bg-[rgba(255,255,255,0.02)]", 
        "border border-[rgba(255,255,255,0.05)]",
        "hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
