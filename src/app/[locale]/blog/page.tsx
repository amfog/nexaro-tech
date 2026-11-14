"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

// 14 Nov 2026 (owner: "increase the blog and add things from our work"): nine real articles,
// each with its own page (blog/[slug]) and a cover from our own screenshots. Original colours.
export default function BlogPage() {
  const [first, ...rest] = blogPosts;
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/en" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Resources & <span className="text-cyan-400">Insights</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Notes from building business systems, websites and esports platforms: what we built, what broke, and what we learned.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Link href={`/en/blog/${first.slug}`} className="group grid md:grid-cols-2 gap-6 bg-[#0d122d] rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-cyan-400/30 transition-colors overflow-hidden mb-8">
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={first.cover} alt="" className="w-full h-full min-h-56 object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {first.tags.map((tag) => <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{tag}</span>)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{first.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{first.date}</p>
              <p className="text-gray-300">{first.excerpt}</p>
              <span className="mt-auto pt-6 inline-flex items-center gap-2 text-cyan-400 text-sm">Read the article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08 }}
            >
              <Link href={`/en/blog/${post.slug}`} className="group flex h-full flex-col bg-[#0d122d] rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-cyan-400/30 transition-colors overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.cover} alt="" loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{tag}</span>)}
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-xs mb-3">{post.date}</p>
                  <p className="text-gray-300 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </main>
  );
}
