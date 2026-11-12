"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import { ArrowRight, CheckCircle, Bot, Building2, Globe, Shield, Trophy } from "lucide-react";
import Link from "next/link";

// 12 Nov 2026 audit: the four services we sell (same as the partner deck), plus consulting.
// Highlights are facts we can show; no figures we cannot back up.
const services = [
  {
    icon: Building2,
    title: "Business Systems (ERP)",
    desc: "One system for people, projects, clients, money and stock, built around how your company already works.",
    features: [
      "HR: people, departments, leave, timesheets",
      "Projects and tasks with hours per person",
      "Clients, quotes, invoices with VAT, payments",
      "Stock and orders, reports, Arabic and English",
    ],
    highlight: "Modular: switch on only what you need, three looks to choose from",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Globe,
    title: "Websites",
    desc: "Company websites in Arabic and English that load fast on phones and send every enquiry to your inbox.",
    features: [
      "Six steps, you approve each one",
      "Two rounds of changes on the design and two on the build",
      "Google basics, legal page, contact form",
      "30 days of fixes after launch, optional monthly care",
    ],
    highlight: "Domain, hosting account and content in your name",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Esports Systems",
    desc: "The tournament and community stack that ran Pyramids Cup 8, for organisers and gaming communities.",
    features: [
      "Tournament bot: registration, check-in, brackets, results",
      "Inhouse bot with ratings, ladder and weekly posts",
      "Community website with player profiles",
      "Teams OS staff app: tasks, roles, incidents",
    ],
    highlight: "Pyramids Cup 8: 335 matches, 364 players, run by a staff of five",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Bot,
    title: "Apps, Automation and AI",
    desc: "Remove the manual steps between your tools, and put an assistant inside the systems your team uses.",
    features: [
      "Shop and delivery operations (Mandoob OS)",
      "Approvals, reminders and scheduled reports",
      "Imports from Excel and Google Sheets",
      "AI assistants that prepare tasks, replies and reports",
    ],
    highlight: "Built on the same stack as our own daily tools",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Shield,
    title: "Systems Consulting",
    desc: "A clear map of how your operations run today and what to automate first, before you spend on software.",
    features: [
      "Workflow audits",
      "Tool stack recommendations",
      "Team onboarding playbooks",
      "KPI framework design",
    ],
    highlight: "Google PM Certified · CAPM in progress",
    color: "from-sky-400 to-indigo-500",
  },
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
            Four things we build, each priced once after a short discovery call. The monthly fee covers monitoring; new features are always priced first.
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
          <h2 className="text-2xl font-bold mb-4">Not sure which one you need?</h2>
          <p className="text-gray-400 mb-8">Tell us what slows your team down. We will say what we would build first, and what it would cost.</p>
          <Link href="/en/contact" className="inline-block px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors">
            Get in touch
          </Link>
        </div>

      </div>
    </main>
  );
}