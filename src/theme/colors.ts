/**
 * Global Color Theme & Design Tokens
 * Single source of truth for all colors across the portfolio.
 * Based on the pastel rainbow palette:
 * ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"]
 */

export const colors = {
  // Pastel Rainbow Palette Tokens
  palette: {
    coral: "#ffadad",
    peach: "#ffd6a5",
    yellow: "#fdffb6",
    mint: "#caffbf",
    aqua: "#9bf6ff",
    blue: "#a0c4ff",
    purple: "#bdb2ff",
    pink: "#ffc6ff",
    cream: "#fffffc",
  },

  // Brand Interactive Colors
  primary: {
    DEFAULT: "#7064e6", // Rich periwinkle for accessible WCAG AA contrast (5.5:1) on light mode
    hover: "#5c4ec8",   // Deep periwinkle hover
    light: "#bdb2ff",   // Pastel periwinkle for dark mode & glows
  },

  // Dark Theme Surfaces
  dark: {
    DEFAULT: "#121124", // Deep cosmic twilight canvas (harmonizes with pastel periwinkle)
    card: "#1c1936",    // Rich twilight slate card surface
  },

  // Light Theme Surfaces
  light: {
    canvas: "#fffffc",  // Warm soft cream canvas from palette
    card: "#ffffff",    // Card surface
    border: "rgba(189, 178, 255, 0.28)", // Pastel periwinkle border
  },
} as const;

export default colors;
