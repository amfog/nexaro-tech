"use client";

import { useEffect, useRef, useState } from "react";

interface Product {
  code: string;
  name: string;
  sub: string;
  color: string;
  logo: string;
  shot?: string;
}

const products: Product[] = [
  { code: "NX-001.L", name: "Nexaro Life", sub: "Personal AI OS", color: "#00F5FF", logo: "/nexaro-life.svg", shot: "/images/nexaro-life-dashboard.webp" },
  { code: "NX-002.O", name: "Vicious OS", sub: "Esports Operations", color: "#B829F7", logo: "/vicious-os.svg", shot: "/images/vicious-os-dashboard.webp" },
  { code: "NX-008.M", name: "Nexaro Command Center", sub: "Master Control Dashboard", color: "#FFD700", logo: "/nexaro-master-control.svg", shot: "/images/nexaro-master-dashboard.webp" },
  { code: "NX-002.T", name: "Teams OS", sub: "Core Operations", color: "#00F5FF", logo: "/teams-os.svg", shot: "/images/teams-os-dashboard.webp" },
  { code: "NX-003.C", name: "Nexaro CRM", sub: "Smart Business CRM", color: "#B829F7", logo: "/nexaro-crm.svg" },
];

const count = products.length;
const angleStep = 360 / count;

function getRadius() {
  const w = window.innerWidth;
  if (w >= 1440) return 540;
  if (w >= 1024) return 460;
  return 380;
}

function RingCards({ radius }: { radius: number }) {
  return (
    <>
      {products.map((p, i) => (
        <div
          key={p.code}
          className="mh-card-slot"
          style={{
            transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
            borderColor: `${p.color}55`,
          }}
        >
          {p.shot ? (
            <div className="mh-card-shot" style={{ backgroundImage: `url(${p.shot})` }} />
          ) : (
            <div className="mh-card-icon-wrap">
              <img src={p.logo} alt={p.name} className="mh-card-icon" />
            </div>
          )}
          <div className="mh-card-overlay">
            <span className="mh-card-code" style={{ color: p.color }}>
              {p.code}
            </span>
            <span className="mh-card-name">{p.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default function MirrorHallCarousel() {
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(380);
  const sceneRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setRadius(getRadius());
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    function handleResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setRadius(getRadius()), 150);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const scene = sceneRef.current;
    const ring = ringRef.current;
    const ringReflection = reflectionRef.current;
    if (!scene || !ring || !ringReflection) return;

    let rotation = 0;
    let velocity = 0.12;
    let isDragging = false;
    let lastX = 0;
    let lastMoveTime = 0;
    let dragVelocity = 0;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId = 0;

    function setRotation(deg: number) {
      ring!.style.transform = `rotateY(${deg}deg)`;
      ringReflection!.style.transform = `rotateY(${deg}deg)`;
    }

    function onDown(clientX: number) {
      isDragging = true;
      scene!.classList.add("dragging");
      lastX = clientX;
      lastMoveTime = performance.now();
      dragVelocity = 0;
      velocity = 0;
      if (idleTimer) clearTimeout(idleTimer);
    }

    function onMove(clientX: number) {
      if (!isDragging) return;
      const now = performance.now();
      const dx = clientX - lastX;
      const dt = Math.max(now - lastMoveTime, 1);
      dragVelocity = (dx / dt) * 16;
      rotation += dx * 0.35;
      setRotation(rotation);
      lastX = clientX;
      lastMoveTime = now;
    }

    function onUp() {
      if (!isDragging) return;
      isDragging = false;
      scene!.classList.remove("dragging");
      velocity = dragVelocity * 0.35;
      idleTimer = setTimeout(() => {
        velocity = 0.12;
      }, 2200);
    }

    function handlePointerDown(e: PointerEvent) {
      scene!.setPointerCapture(e.pointerId);
      onDown(e.clientX);
    }
    function handlePointerMove(e: PointerEvent) {
      onMove(e.clientX);
    }
    function handlePointerUp() {
      onUp();
    }

    scene.addEventListener("pointerdown", handlePointerDown);
    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerup", handlePointerUp);
    scene.addEventListener("pointercancel", handlePointerUp);

    function animate() {
      if (!isDragging) {
        rotation += velocity;
        velocity *= 0.985;
        setRotation(rotation);
      }
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    return () => {
      scene.removeEventListener("pointerdown", handlePointerDown);
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerup", handlePointerUp);
      scene.removeEventListener("pointercancel", handlePointerUp);
      cancelAnimationFrame(rafId);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="mh-scene-wrap" ref={sceneRef}>
      <div className="mh-perspective">
        <div className="mh-ring" ref={ringRef}>
          <RingCards radius={radius} />
        </div>
      </div>

      <div className="mh-reflection-wrap">
        <div className="mh-ring-reflection" ref={reflectionRef}>
          <RingCards radius={radius} />
        </div>
      </div>

      <div className="mh-hint">
        Drag to spin <span className="mh-arrow">→</span>
      </div>

      <style jsx global>{`
        .mh-scene-wrap {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: grab;
          user-select: none;
          touch-action: none;
        }
        .mh-scene-wrap.dragging {
          cursor: grabbing;
        }

        .mh-perspective {
          position: relative;
          width: 100%;
          height: 220px;
          padding-top: 10px;
          padding-bottom: 0;
          perspective: 1800px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mh-ring,
        .mh-ring-reflection {
          position: relative;
          width: 180px;
          height: 115px;
          transform-style: preserve-3d;
        }

        .mh-reflection-wrap {
          position: relative;
          width: 100%;
          height: 60px;
          margin-top: -6px;
          perspective: 1800px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          transform: scaleY(-1);
          transform-origin: top center;
          opacity: 0.3;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 70%);
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 70%);
          filter: blur(1.5px);
          overflow: hidden;
          pointer-events: none;
        }

        .mh-card-slot {
          position: absolute;
          width: 180px;
          height: 115px;
          left: 0;
          top: 0;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backface-visibility: hidden;
          overflow: hidden;
          background: #0d122d;
        }

        .mh-card-shot {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: top center;
        }

        .mh-card-icon-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05), transparent 70%);
        }
        .mh-card-icon {
          width: 42%;
          height: auto;
          max-height: 50%;
          object-fit: contain;
          opacity: 0.9;
        }

        .mh-card-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 6px 8px;
          background: linear-gradient(to top, rgba(5, 7, 20, 0.92), transparent);
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .mh-card-code {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .mh-card-name {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mh-hint {
          position: relative;
          margin-top: 8px;
          text-align: center;
          color: #a0a0b0;
          font-size: 12px;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0.8;
        }
        .mh-arrow {
          display: inline-block;
          animation: mh-nudge 1.6s ease-in-out infinite;
        }
        @keyframes mh-nudge {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
        }

        @media (min-width: 1024px) {
          .mh-perspective {
            height: 260px;
            perspective: 2200px;
          }
          .mh-ring,
          .mh-ring-reflection {
            width: 220px;
            height: 140px;
          }
          .mh-card-slot {
            width: 220px;
            height: 140px;
            border-radius: 12px;
          }
          .mh-card-code {
            font-size: 10px;
          }
          .mh-card-name {
            font-size: 12px;
          }
        }

        @media (min-width: 1440px) {
          .mh-perspective {
            height: 290px;
            perspective: 2600px;
          }
          .mh-ring,
          .mh-ring-reflection {
            width: 260px;
            height: 165px;
          }
          .mh-card-slot {
            width: 260px;
            height: 165px;
            border-radius: 14px;
          }
          .mh-card-code {
            font-size: 11px;
          }
          .mh-card-name {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
