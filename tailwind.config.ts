import type { Config } from "tailwindcss";
import { colors } from "./src/theme/colors";

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
        primary: colors.primary,
        dark: colors.dark,
        light: colors.light,
        pastel: colors.palette,
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
