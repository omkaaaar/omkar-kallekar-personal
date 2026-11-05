"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalDetails } from "@/data/portfolioData";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between ${
        isScrolled
          ? "bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <Link href="#home" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        omkar<span className="text-primary font-black">.</span>
      </Link>

      <ul className="hidden md:flex items-center gap-7 rounded-full px-10 py-2.5 shadow-sm bg-white/70 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-200 backdrop-blur-sm">
        <li>
          <Link href="#home" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark Mode Switch */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-white/5 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-200 transition-all shadow-sm"
        >
          {mounted ? (
            isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            )
          ) : (
            <span className="w-4 h-4 block" />
          )}
        </button>

        <a
          href={personalDetails.resumeUrl}
          download
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary transition-all text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-transparent"
        >
          <span>Resume</span>
          <Download className="w-4 h-4" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-dark p-8 shadow-2xl z-50 transform transition-transform duration-300 md:hidden border-l border-gray-200 dark:border-white/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-1 rounded text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-base font-medium text-gray-800 dark:text-gray-200">
          <li>
            <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Contact
            </Link>
          </li>
          <li className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Theme</span>
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
          </li>
          <li className="pt-2">
            <a
              href={personalDetails.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
