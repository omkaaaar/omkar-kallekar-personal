"use client";

import { useState } from "react";
import { personalDetails } from "@/data/portfolioData";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Open user's default email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-16">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Let’s Connect
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Currently open to full-stack and React/frontend engineering opportunities at product companies and remote startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm">
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-4">
              Direct Contact
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalDetails.email}</span>
              </a>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-primary/10 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalDetails.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Feel free to send an email or reach out on LinkedIn to discuss technical roles, system design, or engineering collaborations.
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card shadow-sm space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your role or project..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Opening your email client to send the inquiry...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

