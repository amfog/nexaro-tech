"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import NeonButton from "@/components/ui/neon-button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps { locale: string; t: ReturnType<typeof useTranslations>; }

export default function Hero({ locale, t }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute top-20 right-10 w-32 h-32 border-2 border-neon-cyan/30 rounded-lg rotate-12 animate-float hidden lg:block" />
      <motion.div style={{ y: useTransform(scrollY, [0, 500], [0, -100]), opacity }} className="absolute bottom-40 left-10 w-24 h-24 border-2 border-neon-purple/30 rounded-full animate-float delay-500 hidden lg:block" />
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-sm text-text-secondary font-medium">{t("hero.badge")}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-text-primary">{t("hero.title.line1")}</span>
          <span className="block neon-text-cyan">{t("hero.title.line2")}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton href={`/${locale}/portfolio`} size="lg" className="min-w-[200px]">{t("hero.cta.viewWork")}<ArrowRight className="w-5 h-5" /></NeonButton>
          <NeonButton href={`/${locale}/contact`} variant="secondary" size="lg" className="min-w-[200px]"><Play className="w-5 h-5" />{t("hero.cta.startProject")}</NeonButton>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div className="w-1.5 h-3 bg-neon-cyan rounded-full" animate={{ opacity: [1, 0.5, 1], y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
