"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { ExternalLink, ArrowLeft, Code, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { showcaseItems } from "@/data/nexaro-showcase";

function sc(code: string) {
  const item = showcaseItems.find((i) => i.code === code);
  if (!item) throw new Error(`Missing showcase item for code: ${code}`);
  return item;
}

const projects = [
  // PYRAMIDS QUEUE IS FIRST DELIBERATELY.
  //
  // It is the only entry with a written case study, the only one with public
  // numbers behind it, and the largest thing here by a distance. A portfolio
  // is read from the top and mostly abandoned before the bottom, so the
  // strongest piece of evidence goes where it will actually be seen.
  {
    id: 10,
    title: sc("WS-003").name,
    category: "Website",
    tags: ["Esports", "Operations", "Multi-tenant"],
    description: "Four production systems on one Postgres database that run a 500-player MENA Wild Rift circuit end to end: a Discord bot, the staff platform, and the public site.",
    features: [
      "536 players, 195+ matches, 7 circuits on one deployment",
      "4 systems on one Postgres database: Discord bot, Teams OS, public site, database",
      "147K live views, 4,394 hours watched",
      "57 staff screens, 36 of them a dedicated esports module",
      "86,000 lines across bot, staff platform, public site, and marketing site"
    ],
    tech: ["Next.js", "TypeScript", "discord.js", "Flutter", "Supabase", "Postgres"],
    liveUrl: sc("WS-003").liveUrl ?? null,
    // The live preview is back. It went grey when the Pyramids Queue site
    // started sending X-Frame-Options: DENY, which blocked every embed
    // including ours. That site now sends a CSP frame-ancestors allowlist
    // naming this one instead, so the frame renders and every other origin is
    // still refused. Nothing to change here; it just works again.
    iframeUrl: sc("WS-003").liveUrl,
    caseStudyUrl: "/case-studies/pyramids-queue",
    githubUrl: null,
    logoSrc: sc("WS-003").icon,
    screenshots: [
      "/images/pyramids-queue-home.webp",
      "/images/pyramids-queue-register.webp"
    ],
    color: sc("WS-003").color,
    contactOnly: false,
  },
  {
    id: 1,
    title: sc("NX-001.L").name,
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
    liveUrl: null,
    githubUrl: null,
    logoSrc: sc("NX-001.L").icon,
    screenshots: [
      "/images/nexaro-life-dashboard.webp",
      "/images/nexaro-life-ai.webp",
      "/images/nexaro-life-modules.webp"
    ],
    color: sc("NX-001.L").color,
    contactOnly: true,
  },
  {
    id: 2,
    title: sc("NX-002.O").name,
    category: "Product",
    tags: ["Esports", "Operations", "AI"],
    description: "The first esports-native operations system in MENA - built by Vicious Esports, who also developed the Alahsa Festival Platform. Combines team management, player data, task workflows, AI assistance, and content planning into one platform.",
    features: [
      "12 live modules (Dashboard, Tasks, Approvals, AI)",
      "49+ players managed across 13 games",
      "Fog AI Assistant (Groq/Llama 3.3)",
      "Role-based security & approvals",
      "Social calendar & content planning",
      "Player portal & roster management"
    ],
    tech: ["Flutter Web", "Supabase", "Riverpod", "Groq AI"],
    liveUrl: null,
    githubUrl: null,
    logoSrc: sc("NX-002.O").icon,
    screenshots: [
      "/images/vicious-os-dashboard.webp",
      "/images/vicious-os-players.webp",
      "/images/vicious-os-ai.webp"
    ],
    color: sc("NX-002.O").color,
    contactOnly: true,
  },
  {
    id: 9,
    title: sc("NX-002.T").name,
    category: "Product",
    tags: ["Operations", "Teams", "AI", "SaaS"],
    description: "The core operational engine behind our specialized platforms. Nexaro Teams OS is a fully customized, ready-to-ship system for task management, team workflows, and AI-assisted operations.",
    features: [
      "Centralized Team Dashboard & Analytics",
      "Advanced Task Management (Kanban, List, Gantt)",
      "Multi-Stage Approval Workflows (Finance & Ops)",
      "Role-Based Security & Access Control",
      "AI Operations Assistant (Nexaro AI)",
      "Cross-Department Communication Hub"
    ],
    tech: ["Next.js", "Flutter", "Supabase", "AI"],
    liveUrl: sc("NX-002.T").liveUrl ?? null,
    iframeUrl: sc("NX-002.T").liveUrl,
    githubUrl: null,
    logoSrc: sc("NX-002.T").icon,
    screenshots: [
      "/images/teams-os-dashboard.webp",
      "/images/teams-os-workflows.webp",
      "/images/teams-os-security.webp"
    ],
    color: sc("NX-002.T").color,
    contactOnly: false,
  },
  {
    id: 6,
    title: sc("WS-001").name,
    category: "Website",
    tags: ["Operations", "Esports", "Systems"],
    description: "Personal portfolio showcasing 3+ years of building scalable workflow ecosystems, internal platforms, and esports infrastructures across MENA.",
    features: [
      "Bilingual EN/AR with RTL support",
      "Glassmorphism design system",
      "Framer Motion animations",
      "Mobile-first responsive layout",
      "SEO meta + Open Graph",
      "Vercel deployment"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: sc("WS-001").liveUrl ?? null,
    iframeUrl: sc("WS-001").liveUrl,
    githubUrl: null,
    logoSrc: sc("WS-001").icon,
    screenshots: [
      "/images/Abdelrahman-Mohamed-Portfolio.webp"
    ],
    color: sc("WS-001").color,
    contactOnly: false,
  },
  {
    id: 7,
    title: sc("WS-002").name,
    category: "Website",
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
    liveUrl: sc("WS-002").liveUrl ?? null,
    iframeUrl: sc("WS-002").liveUrl,
    githubUrl: null,
    logoSrc: sc("WS-002").icon,
    screenshots: [
      "/images/alahsa-festival-home.webp",
      "/images/alahsa-festival-tickets.webp",
      "/images/alahsa-festival-schedule.webp"
    ],
    color: sc("WS-002").color,
    contactOnly: false,
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
    iframeUrl: "https://project-jelc4.vercel.app",
    githubUrl: null,
    logoSrc: "/nexaro-website.svg",
    screenshots: [
      "/images/nexaro-website-home.webp",
      "/images/nexaro-website-services.webp",
      "/images/nexaro-website-portfolio.webp"
    ],
    color: "from-purple-500 to-pink-600",
    contactOnly: true,
  },
  {
    id: 11,
    title: sc("NX-008.M").name,
    category: "Product",
    tags: ["Dashboard", "Operations", "AI"],
    description: "Visual business command center for the Nexaro ecosystem.",
    features: [
      "Unified Nexaro ecosystem dashboard",
      "Real-time operations monitoring",
      "AI-powered insights and alerts",
      "Cross-product data aggregation",
      "Executive reporting & analytics"
    ],
    tech: ["Next.js", "Supabase", "AI Integration"],
    liveUrl: null,
    githubUrl: null,
    logoSrc: sc("NX-008.M").icon,
    screenshots: [
      "/images/nexaro-master-dashboard.webp",
      "/images/nexaro-master-alerts.webp"
    ],
    color: sc("NX-008.M").color,
    contactOnly: true,
  },
  {
    id: 14,
    title: sc("WS-004").name,
    category: "Website",
    tags: ["Esports", "Website", "Bilingual"],
    description: "Official website for The Vicious, a Saudi esports organization.",
    features: [
      "Team Roster & Player Profiles",
      "News & Updates Hub",
      "Multi-Sport Coverage",
      "Partnership Showcase",
      "Bilingual Support (EN/AR)"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: sc("WS-004").liveUrl ?? null,
    iframeUrl: sc("WS-004").liveUrl,
    githubUrl: null,
    logoSrc: sc("WS-004").icon,
    screenshots: [],
    color: sc("WS-004").color,
    contactOnly: false,
  },
  {
    id: 15,
    title: sc("NX-006.P").name,
    category: "Product",
    tags: ["IP", "Dashboard", "Operations"],
    description: "IP management and tracking platform with a dedicated operations dashboard.",
    features: [
      "Centralized IP asset tracking",
      "Real-time dashboard",
      "Status monitoring",
      "Team collaboration tools",
      "Operations reporting & analytics"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: null,
    iframeUrl: "https://nexaroip.vercel.app/en/how-it-works",
    githubUrl: null,
    logoSrc: sc("NX-006.P").icon,
    screenshots: [],
    color: sc("NX-006.P").color,
    contactOnly: true,
  },
  {
    id: 12,
    title: sc("WS-005").name,
    category: "Website",
    tags: ["Phygital", "Esports", "Saudi Arabia"],
    description: "National phygital competition platform across Saudi Arabia, hosting SEF Arena tournaments with Al-Ittihad Al-Saudi and deploying standardized frameworks across schools, universities, and corporates.",
    features: [
      "National Tournament Management",
      "Institution Registration System",
      "Player & Team Directory",
      "Event Calendar & Scheduling",
      "Hall of Fame & Leaderboards",
      "Bilingual Support (EN/AR)"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: sc("WS-005").liveUrl ?? null,
    iframeUrl: sc("WS-005").liveUrl,
    githubUrl: null,
    logoSrc: sc("WS-005").icon,
    screenshots: [
      "/images/phygital-ksa-hero.webp",
      "/images/phygital-ksa-calendar.webp",
      "/images/phygital-ksa-directory.webp"
    ],
    color: sc("WS-005").color,
    contactOnly: false,
  },
  // Products without screenshots (logo only) - Moved to bottom
  {
    id: 3,
    title: sc("NX-003.C").name,
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
    liveUrl: "https://precious-moxie-67ff79.netlify.app",
    githubUrl: null,
    logoSrc: sc("NX-003.C").icon,
    color: sc("NX-003.C").color,
    contactOnly: false,
  },
  {
    id: 4,
    title: sc("NX-004.R").name,
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
    liveUrl: "https://project-buner.vercel.app",
    githubUrl: null,
    logoSrc: sc("NX-004.R").icon,
    color: sc("NX-004.R").color,
    contactOnly: false,
  },
  {
    id: 5,
    title: sc("NX-005.H").name,
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
    liveUrl: null,
    githubUrl: null,
    logoSrc: sc("NX-005.H").icon,
    color: sc("NX-005.H").color,
    contactOnly: true,
  },
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
            Our <span className="text-cyan-400">Products</span>
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
              className="group"
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
                      {project.contactOnly ? (
                        <a href="/en/contact" className="relative font-semibold rounded-xl transition-all duration-300 overflow-hidden cursor-pointer bg-gradient-to-r from-neon-cyan to-neon-purple text-space hover:opacity-90 px-4 py-2 text-sm shadow-[0_0_15px_rgba(0,245,255,0.5)] hover:shadow-[0_0_25px_rgba(0,245,255,0.7)] inline-flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>Reach Out to Learn More</span>
                        </a>
                      ) : (
                        <NeonButton size="sm" href={project.liveUrl ?? undefined}>
                          <ExternalLink className="w-4 h-4" /> View Live
                        </NeonButton>
                      )}
                      {project.githubUrl && (
                        <NeonButton variant="secondary" size="sm" href={project.githubUrl}>
                          <Code className="w-4 h-4" /> Source Code
                        </NeonButton>
                      )}
                      {project.caseStudyUrl && (
                        <NeonButton variant="secondary" size="sm" href={project.caseStudyUrl}>
                          <FileText className="w-4 h-4" /> Read Case Study
                        </NeonButton>
                      )}
                    </div>
                  </div>

                  {/* Right: Visual Display */}
                  <div className={`rounded-xl bg-gradient-to-br ${project.color} p-2 flex items-center justify-center min-h-[250px]`}>
                    <div className="w-full h-full bg-[#0A0E27] rounded-lg overflow-hidden relative" style={{minHeight: '220px'}}>
                      
                      {/* Iframe Preview (for live sites) */}
                      {project.iframeUrl ? (
                        <div style={{position:'relative', overflow:'hidden', width:'100%', height:'100%'}}>
                          <iframe
                            src={project.iframeUrl}
                            style={{width:'200%', height:'200%', border:'none', transform:'scale(0.5)', transformOrigin:'top left', pointerEvents:'none'}}
                            sandbox="allow-scripts allow-same-origin"
                            loading="lazy"
                            title={project.title}
                          />
                        </div>
                      ) : project.screenshots?.length ? (
                        /* Auto-Swapping: Logo ↔ Screenshots on Hover */
                        <div className="flex items-center justify-center h-full p-4 relative">
                          {/* Logo (default) */}
                          <img
                            src={project.logoSrc}
                            alt={`${project.title} Logo`}
                            className="w-full h-auto object-contain max-h-[180px] transition-opacity duration-500 group-hover:opacity-0"
                          />
                          
                          {/* Screenshot (shows on hover) */}
                          <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <img
                              src={project.screenshots[0]}
                              alt={`${project.title} Screenshot`}
                              className="w-full h-auto object-contain max-h-[180px] rounded-lg border border-[rgba(255,255,255,0.1)]"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Logo Only (no screenshots) */
                        <div className="flex items-center justify-center h-full p-4">
                          <img
                            src={project.logoSrc}
                            alt={`${project.title} Logo`}
                            className="w-full h-auto object-contain max-h-[180px]"
                          />
                        </div>
                      )}
                      
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
