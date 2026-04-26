"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import { ArrowRight, CheckCircle, Bot, Workflow, Database, Shield, Zap, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    desc: "Eliminate repetitive tasks with intelligent workflows powered by N8N, AI APIs, and custom integrations.",
    features: [
      "Discord → Google Sheets sync",
      "AI support bots (Qwen, Claude)",
      "Auto-reporting dashboards",
      "Rule-based decision engines"
    ],
    highlight: "PC7 Automation Stack: Saves 3-5 hrs per tournament day",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Workflow,
    title: "Operations Platforms",
    desc: "Build internal tools that unify your team's workflows, data, and communication in one place.",
    features: [
      "Multi-tenant player management",
      "KPI dashboards & OKR tracking",
      "Task ownership & access control",
      "Cross-department coordination"
    ],
    highlight: "Vicious OS: 170+ players, 4 departments, ~80% manual work eliminated",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Database,
    title: "Esports Infrastructure",
    desc: "End-to-end tournament systems: registration, scheduling, broadcasting, and community management.",
    features: [
      "Scalable registration pipelines",
      "Live bracket management",
      "Broadcast tool integrations",
      "Community engagement systems"
    ],
    highlight: "Pyramids Cup: 5 editions, 3,500+ participants, zero playbook",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Systems Consulting",
    desc: "Strategic guidance to design, document, and scale your operational infrastructure.",
    features: [
      "Workflow audits & optimization",
      "Tool stack recommendations",
      "Team onboarding playbooks",
      "KPI framework design"
    ],
    highlight: "Google PM Certified · CAPM in progress",
    color: "from-emerald-400 to-teal-500"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We don't just build tools — we build systems that eliminate operational chaos and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <GlassCard key={index} className="relative overflow-hidden group flex flex-col">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`} />

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">{service.title}</h3>
                  <p className="text-gray-400 mt-1">{service.desc}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.highlight && (
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold mb-4">
                  ★ {service.highlight}
                </div>
              )}

              <Link href="/en/contact" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium group-hover:underline mt-auto pt-4">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-[rgba(255,255,255,0.05)]">
          <h2 className="text-2xl font-bold mb-4">Need a custom system?</h2>
          <p className="text-gray-400 mb-8">Let's design an automation strategy that scales with your team.</p>
          <Link href="/en/contact" className="inline-block px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors">
            Get in touch
          </Link>
        </div>

      </div>
    </main>
  );
}