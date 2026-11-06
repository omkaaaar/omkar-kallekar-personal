"use client";

import React, { useRef } from "react";
import { experienceData, ExperienceItem } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import ThrownObject from "./ThrownObject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ExperienceCardItem({ item, index }: { item: ExperienceItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: relX * 10,
      rotateX: -relY * 10,
      scale: 1.015,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 900,
      transformOrigin: "center center",
      overwrite: "auto",
    });

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: relX * 8,
        y: relY * 8,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.65,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    }
  };

  const impactBadges = [
    "⚡ Enterprise Microservices & Cloud Run",
    "🚀 Production Full-Stack Workflows",
  ];

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm hover:shadow-xl hover:border-[#bdb2ff]/50 dark:hover:border-[#bdb2ff]/50 transition-colors will-change-transform [transform-style:preserve-3d]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.role}
            </h3>
            {impactBadges[index] && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                {impactBadges[index]}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-primary dark:text-[#bdb2ff] font-semibold text-sm mt-0.5">
            <span ref={iconRef} className="inline-block will-change-transform">
              <Briefcase className="w-4 h-4" />
            </span>
            <span>{item.company}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            {item.period}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {item.location}
          </span>
        </div>
      </div>

      <ul className="space-y-2 mt-4 text-sm text-gray-700 dark:text-gray-300">
        {item.highlights.map((bullet, bIdx) => (
          <li key={bIdx} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#bdb2ff] mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineLaserRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (timelineLaserRef.current && containerRef.current) {
        gsap.fromTo(
          timelineLaserRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 75%",
              scrub: 0.3,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16 overflow-hidden">
      <ThrownObject direction="top-right">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-[#bdb2ff]">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Work Experience
          </h2>
        </div>
      </ThrownObject>

      {/* Timeline Layout with Glowing Laser Trace */}
      <div ref={containerRef} className="relative pl-6 sm:pl-10 space-y-10">
        {/* Background Grey Guide Line */}
        <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-1 bg-gray-200 dark:bg-white/10 rounded-full" />

        {/* Active Glowing Laser Trace Line (Driven by GSAP ScrollTrigger) */}
        <div
          ref={timelineLaserRef}
          className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-[#bdb2ff] via-[#9bf6ff] to-[#ffc6ff] rounded-full origin-top shadow-[0_0_14px_rgba(189,178,255,0.7)] pointer-events-none"
          style={{ transform: "scaleY(0)" }}
        />

        {experienceData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Checkpoint Node */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-6 h-6 rounded-full bg-white dark:bg-[#121124] border-2 border-[#bdb2ff] shadow-md flex items-center justify-center group-hover:scale-125 transition-transform z-10">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <ThrownObject
              direction={index % 2 === 0 ? "left" : "right"}
              distance={320}
              rotation={12}
              delay={index * 0.15}
            >
              <ExperienceCardItem item={item} index={index} />
            </ThrownObject>
          </div>
        ))}
      </div>
    </section>
  );
}
