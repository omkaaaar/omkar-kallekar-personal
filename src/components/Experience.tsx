"use client";

import { experienceData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400">
          Career
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Work Experience
        </h2>
      </motion.div>

      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-0.5">
                  <Briefcase className="w-4 h-4" />
                  <span>{item.company}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-1">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
