"use client";

import Image from "next/image";
import { personalDetails, skillsData } from "@/data/portfolioData";
import { Code2, GraduationCap, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400">
          Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          About Me
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 flex justify-center"
        >
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
        </motion.div>

        {/* 3-Sentence Bio & Highlights */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-200/80 dark:border-white/5"
          >
            {personalDetails.about.map((sentence, idx) => (
              <p key={idx}>{sentence}</p>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm"
            >
              <Code2 className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Core Stack</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                React, TypeScript, Node.js, Tailwind CSS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm"
            >
              <GraduationCap className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Education</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                B.E. Computer Science & Engineering (2021–2024)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm"
            >
              <Layers className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Target Roles</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Full-Stack & Frontend at Product Startups
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center"
        >
          Technical Skills &amp; Technologies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card"
          >
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-primary/10 text-primary dark:text-indigo-300 font-medium border border-indigo-100 dark:border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card"
          >
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-primary/10 text-primary dark:text-indigo-300 font-medium border border-indigo-100 dark:border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card"
          >
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Backend &amp; Cloud
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsData.backendAndCloud.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.34 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card"
          >
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
