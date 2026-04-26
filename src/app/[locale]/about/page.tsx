"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Award, Zap, Users, Trophy, Target, Eye, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Participants Managed", value: "3,500+", icon: Users, subtitle: "" },
    { label: "Employees Managed", value: "170+", icon: Trophy, subtitle: "" },
    { label: "Time Reduction", value: "40%", icon: Zap, subtitle: "" },
    { label: "Tournament Editions", value: "7", icon: Award, subtitle: "Pyramids Cup · League of Legends: Wild Rift" },
  ];

  const skills = [
    "Product Operations", "Workflow Automation", "N8N", "AI-Assisted Ops",
    "Esports Infrastructure", "KPI Dashboards", "Google Workspace", "Stakeholder Management"
  ];

  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Nexaro</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We build systems that help teams scale faster.
          </p>
        </motion.div>

        {/* TEAM SECTION */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-cyan-400" />
              <h2 className="font-orbitron text-3xl font-bold">The Team</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-[#0d122d] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-black">
                    AM
                  </div>
                  <h3 className="font-bold text-white text-xl">Abdelrahman Mohamed</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-4">Founder & Systems Architect</p>
                  
                  <div className="flex flex-col gap-3 text-sm">
                    <a href="mailto:Abdo.fog@gmail.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" /> Abdo.fog@gmail.com
                    </a>
                    <a href="tel:+201507144461" className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" /> +20 150 714 4461
                    </a>
                    <a href="https://project-8qxfy.vercel.app" target="_blank" className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Portfolio
                    </a>
                    <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
                      <MapPin className="w-4 h-4" /> Cairo, Egypt
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-white">About Me</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm Abdelrahman Mohamed Ahmed — a founder, operations architect, and product systems leader based in Cairo, Egypt. My work sits at the intersection of operations, product, and technology.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Over the past 3+ years, I've built scalable workflow ecosystems, internal platforms, and esports infrastructures across MENA. I founded the Pyramids Cup, shipped Vicious OS from scratch, and am now building Nexaro AI as my startup vision for AI-assisted operational systems.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-[#0d122d] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-5 h-5 text-cyan-400" />
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                      {stat.subtitle && <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-[#0d122d] border border-[rgba(255,255,255,0.08)] rounded-full text-sm text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* VISION SECTION */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-purple-400" />
              <h2 className="font-orbitron text-3xl font-bold">The Vision</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Target className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-3 text-white">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To eliminate operational chaos for teams that need to move fast. We build intelligent systems that automate workflows, unify data, and accelerate growth — allowing organizations to focus on what matters most: innovation and impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-3 text-white">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A world where operational complexity never stands in the way of great ideas. Where AI-powered systems handle the mundane, humans focus on the meaningful, and teams across MENA and beyond can scale without friction.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#0d122d] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <h4 className="font-bold text-cyan-400 mb-2">AI-First</h4>
                  <p className="text-sm text-gray-400">Intelligent automation at the core of every system we build</p>
                </div>
                <div className="bg-[#0d122d] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <h4 className="font-bold text-purple-400 mb-2">Privacy-First</h4>
                  <p className="text-sm text-gray-400">Self-hosted options, data ownership, and security by design</p>
                </div>
                <div className="bg-[#0d122d] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <h4 className="font-bold text-emerald-400 mb-2">MENA-Native</h4>
                  <p className="text-sm text-gray-400">Built for Arabic workflows and regional business needs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


      </div>
    </main>
  );
}