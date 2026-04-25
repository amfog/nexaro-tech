"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { ExternalLink, ArrowLeft, Code } from "lucide-react";
import Link from "next/link";

// Alahsa Festival Pulse Logo Component
function PulseLogo({ size = 140 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="plTrunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4D3E"/>
          <stop offset="100%" stopColor="#0C2218"/>
        </linearGradient>
        <filter id="plGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="plShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18"/>
        </filter>
      </defs>

      <rect x="46" y="52" width="8" height="24" rx="2" fill="url(#plTrunk)" filter="url(#plShadow)"/>

      <motion.path
        d="M50 52 C49 43 48 33 50 22 C52 33 51 43 50 52"
        fill="#1B4D3E"
        animate={{ scaleY: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.path
        d="M50 49 C43 41 34 32 25 27 C34 35 43 43 50 49"
        fill="#1B4D3E"
        opacity={0.9}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />

      <motion.path
        d="M50 51 C40 48 28 46 18 48 C28 47 40 50 50 51"
        fill="#1B4D3E"
        opacity={0.75}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <motion.path
        d="M50 49 C57 41 66 32 75 27 C66 35 57 43 50 49"
        fill="#1B4D3E"
        opacity={0.9}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <motion.path
        d="M50 51 C60 48 72 46 82 48 C72 47 60 50 50 51"
        fill="#1B4D3E"
        opacity={0.75}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />

      <motion.circle
        cx="38" cy="36" r="2.5"
        fill="#D4AF37"
        filter="url(#plGlow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="62" cy="36" r="2.5"
        fill="#D4AF37"
        filter="url(#plGlow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <motion.path
        d="M8 50 L24 50 L30 37 L40 63 L50 50 L54 50 L60 27 L66 73 L72 50 L92 50"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.6, 1], repeatDelay: 0.8 }}
      />
    </motion.svg>
  );
}

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
    color: "from-cyan-500 to-blue-600"
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
    color: "from-purple-500 to-pink-500"
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
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    title: "Rent OS",
    category: "Product",
    tags: ["HR", "Finance", "AI"],
    description: "Streamline employee financial management with automated advance tracking, salary calculations, and AI-powered insights for HR teams.",
    features: [
      "Employee advance tracking",
      "Automated salary calculations",
      "Payment history & reports",
      "AI-powered financial insights",
      "Multi-currency support",
      "Integration with payroll systems"
    ],
    tech: ["Flutter", "Supabase", "AI Integration"],
    liveUrl: "#",
    githubUrl: null,
    logoSrc: "/rent-os.svg",
    color: "from-emerald-500 to-teal-500"
  },
   {
    id: 5,
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
    logoSrc: null,
    color: "from-blue-500 to-cyan-500",
    // Use a professional avatar/ops icon instead of palm tree
    customLogo: (
      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
        <span className="text-6xl font-bold text-white">AM</span>
      </div>
    )
  },
  {
    id: 6,
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
    logoSrc: null,
    color: "from-emerald-600 to-green-600",
    // ONLY Alahsa gets the PulseLogo
    customLogo: <PulseLogo size={140} />
  },
  {
    id: 7,
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
    logoSrc: "/nexaro-node-lockup-dark.svg",
    color: "from-purple-500 to-pink-600"
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
                      {project.customLogo ? (
                        project.customLogo
                      ) : project.logoSrc ? (
                        <img 
                          src={project.logoSrc} 
                          alt={`${project.title} Logo`} 
                          className="w-full h-auto object-contain max-h-[200px]"
                        />
                      ) : (
                        <div className="text-6xl font-bold text-white/20">
                          {project.id.toString().padStart(2, '0')}
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
          <p className="text-gray-300 mb-6">Let's build something amazing together.</p>
          <NeonButton size="lg" href="/contact">
            Start Your Project
          </NeonButton>
        </motion.div>

      </div>
    </main>
  );
}