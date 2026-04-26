"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NeonButton from "@/components/ui/neon-button";
import GlassCard from "@/components/ui/glass-card";
import ParticlesBg from "@/components/ui/particles-bg";
import TechMarquee from "@/components/ui/tech-marquee";
import { ArrowRight, Code, Smartphone, Rocket, Users, Bot, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#0A0E27] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none z-0" />
      <ParticlesBg />

      <div className="relative z-10">
        
        {/* 1. HERO */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] mb-8 text-sm text-cyan-400"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Now accepting Q2 2026 projects
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              We Build Digital Products<br />
              <span className="text-cyan-400">That Matter</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              From concept to launch — websites, apps, and platforms that scale with cutting-edge technology and stunning design.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/en/contact">
                <NeonButton size="lg">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </NeonButton>
              </Link>
              <Link href="/en/portfolio">
                <NeonButton variant="secondary" size="lg">
                  View Our Work
                </NeonButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. SERVICES */}
        <section className="py-24 px-4 bg-[#0d122d]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-cyan-400">What We Do</h2>
              <p className="text-gray-300">End-to-end digital solutions powered by modern technology</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Code, title: "Web Development", desc: "Custom websites, e-commerce, and web applications." },
                { icon: Smartphone, title: "Mobile Apps", desc: "Native & cross-platform iOS/Android apps." },
                { icon: Rocket, title: "Event Tech", desc: "Festival platforms, ticketing, and live apps." },
                { icon: Bot, title: "AI & Automation", desc: "Intelligent workflows, AI assistants, and process automation." },
                { icon: Users, title: "Digital Strategy", desc: "UX/UI design, brand identity, and consulting." },
              ].map((service, i) => (
                <GlassCard key={i}>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,245,255,0.1)] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-rajdhani text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TECH MARQUEE */}
        <section className="py-12 bg-[#080b1a]">
          <p className="text-center text-gray-500 font-rajdhani text-sm tracking-widest uppercase mb-6">Powered By</p>
          <TechMarquee />
        </section>

        {/* 4. NODE FAMILY / ECOSYSTEM */}
        <section className="py-24 px-4 bg-[#080b1a]">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4 text-white">The Nexaro <span className="text-cyan-400">Node Family</span></h2>
            <p className="text-gray-400">Our unified ecosystem of digital products.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            {/* MASTER card — full width */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <img src="/nexaro-master.svg" alt="Nexaro Platform" className="h-32 w-auto" />
              <div className="text-center sm:text-left">
                <span className="font-orbitron text-xs font-bold tracking-widest text-cyan-400 block mb-1">MASTER</span>
                <p className="text-white font-semibold text-xl">Nexaro Platform</p>
                <p className="text-gray-400 text-sm mt-1">The unified ecosystem core</p>
              </div>
            </div>

            {/* Product grid — 2 cols mobile, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { code: "NX-001.L", name: "Nexaro Life", desc: "Personal AI OS", logo: "/nexaro-life.svg" },
                { code: "NX-002.O", name: "Vicious OS", desc: "Esports Operations", logo: "/vicious-os.svg" },
                { code: "NX-003.C", name: "Nexaro CRM", desc: "Smart Business CRM", logo: "/nexaro-crm.svg" },
                { code: "NX-004.R", name: "Rent OS", desc: "Property & Rent Management", logo: "/rent-os.svg" },
                { code: "NX-005.H", name: "Nexaro HR", desc: "HR & Payroll Management", logo: "/nexaro-hr.svg" },
                { code: "NX-002.T", name: "Teams OS", desc: "Core Operations Platform", logo: "/teams-os.svg" },
              ].map((node, i) => (
                <div key={i} className="bg-[#0d122d] border border-[rgba(255,255,255,0.05)] rounded-xl p-4 text-center hover:border-cyan-400/30 transition-colors group">
                  <div className="mb-3 flex justify-center">
                    <img src={node.logo} alt={node.name} className="w-full h-auto max-h-[80px] object-contain" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 block mb-1">{node.code}</span>
                  <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{node.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl font-bold mb-12 text-purple-400">Client Love</h2>
            <GlassCard className="text-center">
              <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                "Nexaro transformed our vision into a scalable platform that exceeded expectations."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Ahmed Al-Rashid</p>
                  <p className="text-xs text-gray-500">CTO, Future Events KSA</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-24 px-4 pb-40">
          <div className="max-w-4xl mx-auto text-center bg-[rgba(255,255,255,0.02)] p-12 rounded-3xl">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 mb-8">Let's discuss how we can bring your digital vision to life.</p>
            <Link href="/en/contact">
              <NeonButton size="lg">Start Your Project</NeonButton>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}