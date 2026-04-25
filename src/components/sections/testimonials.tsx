"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/glass-card";
import { Star } from "lucide-react";

interface TestimonialsProps { locale: string; t: ReturnType<typeof useTranslations>; }

export default function Testimonials({ locale, t }: TestimonialsProps) {
  return (
    <section className="py-24 relative bg-space-light/20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 neon-text-cyan">{t("testimonials.title")}</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <GlassCard glowColor="purple" className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
            <blockquote className="text-lg text-text-secondary mb-6 italic">"{t("testimonials.quote")}"</blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple" />
              <div className="text-left">
                <p className="font-semibold">Ahmed Al-Rashid</p>
                <p className="text-sm text-text-muted">CTO, Future Events KSA</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
