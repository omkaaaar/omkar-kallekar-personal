"use client";

import React, { useRef } from "react";
import { ProjectItem } from "@/data/portfolioData";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import gsap from "gsap";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    // 3D Card Tilt with Perspective
    gsap.to(cardRef.current, {
      rotateY: relX * 14,
      rotateX: -relY * 14,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
      transformOrigin: "center center",
      overwrite: "auto",
    });

    // Inertia Parallax on badge & icon (drifts faster for depth)
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: relX * 12,
        y: relY * 12,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
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

    // Elastic snap-back to rest
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

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    }
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group flex flex-col justify-between h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-[#bdb2ff]/50 transition-colors duration-300 will-change-transform [transform-style:preserve-3d]"
    >
      <div>
        {/* Top Header: Category & Action Links */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span
              ref={iconRef}
              className="p-2 rounded-lg bg-[#bdb2ff]/15 text-primary dark:text-[#bdb2ff] will-change-transform"
            >
              <FolderGit2 className="w-4 h-4" />
            </span>
            <span
              ref={badgeRef}
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 will-change-transform"
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live deployment for ${project.title}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary dark:text-[#bdb2ff] hover:bg-primary hover:text-white transition-all"
              >
                <span>Live</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Role */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
          {project.role}
        </p>

        {/* Summary */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#bdb2ff] mt-1.5 flex-shrink-0" />
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="pt-4 border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
