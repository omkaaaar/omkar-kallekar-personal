"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { personalDetails, skillsData } from "@/data/portfolioData";
import {
  Code2,
  GraduationCap,
  Layers,
  Layout,
  Server,
  Cloud,
  Database,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ThrownObject from "./ThrownObject";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const profileLevitationRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Profile Card Zero-Gravity Floating Loop
      if (profileLevitationRef.current) {
        gsap.to(profileLevitationRef.current, {
          y: "+=12px",
          rotation: "+=1.2deg",
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 2. Out-of-phase levitation on the 3 highlight cards
      if (card1Ref.current) {
        gsap.to(card1Ref.current, {
          y: "+=8px",
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (card2Ref.current) {
        gsap.to(card2Ref.current, {
          y: "-=9px",
          duration: 4.0,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }

      if (card3Ref.current) {
        gsap.to(card3Ref.current, {
          y: "+=7px",
          duration: 3.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16 overflow-hidden relative"
    >
      <ThrownObject direction="top-left">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-[#bdb2ff]">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            About Me
          </h2>
        </div>
      </ThrownObject>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Profile Card - Thrown from Left + Zero-Gravity Levitation */}
        <div className="lg:col-span-5 flex justify-center">
          <ThrownObject direction="left" distance={360} rotation={18}>
            <div ref={profileLevitationRef} className="will-change-transform">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg bg-white dark:bg-dark-card p-3">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <Image
                    src="/images/profile-img.jpg"
                    alt="Omkar Kallekar"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {personalDetails.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {personalDetails.role}
                  </p>
                </div>
              </div>
            </div>
          </ThrownObject>
        </div>

        {/* 3-Sentence Bio & Highlights - Thrown from Right */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ThrownObject direction="right" distance={360} rotation={15}>
            <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-200/80 dark:border-white/5">
              {personalDetails.about.map((sentence, idx) => (
                <p key={idx}>{sentence}</p>
              ))}
            </div>
          </ThrownObject>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ThrownObject direction="left" distance={250} rotation={12} delay={0.08}>
              <div ref={card1Ref} className="will-change-transform h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm h-full"
                >
                  <Code2 className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Core Stack</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    React, TypeScript, Node.js, Tailwind CSS
                  </p>
                </motion.div>
              </div>
            </ThrownObject>

            <ThrownObject direction="top-left" distance={220} rotation={8} delay={0.16}>
              <div ref={card2Ref} className="will-change-transform h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm h-full"
                >
                  <GraduationCap className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Education</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    B.E. Computer Science &amp; Engineering (2021–2024)
                  </p>
                </motion.div>
              </div>
            </ThrownObject>

            <ThrownObject direction="right" distance={250} rotation={12} delay={0.24}>
              <div ref={card3Ref} className="will-change-transform h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm h-full"
                >
                  <Layers className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Target Roles</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Full-Stack &amp; Frontend at Product Startups
                  </p>
                </motion.div>
              </div>
            </ThrownObject>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-16">
        <ThrownObject direction="top-right">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Technical Skills &amp; Architecture
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-lg mx-auto">
              Production frameworks, microservices, and cloud systems I engineer daily.
            </p>
          </div>
        </ThrownObject>

        {/* Primary Daily Driver Spotlight Bar */}
        <ThrownObject direction="top-left" delay={0.06}>
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border border-[#bdb2ff]/40 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-gradient-to-tr from-[#bdb2ff] via-[#9bf6ff] to-[#ffc6ff] text-white shadow-sm shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-[#bdb2ff] block">
                    Core Competency &amp; Daily Drivers
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Primary tools used in production architecture and client enterprise systems.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {skillsData.primary.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-[#bdb2ff]/20 dark:bg-[#bdb2ff]/15 text-primary dark:text-[#bdb2ff] border border-[#bdb2ff]/40 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ThrownObject>

        {/* 4 Architectural Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Frontend Architecture */}
          <ThrownObject direction="left" distance={320} rotation={14} delay={0.08}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full shadow-sm hover:border-[#bdb2ff]/50 dark:hover:border-[#bdb2ff]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#bdb2ff]/15 text-primary dark:text-[#bdb2ff]">
                      <Layout className="w-4 h-4" />
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Frontend Architecture
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                    DOMAIN 01
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-[#bdb2ff]/15 text-[#5c4ec8] dark:text-[#bdb2ff] font-medium border border-[#bdb2ff]/30 hover:border-[#bdb2ff] hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ThrownObject>

          {/* 2. Backend & Microservices */}
          <ThrownObject direction="right" distance={320} rotation={14} delay={0.16}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full shadow-sm hover:border-[#9bf6ff]/50 dark:hover:border-[#9bf6ff]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#9bf6ff]/15 text-[#0f766e] dark:text-[#9bf6ff]">
                      <Server className="w-4 h-4" />
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Backend &amp; Microservices
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                    DOMAIN 02
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-[#9bf6ff]/15 text-[#0f766e] dark:text-[#9bf6ff] font-medium border border-[#9bf6ff]/30 hover:border-[#9bf6ff] hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ThrownObject>

          {/* 3. Cloud & Serverless */}
          <ThrownObject direction="left" distance={320} rotation={14} delay={0.24}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full shadow-sm hover:border-[#caffbf]/50 dark:hover:border-[#caffbf]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#caffbf]/25 text-[#166534] dark:text-[#caffbf]">
                      <Cloud className="w-4 h-4" />
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Cloud &amp; Serverless
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                    DOMAIN 03
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.cloud.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-[#caffbf]/25 text-[#166534] dark:text-[#caffbf] font-medium border border-[#caffbf]/35 hover:border-[#caffbf] hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ThrownObject>

          {/* 4. Databases & Systems */}
          <ThrownObject direction="right" distance={320} rotation={14} delay={0.32}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full shadow-sm hover:border-[#ffd6a5]/50 dark:hover:border-[#ffd6a5]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#ffd6a5]/25 text-[#9a3412] dark:text-[#ffd6a5]">
                      <Database className="w-4 h-4" />
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Databases &amp; Systems
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                    DOMAIN 04
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.databasesAndTools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-[#ffd6a5]/25 text-[#9a3412] dark:text-[#ffd6a5] font-medium border border-[#ffd6a5]/35 hover:border-[#ffd6a5] hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ThrownObject>
        </div>
      </div>
    </section>
  );
}
