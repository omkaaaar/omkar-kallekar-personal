"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Layer 1: Deep Slow Orbs
  const deepLayerRef = useRef<HTMLDivElement>(null);
  // Layer 2: Midground Geometry & Capsules
  const midLayerRef = useRef<HTMLDivElement>(null);
  // Layer 3: Fast Foreground Sparkles
  const fastLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Layer 1: Deep Slow Ambient Orbs (Moves at 0.3x speed)
      if (deepLayerRef.current) {
        gsap.to(deepLayerRef.current, {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // Layer 2: Midground Geometric Shapes & Glass Pills (Moves at 0.65x speed)
      if (midLayerRef.current) {
        gsap.to(midLayerRef.current, {
          yPercent: -65,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Layer 3: Foreground Sparkles & Dust (Moves at 1.2x speed)
      if (fastLayerRef.current) {
        gsap.to(fastLayerRef.current, {
          yPercent: -120,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ======================================================== */}
      {/* LAYER 1: Deep Ambient Blurred Pastel Orbs (Slow)         */}
      {/* ======================================================== */}
      <div ref={deepLayerRef} className="absolute inset-0 w-full h-[125%] will-change-transform">
        {/* Orbs in Hero Section */}
        <div className="absolute top-[2%] left-[8%] w-[420px] h-[420px] rounded-full bg-[#bdb2ff]/20 dark:bg-[#bdb2ff]/15 blur-3xl" />
        <div className="absolute top-[3%] right-[5%] w-[380px] h-[380px] rounded-full bg-[#ffd6a5]/20 dark:bg-[#ffd6a5]/12 blur-3xl" />

        {/* Orbs near About Section */}
        <div className="absolute top-[18%] -left-20 w-80 h-80 rounded-full bg-[#bdb2ff]/20 dark:bg-[#bdb2ff]/15 blur-3xl" />
        <div className="absolute top-[26%] -right-16 w-96 h-96 rounded-full bg-[#9bf6ff]/20 dark:bg-[#9bf6ff]/12 blur-3xl" />

        {/* Orbs near Experience Section */}
        <div className="absolute top-[42%] left-1/4 w-80 h-80 rounded-full bg-[#caffbf]/20 dark:bg-[#caffbf]/12 blur-3xl" />
        <div className="absolute top-[52%] -right-20 w-96 h-96 rounded-full bg-[#ffd6a5]/20 dark:bg-[#ffd6a5]/10 blur-3xl" />

        {/* Orbs near Projects Section */}
        <div className="absolute top-[68%] -left-16 w-96 h-96 rounded-full bg-[#a0c4ff]/20 dark:bg-[#a0c4ff]/12 blur-3xl" />
        <div className="absolute top-[78%] right-1/4 w-80 h-80 rounded-full bg-[#ffadad]/15 dark:bg-[#ffadad]/10 blur-3xl" />

        {/* Orbs near Contact Section */}
        <div className="absolute top-[90%] left-1/3 w-96 h-96 rounded-full bg-[#ffc6ff]/20 dark:bg-[#ffc6ff]/15 blur-3xl" />
      </div>

      {/* ======================================================== */}
      {/* LAYER 2: Midground Frosted Pills & Wireframes (Medium)   */}
      {/* ======================================================== */}
      <div ref={midLayerRef} className="absolute inset-0 w-full h-[165%] will-change-transform">
        {/* Hero Section Midground Accents */}
        <div className="absolute top-[4%] left-[6%] w-36 h-36 rounded-full border border-[#bdb2ff]/30 dark:border-[#bdb2ff]/20" />
        <div className="absolute top-[6%] right-[8%] px-4 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-[#a0c4ff]/30 dark:border-white/10 shadow-sm backdrop-blur-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#a0c4ff]" />
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">Cloud • Full-Stack</span>
        </div>

        {/* About & Experience Midground Accents */}
        <div className="absolute top-[20%] right-[8%] w-40 h-40 rounded-full border border-[#9bf6ff]/30 dark:border-[#9bf6ff]/20 border-dashed" />
        <div className="absolute top-[32%] left-[5%] w-28 h-28 rounded-full border border-[#bdb2ff]/30 dark:border-[#bdb2ff]/20" />
        <div className="absolute top-[24%] left-[10%] px-4 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-[#bdb2ff]/30 dark:border-white/10 shadow-sm backdrop-blur-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#bdb2ff]" />
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">TypeScript • React</span>
        </div>

        {/* Projects & Contact Midground Accents */}
        <div className="absolute top-[48%] right-[6%] w-44 h-44 rounded-full border border-[#caffbf]/30 dark:border-[#caffbf]/20" />
        <div className="absolute top-[44%] right-[12%] px-4 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-[#caffbf]/30 dark:border-white/10 shadow-sm backdrop-blur-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#caffbf]" />
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">Node.js • Next.js</span>
        </div>

        <div className="absolute top-[72%] left-[8%] w-32 h-32 rounded-full border border-[#ffd6a5]/30 dark:border-[#ffd6a5]/20" />
        <div className="absolute top-[75%] left-[12%] px-4 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-[#ffd6a5]/30 dark:border-white/10 shadow-sm backdrop-blur-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ffd6a5]" />
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">Architecture • CI/CD</span>
        </div>

        <div className="absolute top-[88%] right-[10%] w-40 h-40 rounded-full border border-[#ffc6ff]/30 dark:border-[#ffc6ff]/20 border-dashed" />
      </div>

      {/* ======================================================== */}
      {/* LAYER 3: Fast Foreground Sparkles & Luminous Stars       */}
      {/* ======================================================== */}
      <div ref={fastLayerRef} className="absolute inset-0 w-full h-[220%] will-change-transform">
        {/* Hero Sparkles */}
        <div className="absolute top-[3%] right-[22%] text-[#bdb2ff] opacity-75">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute top-[5%] left-[18%] w-2 h-2 rounded-full bg-[#9bf6ff] shadow-[0_0_8px_#9bf6ff] opacity-80" />

        {/* Section Sparkles */}
        <div className="absolute top-[18%] left-[22%] text-[#bdb2ff] opacity-60">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-[#9bf6ff] shadow-[0_0_8px_#9bf6ff] opacity-75" />
        <div className="absolute top-[44%] left-[15%] text-[#caffbf] opacity-65">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        </div>
        <div className="absolute top-[58%] right-[18%] w-2.5 h-2.5 rounded-full bg-[#ffd6a5] shadow-[0_0_8px_#ffd6a5] opacity-70" />
        <div className="absolute top-[70%] left-[20%] text-[#a0c4ff] opacity-65">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute top-[82%] right-[22%] w-2 h-2 rounded-full bg-[#ffadad] shadow-[0_0_8px_#ffadad] opacity-70" />
        <div className="absolute top-[93%] left-[28%] text-[#ffc6ff] opacity-75">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
