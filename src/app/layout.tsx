import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Omkar Kallekar | Full-Stack & Frontend Software Engineer",
  description:
    "Portfolio of Omkar Kallekar, Associate Software Engineer at Accenture specializing in React, TypeScript, Node.js, and serverless cloud architectures.",
  icons: {
    icon: "/images/profile-img.jpg",
  },
  openGraph: {
    title: "Omkar Kallekar | Full-Stack & Frontend Software Engineer",
    description:
      "Portfolio of Omkar Kallekar, Associate Software Engineer at Accenture specializing in React, TypeScript, Node.js, and serverless cloud architectures.",
    url: "https://omkar-kallekar.vercel.app/",
    siteName: "Omkar Kallekar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Kallekar | Full-Stack & Frontend Software Engineer",
    description:
      "Portfolio of Omkar Kallekar, Associate Software Engineer at Accenture specializing in React, TypeScript, Node.js, and serverless cloud architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

