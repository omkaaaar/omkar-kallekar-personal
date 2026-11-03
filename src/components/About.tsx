import Image from "next/image";
import { personalDetails, skillsData } from "@/data/portfolioData";
import { Code2, GraduationCap, Layers, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-16">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400">
          Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
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

        {/* 3-Sentence Bio & Highlights */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-200/80 dark:border-white/5">
            {personalDetails.about.map((sentence, idx) => (
              <p key={idx}>{sentence}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm">
              <Code2 className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Core Stack</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                React, TypeScript, Node.js, Tailwind CSS
              </p>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm">
              <GraduationCap className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Education</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                B.E. Computer Science & Engineering (2021–2024)
              </p>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm">
              <Layers className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Target Roles</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Full-Stack & Frontend at Product Startups
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Technical Skills & Technologies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Frontend Development
            </h4>
            <div className="flex flex-wrap gap-2">
              {[...skillsData.languages, ...skillsData.frameworks.slice(0, 3)].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-primary/10 text-primary dark:text-indigo-300 font-medium border border-indigo-100 dark:border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Backend, Cloud & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                ...skillsData.cloudAndDatabases,
                ...skillsData.toolsAndPractices,
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

