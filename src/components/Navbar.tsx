"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { personalDetails } from "@/data/portfolioData";
import { Menu, X, Download, Sun, Moon, CheckCircle2, Mail, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const statusPopoverRef = useRef<HTMLDivElement>(null);
  const { isDark, toggleTheme, mounted } = useTheme();

  // Close status popover when clicking anywhere outside
  useEffect(() => {
    if (!statusModalOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        statusPopoverRef.current &&
        !statusPopoverRef.current.contains(e.target as Node)
      ) {
        setStatusModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [statusModalOpen]);

  // Active Section Spy & Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate percentage scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // 2. Determine active section based on scroll position
      const sectionIds = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 220; // 220px offset for smooth trigger

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) setIsOpen(false);
        if (statusModalOpen) setStatusModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, statusModalOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between pointer-events-none bg-transparent">
      {/* ======================================================== */}
      {/* 1. Left: Logo with Pulsing Availability Beacon           */}
      {/* ======================================================== */}
      <div ref={statusPopoverRef} className="pointer-events-auto relative">
        <button
          onClick={() => setStatusModalOpen(!statusModalOpen)}
          aria-label="View availability and quick recruiter details"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#1c1936]/80 backdrop-blur-md border border-gray-200/70 dark:border-white/10 hover:border-emerald-500/50 shadow-sm transition-all group"
          title="Click to view availability status"
        >
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
            omkar<span className="text-primary font-black">.</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Open to Work</span>
          </span>
        </button>

        {/* Recruiter Quick Status Popover */}
        <AnimatePresence>
          {statusModalOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute top-12 left-0 w-72 p-4 rounded-2xl bg-white/95 dark:bg-[#1c1936]/95 backdrop-blur-xl border border-emerald-500/30 shadow-2xl z-50 text-left"
            >
              <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 dark:border-white/10">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Available for Hire
                </span>
                <button
                  onClick={() => setStatusModalOpen(false)}
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-white text-xs font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2.5 leading-relaxed">
                Open to <strong className="text-gray-900 dark:text-white">Full-Stack</strong> &amp;{" "}
                <strong className="text-gray-900 dark:text-white">React/Frontend</strong> roles at product companies and remote startups.
              </p>

              <div className="mt-3 space-y-1.5 text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary dark:text-[#bdb2ff]" />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-primary dark:text-[#bdb2ff]" />
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="hover:underline text-gray-700 dark:text-gray-200"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-gray-200/60 dark:border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-mono">Replies &lt; 2 hours</span>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="px-2.5 py-1 rounded-full bg-primary hover:bg-primary-hover text-white text-[11px] font-semibold transition-colors"
                >
                  Email Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ======================================================== */}
      {/* 2. Center: Floating Capsule with Sliding Active Pill     */}
      {/* ======================================================== */}
      <div className="pointer-events-auto relative hidden md:block">
        <ul className="relative flex items-center gap-1 shadow-md bg-white/80 dark:bg-[#1c1936]/80 border border-gray-200/70 dark:border-white/15 text-sm font-semibold text-gray-700 dark:text-gray-200 backdrop-blur-xl rounded-full px-3 py-1.5 overflow-hidden transition-all">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative z-10">
                <Link
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-4 py-1.5 rounded-full transition-colors inline-block ${
                    isActive
                      ? "text-primary dark:text-white font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-[#bdb2ff]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#bdb2ff]/25 to-[#9bf6ff]/25 border border-[#bdb2ff]/40 -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Embedded 1.5px Pastel Gradient Scroll-Progress Ribbon */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200/30 dark:bg-white/10 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#ffadad] via-[#9bf6ff] to-[#bdb2ff] transition-all duration-150 origin-left"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </ul>
      </div>

      {/* ======================================================== */}
      {/* 3. Right: Theme Switch, Resume Download & Mobile Toggle  */}
      {/* ======================================================== */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        {/* Dark Mode Switch */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-2 rounded-full border border-gray-300/80 dark:border-gray-700 bg-white/80 dark:bg-[#1c1936]/80 backdrop-blur-md hover:border-primary dark:hover:border-[#bdb2ff] text-gray-700 dark:text-gray-200 transition-all shadow-sm relative overflow-hidden"
        >
          {mounted ? (
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <span className="w-4 h-4 block" />
          )}
        </button>

        <a
          href={personalDetails.resumeUrl}
          download
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs md:text-sm font-medium border border-gray-300/80 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary dark:hover:border-[#bdb2ff] dark:hover:text-[#bdb2ff] transition-all text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-[#1c1936]/80 backdrop-blur-md shadow-sm"
        >
          <span>Resume</span>
          <Download className="w-4 h-4" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-full border border-gray-300/80 dark:border-gray-700 bg-white/80 dark:bg-[#1c1936]/80 backdrop-blur-md text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-[#bdb2ff] transition-colors shadow-sm"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ======================================================== */}
      {/* 4. Mobile Drawer                                         */}
      {/* ======================================================== */}
      <div
        className={`pointer-events-auto fixed top-0 right-0 h-screen w-72 bg-white/95 dark:bg-[#121124]/95 backdrop-blur-2xl p-8 shadow-2xl z-50 transform transition-transform duration-300 md:hidden border-l border-gray-200 dark:border-white/10 flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-white/10">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              omkar<span className="text-primary font-black">.</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-base font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() => {
                      setActiveSection(link.id);
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#bdb2ff]/20 text-primary dark:text-[#bdb2ff] font-bold"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Theme Mode</span>
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-white/5"
            >
              {mounted && isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          <a
            href={personalDetails.resumeUrl}
            download
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md transition-all"
          >
            <span>Download Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
