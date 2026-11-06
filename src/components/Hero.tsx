"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalDetails } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Mail,
  Copy,
  Check,
  Clock,
  Code2,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import ThrownObject from "./ThrownObject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TECH_MARQUEE = [
  { name: "React 19", role: "UI Architecture", color: "#9bf6ff" },
  { name: "Next.js 15", role: "App Router & SSR", color: "#bdb2ff" },
  { name: "TypeScript 5", role: "Type-Safe Systems", color: "#a0c4ff" },
  { name: "Node.js", role: "Microservices", color: "#caffbf" },
  { name: "GCP Cloud Run", role: "Serverless Containers", color: "#ffd6a5" },
  { name: "Tailwind CSS", role: "Atomic Design Tokens", color: "#9bf6ff" },
  { name: "PostgreSQL", role: "Relational Modeling", color: "#fed9b7" },
  // { name: "Docker", role: "Containerization", color: "#a0c4ff" },
  { name: "GSAP & Motion", role: "60fps Fluid Motion", color: "#ffc6ff" },
  { name: "Firestore (NoSQL)", role: "Realtime Data Stores", color: "#ffadad" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftColParallaxRef = useRef<HTMLDivElement>(null);
  const rightCardParallaxRef = useRef<HTMLDivElement>(null);
  const marqueeParallaxRef = useRef<HTMLDivElement>(null);
  const devCardRef = useRef<HTMLDivElement>(null);

  const [localTime, setLocalTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Live IST Clock (Goa / Bangalore)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalDetails.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  // 3D tilt micro-interaction on the Developer Card
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!devCardRef.current) return;
    const rect = devCardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(devCardRef.current, {
      rotateY: relX * 8,
      rotateX: -relY * 8,
      scale: 1.015,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
      overwrite: "auto",
    });
  };

  const handleCardMouseLeave = () => {
    if (!devCardRef.current) return;
    gsap.to(devCardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  useGSAP(
    () => {
      if (!heroRef.current) return;

      // Differential Scroll Parallax
      if (leftColParallaxRef.current) {
        gsap.to(leftColParallaxRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (rightCardParallaxRef.current) {
        gsap.to(rightCardParallaxRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (marqueeParallaxRef.current) {
        gsap.to(marqueeParallaxRef.current, {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center relative z-10"
    >
      {/* 2-Column Asymmetric Layout matching the screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ======================================================== */}
        {/* LEFT 7 COLUMNS: Headline, Pitch & Action Buttons         */}
        {/* ======================================================== */}
        <div
          ref={leftColParallaxRef}
          className="lg:col-span-7 flex flex-col items-start text-left will-change-transform"
        >
          {/* Eyebrow Pill */}
          <ThrownObject direction="top-left" distance={200} rotation={8} delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bdb2ff]/20 dark:bg-[#bdb2ff]/15 border border-[#bdb2ff]/40 text-xs sm:text-sm font-semibold text-[#5b21b6] dark:text-[#bdb2ff] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Stack Engineer at Accenture • Open to Work</span>
            </div>
          </ThrownObject>

          {/* Kinetic High-Impact Headline */}
          <ThrownObject direction="left" distance={300} rotation={12} delay={0.12}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Full Stack &amp;{" "}
              <span className="bg-gradient-to-r from-primary via-[#7064e6] to-[#bdb2ff] bg-clip-text text-transparent">
                Frontend Software Engineer.
              </span>
            </h1>
          </ThrownObject>

          {/* Value Pitch Description */}
          <ThrownObject direction="right" distance={250} rotation={10} delay={0.18}>
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-bold">{personalDetails.name}</strong>. I build web applications and cloud services with{" "}
              <span className="font-semibold text-primary dark:text-[#bdb2ff]">React 19, TypeScript, and Node.js microservices</span> currently engineering internal product platforms at <span className="font-semibold text-primary dark:text-[#bdb2ff]">Accenture</span> &amp;{" "} building <span className="font-semibold text-primary dark:text-[#bdb2ff]"><a href="https://www.algronode.com" target="_blank">AlgoNode.</a></span>
            </p>
          </ThrownObject>

          {/* Magnetic CTA Action Buttons */}
          <ThrownObject direction="left" distance={240} rotation={6} delay={0.24}>
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(112,100,230,0.4)] dark:shadow-[0_10px_25px_-5px_rgba(189,178,255,0.25)] transition-all hover:scale-105"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:border-primary text-slate-800 dark:text-gray-200 font-bold text-sm transition-all hover:bg-white shadow-xs"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Get In Touch</span>
              </Link>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full border border-gray-300/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-gray-400 hover:border-primary transition-all bg-white/60 dark:bg-white/5 shadow-xs"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Copied!" : "omkark6342@gmail.com"}</span>
              </button>
            </div>
          </ThrownObject>
        </div>

        {/* ======================================================== */}
        {/* RIGHT 5 COLUMNS: Developer Bento Telemetry Card           */}
        {/* ======================================================== */}
        <div
          ref={rightCardParallaxRef}
          className="lg:col-span-5 flex flex-col gap-4 will-change-transform"
        >
          <ThrownObject direction="right" distance={320} rotation={12} delay={0.16}>
            <div
              ref={devCardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative rounded-3xl p-6 bg-white/95 dark:bg-[#1c1936]/95 border border-[#bdb2ff]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_20px_45px_-12px_rgba(112,100,230,0.12)] backdrop-blur-xl transition-shadow will-change-transform [transform-style:preserve-3d]"
            >
              {/* Photo & Identity Header */}
              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100 dark:border-white/10">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-md shrink-0">
                  <Image
                    src="/images/profile-img.jpg"
                    alt={personalDetails.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {personalDetails.name}
                  </h3>
                  <p className="text-xs text-primary dark:text-[#bdb2ff] font-semibold">
                    Associate Software Engineer @ Accenture
                  </p>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono block mt-0.5">
                    📍 Goa / Bangalore, India
                  </span>
                </div>
              </div>

              {/* Real-Time Telemetry Items */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                    <span className="text-amber-500">⚡</span>
                    <span>Core Stack</span>
                  </span>
                  <span className="font-bold text-slate-800 dark:text-gray-200">
                    Next.js 15 • React 19 • Node
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                    <span className="text-emerald-500">☁️</span>
                    <span>Cloud Runtime</span>
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    GCP Cloud Run • Serverless
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Local Time</span>
                  </span>
                  <span className="font-bold text-primary dark:text-[#bdb2ff]">
                    {localTime || "11:46:15 PM"} (IST)
                  </span>
                </div>
              </div>

              {/* Quick Profile Links */}
              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                <a
                  href={personalDetails.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalDetails.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-1.5 text-primary dark:text-[#bdb2ff] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </ThrownObject>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. INFINITE 60FPS TECH STACK MARQUEE TICKER              */}
      {/* ======================================================== */}
      <div
        ref={marqueeParallaxRef}
        className="will-change-transform w-full mt-16 pt-8 border-t border-gray-200/60 dark:border-white/10"
      >
        <ThrownObject direction="top-right" distance={160} rotation={4} delay={0.28}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 font-mono">
                &lt;/&gt; PRODUCTION STACK &amp; ARCHITECTURAL DAILY DRIVERS
              </span>
            </div>

            <style>{`
              @keyframes heroTicker {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-hero-ticker {
                display: flex;
                width: max-content;
                animation: heroTicker 24s linear infinite;
              }
              .animate-hero-ticker:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="overflow-hidden py-1 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-hero-ticker gap-3">
                {TECH_MARQUEE.concat(TECH_MARQUEE).map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-[#1c1936]/80 backdrop-blur-md border border-gray-200/70 dark:border-white/10 shadow-xs hover:border-primary transition-all whitespace-nowrap group shrink-0"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-xs font-bold text-slate-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono hidden sm:inline">
                      • {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ThrownObject>
      </div>
    </section >
  );
}
