import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4338ca",
          hover: "#3730a3",
          light: "#6366f1",
        },
        dark: {
          DEFAULT: "#1a012e",
          card: "#260642",
          surface: "#120120",
        },
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;

