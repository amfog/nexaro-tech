"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import NeonButton from "@/components/ui/neon-button";

interface CTASectionProps { locale: string; t: ReturnType<typeof useTranslations>; }

export default function CTASection({ locale, t }: CTASectionProps) {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto glass-card p-12 rounded-3xl neon-border">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-text-secondary mb-8">{t("cta.subtitle")}</p>
          <NeonButton href={`/${locale}/contact`} size="lg" glow>{t("cta.button")}</NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
