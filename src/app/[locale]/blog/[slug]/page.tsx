import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, postBySlug } from "@/data/blog-posts";

// One article (14 Nov 2026). Text lives in src/data/blog-posts.ts.

// Rendered on request like the other pages: the locale layout reads request headers (next-intl),
// so a statically generated article fails with DYNAMIC_SERVER_USAGE.

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Nexaro Tech`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.cover }] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const i = blogPosts.findIndex((p) => p.slug === slug);
  const next = blogPosts[(i + 1) % blogPosts.length];

  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <article className="max-w-3xl mx-auto">
        <Link href="/en/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{tag}</span>)}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-8">{post.date} · Nexaro Tech</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover} alt="" className="w-full rounded-2xl border border-white/10 mb-10" />
        <div className="space-y-5 text-[17px] leading-relaxed text-gray-300">
          {post.body.map((para, k) =>
            para.startsWith("## ") ? (
              <h2 key={k} className="text-2xl font-bold text-white pt-4">{para.slice(3)}</h2>
            ) : (
              <p key={k}>{para}</p>
            )
          )}
        </div>

        <div className="mt-14 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.07] to-purple-500/[0.06] p-6 md:p-8">
          <p className="text-lg font-semibold">Running on Excel and WhatsApp?</p>
          <p className="text-gray-300 mt-2">Tell us how your team works today. We reply with the questions that matter and, after a short call, a written scope and price.</p>
          <Link href="/en/contact" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Link href={`/en/blog/${next.slug}`} className="group mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="text-gray-400 text-sm">Next article</span>
          <span className="text-white group-hover:text-cyan-400 transition-colors font-semibold text-right">{next.title} <ArrowRight className="inline w-4 h-4" /></span>
        </Link>
      </article>
    </main>
  );
}
