"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb } from "lucide-react";

export default function AboutPage() {
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
                    To eliminate operational chaos for teams that need to move fast. We build intelligent systems that automate workflows, unify data, and accelerate growth, allowing organizations to focus on what matters most: innovation and impact.
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