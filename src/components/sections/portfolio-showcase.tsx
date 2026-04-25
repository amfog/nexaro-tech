"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioShowcaseProps { locale: string; t: ReturnType<typeof useTranslations>; }

const projects = [
  { id: 1, title: "Alahsa Festival Platform", category: "Events", image: "/images/alahsa.jpg", tech: ["Next.js", "Supabase"], demo: "#", github: "#" },
  { id: 2, title: "Enterprise Dashboard", category: "Enterprise", image: "/images/dashboard.jpg", tech: ["React", "TypeScript"], demo: "#", github: null },
  { id: 3, title: "Mobile Event App", category: "Mobile", image: "/images/mobile-app.jpg", tech: ["React Native", "Firebase"], demo: "#", github: "#" },
];

export default function PortfolioShowcase({ locale, t }: PortfolioShowcaseProps) {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 neon-text-purple">{t("portfolio.title")}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="group" glowColor="gold">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-text-muted/40 font-orbitron">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <NeonButton variant="outline" size="sm" href={project.demo}><ExternalLink className="w-4 h-4" /> Demo</NeonButton>
                    {project.github && <NeonButton variant="secondary" size="sm" href={project.github}><Github className="w-4 h-4" /> Code</NeonButton>}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-rajdhani text-lg font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan">{project.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-text-muted bg-white/5 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <NeonButton href={`/${locale}/portfolio`} variant="secondary">View All Projects</NeonButton>
        </div>
      </div>
    </section>
  );
}
