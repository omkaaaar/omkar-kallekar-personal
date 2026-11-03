"use client";

import { useState } from "react";
import { personalDetails } from "@/data/portfolioData";
import { Mail, MapPin, Copy, CheckCheck, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: silently fail — the mailto link below still works
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-16">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Currently open to full-stack and React/frontend engineering opportunities at product
          companies and remote startups.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
        {/* Card */}
        <div className="w-full p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm space-y-6">
          {/* Email row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-primary/10 text-primary shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                {personalDetails.email}
              </span>
            </div>
            <div className="flex gap-2 shrink-0">
              {/* Copy button */}
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              {/* mailto link */}
              <a
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-100 dark:border-white/10" />

          {/* LinkedIn row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-primary/10 text-primary shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn Profile</span>
            </div>
            <a
              href={personalDetails.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Profile</span>
            </a>
          </div>

          {/* Divider */}
          <hr className="border-gray-100 dark:border-white/10" />

          {/* Location */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-primary/10 text-primary shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span>{personalDetails.location}</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
          Feel free to reach out via email or LinkedIn to discuss engineering roles, system design,
          or collaborations.
        </p>
      </div>
    </section>
  );
}
