import { personalDetails } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#bdb2ff]/20 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-[#fffffc] dark:bg-dark">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            omkar<span className="text-primary font-black">.</span>
          </span>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Built with Next.js (App Router), TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalDetails.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-[#bdb2ff] dark:hover:border-[#bdb2ff] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalDetails.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-[#bdb2ff] dark:hover:border-[#bdb2ff] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            aria-label="Send Email"
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-[#bdb2ff] dark:hover:border-[#bdb2ff] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} Omkar Kallekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

