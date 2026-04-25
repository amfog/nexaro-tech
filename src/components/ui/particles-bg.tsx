"use client";

import { useEffect, useRef } from "react";

interface ParticlesBgProps {
  color?: string;
  particleCount?: number;
  speed?: number;
}

export default function ParticlesBg({ 
  color = "#00F5FF", 
  particleCount = 50,
  speed = 0.5 
}: ParticlesBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.color = color;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0; if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0; if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color; ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0, 245, 255, 0.03)"; ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
      particles.forEach((particle, index) => {
        particle.update(); particle.draw();
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x, dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 - distance / 1500})`; ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resize);
  }, [color, particleCount, speed]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}
