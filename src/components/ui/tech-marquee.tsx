"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", 
  "Framer Motion", "Node.js", "Vercel", "PostgreSQL", "Redis"
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div 
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <span key={i} className="text-xl md:text-2xl font-orbitron text-text-muted/50 hover:text-neon-cyan transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-space to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-space to-transparent pointer-events-none" />
    </div>
  );
}
