"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalDetails } from "@/data/portfolioData";
import { ArrowRight, Download, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { heroHeadlines } = personalDetails;
  const current = heroHeadlines.variant1;

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-avatar", {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
      })
        .from(
          ".hero-badge",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.4"
        )
        .from(
          ".hero-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 max-w-4xl mx-auto"
    >
      <div className="hero-avatar relative mb-6">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-lg mx-auto relative">
          <Image
            src="/images/profile-img.jpg"
            alt={personalDetails.name}
            fill
            sizes="(max-width: 768px) 128px, 144px"
            className="object-cover"
            priority
          />
        </div>
        <div
          className="absolute -bottom-1 -right-1 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white dark:border-dark"
          title="Open to full-stack & frontend roles"
        />
      </div>

      <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-primary/10 border border-indigo-100 dark:border-primary/20 text-xs md:text-sm font-medium text-primary dark:text-indigo-300 mb-4">
        <span>Associate Software Engineer at Accenture</span>
      </div>

      <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white max-w-3xl leading-tight">
        {current.headline}
      </h1>

      <p className="hero-subtitle mt-5 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
        {current.subtitle}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <div className="hero-cta">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="hero-cta">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 hover:border-gray-400 dark:hover:border-gray-600 font-medium text-sm text-gray-800 dark:text-gray-200 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>
        </div>

        <div className="hero-cta sm:hidden">
          <a
            href={personalDetails.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 hover:border-gray-400 dark:hover:border-gray-600 font-medium text-sm text-gray-800 dark:text-gray-200 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
