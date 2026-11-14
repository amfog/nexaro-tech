"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small animation pieces for the 14 Nov 2026 revamp. Everything is quiet and short, plays once,
 * and is skipped for people who ask their device for reduced motion.
 */

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ children, delay = 0, className, y = 18 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to a number when it scrolls into view ("3,660" keeps its comma). */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = Number(value.replace(/[^0-9.]/g, ""));
  const [shown, setShown] = useState(reduce || !Number.isFinite(target) ? value : "0");
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView || reduce || !Number.isFinite(target)) return;
    const controls = animate(mv, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, reduce, target, mv]);
  return <span ref={ref} className={className}>{shown}</span>;
}

/**
 * A screenshot in a plain browser frame. With `tilt`, it starts leaning back and straightens as
 * the page scrolls (the hero product shot).
 */
export function BrowserFrame({ src, alt, url, tilt = false, className, priority = false }: { src: string; alt: string; url?: string; tilt?: boolean; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [tilt && !reduce ? 18 : 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [tilt && !reduce ? 0.94 : 1, 1]);
  return (
    <div ref={ref} className={cn("[perspective:1600px]", className)}>
      <motion.div style={{ rotateX, scale, transformOrigin: "center top" }} className="overflow-hidden rounded-xl border border-line-2 bg-panel shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          {url && <span className="ms-3 truncate rounded-md bg-white/[0.04] px-3 py-0.5 font-mono text-[11px] text-dim">{url}</span>}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full" loading={priority ? "eager" : "lazy"} decoding="async" />
      </motion.div>
    </div>
  );
}

/** Slow moving colour glow behind a section. Pure CSS, no canvas. */
export function Aurora({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[80vw] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(45,212,232,0.18),transparent)] blur-3xl" />
      <div className="absolute right-[5%] top-[10%] h-[45vh] w-[40vw] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(139,124,246,0.14),transparent)] blur-3xl [animation-delay:-6s]" />
    </div>
  );
}

/**
 * Raycast-style hero art in Nexaro colours (14 Nov 2026, owner: "Raycast for Nexaro Tech with our
 * colours"): glowing diagonal light bars, cyan to purple, that drift slowly behind the headline,
 * with film grain on top. Pure CSS; stops moving for reduced motion.
 */
export function LightStreaks({ className }: { className?: string }) {
  const bars = [
    { w: 620, top: 40, left: 10, blur: 26, o: 0.9, d: 0 },
    { w: 520, top: 120, left: 90, blur: 18, o: 0.75, d: -2 },
    { w: 700, top: 200, left: -20, blur: 34, o: 0.6, d: -4 },
    { w: 460, top: 280, left: 140, blur: 16, o: 0.85, d: -6 },
    { w: 600, top: 360, left: 40, blur: 28, o: 0.55, d: -3 },
    { w: 380, top: 440, left: 180, blur: 20, o: 0.7, d: -5 },
  ];
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden", className)}>
      <div className="absolute left-1/2 top-[-150px] h-[560px] w-[820px] -translate-x-[78%] [mask-image:radial-gradient(closest-side,#000_55%,transparent)] md:top-[-130px]">
        <div className="absolute inset-0 rotate-[-32deg]">
          {bars.map((b, i) => (
            <span
              key={i}
              className="nx-streak absolute block h-[64px] rounded-full mix-blend-screen"
              style={{
                width: b.w, top: b.top, left: b.left, opacity: b.o, filter: `blur(${b.blur}px)`,
                background: "linear-gradient(90deg, transparent, #00F5FF 25%, #8b5cf6 60%, #B829F7 75%, transparent)",
                animationDelay: `${b.d}s`,
              }}
            />
          ))}
          {/* thin bright cores give the bars their "light" look */}
          {bars.slice(0, 4).map((b, i) => (
            <span
              key={`c${i}`}
              className="nx-streak absolute block h-[6px] rounded-full"
              style={{ width: b.w * 0.6, top: b.top + 29, left: b.left + b.w * 0.2, opacity: 0.7, filter: "blur(2px)", background: "linear-gradient(90deg, transparent, #e0fdff, #f0d9ff, transparent)", animationDelay: `${b.d}s` }}
            />
          ))}
        </div>
      </div>
      <div className="nx-grain absolute inset-0 opacity-[0.07]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A0E27]" />
    </div>
  );
}

/** A card with a soft cyan light that follows the mouse (Raycast-style). */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cn("nx-spot relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]", className)}
    >
      {children}
    </div>
  );
}
