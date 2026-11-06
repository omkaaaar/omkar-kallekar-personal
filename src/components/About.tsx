"use client";

import Image from "next/image";
import { personalDetails, skillsData } from "@/data/portfolioData";
import { Code2, GraduationCap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import ThrownObject from "./ThrownObject";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16 overflow-hidden">
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
        {/* Profile Card - Thrown from Left */}
        <div className="lg:col-span-5 flex justify-center">
          <ThrownObject direction="left" distance={360} rotation={18}>
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
            </ThrownObject>

            <ThrownObject direction="top-left" distance={220} rotation={8} delay={0.16}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm h-full"
              >
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Education</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  B.E. Computer Science & Engineering (2021–2024)
                </p>
              </motion.div>
            </ThrownObject>

            <ThrownObject direction="right" distance={250} rotation={12} delay={0.24}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm h-full"
              >
                <Layers className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Target Roles</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Full-Stack & Frontend at Product Startups
                </p>
              </motion.div>
            </ThrownObject>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-16">
        <ThrownObject direction="top-right">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technical Skills &amp; Technologies
          </h3>
        </ThrownObject>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages - Thrown from Left */}
          <ThrownObject direction="left" distance={320} rotation={14} delay={0.08}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#bdb2ff]/15 text-[#5c4ec8] dark:text-[#bdb2ff] font-medium border border-[#bdb2ff]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ThrownObject>

          {/* Frontend - Thrown from Right */}
          <ThrownObject direction="right" distance={320} rotation={14} delay={0.16}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#9bf6ff]/15 text-[#0f766e] dark:text-[#9bf6ff] font-medium border border-[#9bf6ff]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ThrownObject>

          {/* Backend & Cloud - Thrown from Left */}
          <ThrownObject direction="left" distance={320} rotation={14} delay={0.24}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Backend &amp; Cloud
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.backendAndCloud.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#caffbf]/25 text-[#166534] dark:text-[#caffbf] font-medium border border-[#caffbf]/35"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ThrownObject>

          {/* Tools - Thrown from Right */}
          <ThrownObject direction="right" distance={320} rotation={14} delay={0.32}>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card h-full"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#ffd6a5]/25 text-[#9a3412] dark:text-[#ffd6a5] font-medium border border-[#ffd6a5]/35"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ThrownObject>
        </div>
      </div>
    </section>
  );
}
