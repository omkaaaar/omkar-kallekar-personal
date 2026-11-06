"use client";

import { projectsData, personalDetails } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";
import ThrownObject from "./ThrownObject";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16 overflow-hidden">
      <ThrownObject direction="top-left">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-[#bdb2ff]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Featured Engineering Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A curated selection of production enterprise platforms and full-stack personal projects.
          </p>
        </div>
      </ThrownObject>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <ThrownObject
            key={project.id}
            direction={idx % 2 === 0 ? "left" : "right"}
            distance={340}
            rotation={16}
            delay={idx * 0.12}
          >
            <ProjectCard project={project} index={idx} />
          </ThrownObject>
        ))}
      </div>

      <ThrownObject direction="right" delay={0.2}>
        <div className="text-center mt-12">
          <a
            href={personalDetails.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Explore all open-source repositories on GitHub</span>
          </a>
        </div>
      </ThrownObject>
    </section>
  );
}
