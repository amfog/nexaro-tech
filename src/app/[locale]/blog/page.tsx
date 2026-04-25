"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Building Nexaro Life: Our AI OS Journey",
    date: "April 2026",
    excerpt: "How we architected a personal AI operating system with privacy-first design.",
    tags: ["AI", "Product", "Architecture"]
  },
  {
    title: "Event Tech in Saudi Arabia: Lessons from Alahsa",
    date: "March 2026",
    excerpt: "Key insights from building festival platforms for large-scale events.",
    tags: ["Event Tech", "Case Study", "KSA"]
  },
  {
    title: "Why We Chose Next.js 16 for Nexaro.tech",
    date: "February 2026",
    excerpt: "Technical decisions behind our cyberpunk-minimal website rebuild.",
    tags: ["Next.js", "Web Dev", "Design"]
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/en" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Resources & <span className="text-cyan-400">Insights</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Technical articles, case studies, and thoughts from the Nexaro team.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0d122d] p-6 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-cyan-400/30 transition-colors cursor-pointer group"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="text-gray-300">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          More articles coming soon. Follow us for updates.
        </div>

      </div>
    </main>
  );
}
