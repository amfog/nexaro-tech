"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/glass-card";
import { Code, Smartphone, Calendar, Lightbulb, ArrowRight } from "lucide-react";
import NeonButton from "@/components/ui/neon-button";

interface ServicesPreviewProps { locale: string; t: ReturnType<typeof useTranslations>; }

const icons = { web: Code, mobile: Smartphone, events: Calendar, strategy: Lightbulb };

export default function ServicesPreview({ locale, t }: ServicesPreviewProps) {
  const services = ["web", "mobile", "events", "strategy"] as const;
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 neon-text-cyan">{t("services.title")}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((key, i) => {
            const Icon = icons[key];
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard glowColor={i % 2 === 0 ? "cyan" : "purple"} className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 neon-border">
                    <Icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="font-rajdhani text-xl font-semibold mb-2">{t(`services.items.${key}.title`)}</h3>
                  <p className="text-text-muted text-sm flex-grow mb-4">{t(`services.items.${key}.desc`)}</p>
                  <NeonButton variant="outline" size="sm" href={`/${locale}/services#${key}`} className="self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </NeonButton>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
