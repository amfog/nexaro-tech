"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { ExternalLink, ArrowLeft, Code } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Nexaro Life",
    category: "Product",
    tags: ["AI", "Productivity", "SaaS"],
    description: "Personal AI Operating System - A unified dashboard for tasks, projects, habits, ideas, and AI assistant integration.",
    features: [
      "8 integrated modules (Tasks, Projects, Habits, Ideas Vault, etc.)",
      "Context-aware AI with 26 tools & 5 adaptive modes",
      "Google Drive integration",
      "Gamified XP system & achievements",
      "Privacy-first architecture"
    ],
    tech: ["Flutter", "Supabase", "Groq", "Claude", "OpenAI"],
    liveUrl: "https://project-hf3at.vercel.app",
    githubUrl: null,
    logoSrc: "/nexaro-life.svg",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Vicious OS",
    category: "Product",
    tags: ["Esports", "Operations", "AI"],
    description: "The first esports-native operations system in MENA. Combines team management, player data, task workflows, AI assistance, and content planning into one platform.",
    features: [
      "12 live modules (Dashboard, Tasks, Approvals, AI)",
      "49+ players managed across 13 games",
      "Fog AI Assistant (Groq/Llama 3.3)",
      "Role-based security & approvals",
      "Social calendar & content planning",
      "Player portal & roster management"
    ],
    tech: ["Flutter Web", "Supabase", "Riverpod", "Groq AI"],
    liveUrl: "https://vicious-os.vercel.app",
    githubUrl: null,
    logoSrc: "/vicious-os.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 9,
    title: "Nexaro Teams OS",
    category: "Product",
    tags: ["Operations", "Teams", "AI", "SaaS"],
    description: "The core operational engine behind our specialized platforms. Nexaro Teams OS is a fully customized, ready-to-ship system for task management, team workflows, and AI-assisted operations.",
    features: [
      "Centralized Team Dashboard & Analytics",
      "Advanced Task Management (Kanban, List, Gantt)",
      "Multi-Stage Approval Workflows (Finance & Ops)",
      "Role-Based Security & Access Control",
      "AI Operations Assistant (Fog AI)",
      "Cross-Department Communication Hub"
    ],
    tech: ["Next.js", "Flutter", "Supabase", "AI"],
    liveUrl: "#",
    githubUrl: null,
    logoSrc: "/teams-os.svg",
    color: "from-slate-500 to-zinc-500",
  },
  {
    id: 3,
    title: "Nexaro CRM",
    category: "Product",
    tags: ["CRM", "AI", "Arabic/RTL"],
    description: "Smart CRM for modern businesses. Combines contact management, deal tracking, task management, and AI assistant with full Arabic RTL support.",
    features: [
      "Contacts & deal pipeline management",
      "Fog AI Assistant with CRM context",
      "Kanban board + list views",
      "Reports & analytics dashboard",
      "Arabic RTL support",
      "Web + Mobile (cross-platform)"
    ],
    tech: ["Flutter", "Supabase", "Groq AI", "Netlify"],
    liveUrl: "https://nexaro.app",
    githubUrl: null,
    logoSrc: "/nexaro-crm.svg",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "Rent OS",
    category: "Product",
    tags: ["PropTech", "RealEstate", "Finance", "AI"],
    description: "A comprehensive property management platform for landlords. Track rent payments, manage lease agreements, automate installment plans, and handle tenant communications in one unified dashboard.",
    features: [
      "Landlord Dashboard & Overview",
      "Tenant Management & Profiles",
      "Lease & Contract Tracking",
      "Automated Rent & Installment Reminders",
      "Payment History & Receipts",
      "AI-Powered Financial Insights"
    ],
    tech: ["Flutter", "Supabase", "AI Integration"],
    liveUrl: "#",
    githubUrl: null,
    logoSrc: "/rent-os.svg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Nexaro HR",
    category: "Product",
    tags: ["HR", "Payroll", "Employee Management", "AI"],
    description: "Comprehensive HR management system for employee tracking, payroll processing, attendance monitoring, and performance management with AI-powered insights.",
    features: [
      "Employee Database & Profiles",
      "Automated Payroll Processing",
      "Attendance & Leave Tracking",
      "Performance Reviews & KPIs",
      "Document Management",
      "AI-Powered HR Analytics"
    ],
    tech: ["Flutter", "Supabase", "AI Integration"],
    liveUrl: "#",
    githubUrl: null,
    logoSrc: "/nexaro-hr.svg",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Abdelrahman Mohamed Portfolio",
    category: "Personal Portfolio",
    tags: ["Operations", "Esports", "Systems"],
    description: "Personal portfolio showcasing 3+ years of building scalable workflow ecosystems, internal platforms, and esports infrastructures across MENA.",
    features: [
      "3,500+ participants managed",
      "170+ players on platform",
      "40% operational time reduction",
      "5 tournament editions delivered",
      "Founder of Pyramids Cup",
      "Systems architect & operations leader"
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://project-8qxfy.vercel.app",
    githubUrl: null,
    logoSrc: "/personal-portfolio.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 7,
    title: "Alahsa Festival Platform",
    category: "Event Tech",
    tags: ["Festival", "Ticketing", "Saudi Arabia"],
    description: "Comprehensive festival management platform with ticketing, scheduling, and live event experiences.",
    features: [
      "Online ticketing system",
      "Event scheduling & maps",
      "Vendor management",
      "Real-time updates",
      "Mobile-responsive design"
    ],
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://project-i9fer.vercel.app/ar",
    githubUrl: null,
    logoSrc: "/alahsa-festival.svg",
    color: "from-emerald-600 to-green-600",
  },
  {
    id: 8,
    title: "Nexaro.tech Website",
    category: "Website",
    tags: ["Company", "Portfolio", "Cyberpunk"],
    description: "Our own company website - Futuristic cyberpunk-inspired design showcasing Nexaro's services and products.",
    features: [
      "Next.js 16 + TypeScript",
      "Framer Motion animations",
      "Bilingual (EN/AR with RTL)",
      "Glassmorphism UI",
      "Responsive design"
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "next-intl"],
    liveUrl: "/",
    githubUrl: null,
    logoSrc: "/nexaro-website.svg",
    color: "from-purple-500 to-pink-600",
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-cyan-400">Work</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our products, platforms, and digital solutions built for startups, enterprises, and events.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">

                  {/* Left: Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs text-gray-400">#{tag}</span>
                        ))}
                      </div>
                    </div>

                    <h2 className="font-orbitron text-2xl font-bold mb-3">{project.title}</h2>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-2">Key Features:</h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.05)] text-xs text-gray-300 border border-[rgba(255,255,255,0.1)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <NeonButton size="sm" href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4" /> View Live
                      </NeonButton>
                      {project.githubUrl && (
                        <NeonButton variant="secondary" size="sm" href={project.githubUrl}>
                          <Code className="w-4 h-4" /> Source Code
                        </NeonButton>
                      )}
                    </div>
                  </div>

                  {/* Right: Logo Visual */}
                  <div className={`rounded-xl bg-gradient-to-br ${project.color} p-2 flex items-center justify-center min-h-[250px]`}>
                    <div className="w-full h-full bg-[#0A0E27] rounded-lg flex items-center justify-center p-4">
                      <img
                        src={project.logoSrc}
                        alt={`${project.title} Logo`}
                        className="w-full h-auto object-contain max-h-[180px]"
                      />
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="font-orbitron text-2xl font-bold mb-4">Have a project in mind?</h3>
          <p className="text-gray-300 mb-6">Let&apos;s build something amazing together.</p>
          <NeonButton size="lg" href="/contact">
            Start Your Project
          </NeonButton>
        </motion.div>

      </div>
    </main>
  );
}
