import type { Config } from "tailwindcss";

const config: Config = {
  // ThemeProvider toggles "light" class on <html>
  // We handle theming via CSS variables, not Tailwind's dark: prefix
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These point to CSS variables defined in globals.css.
        // When ThemeProvider toggles html.light, the vars swap
        // automatically — every bg-dark-bg/text-muted etc. updates.
        "dark-bg":  "var(--bg)",
        "dark-bg2": "var(--bg2)",
        "dark-bg3": "var(--bg3)",

        // Semantic text colours (also CSS-var backed)
        "theme-text": "var(--text)",
        muted:        "var(--muted)",

        // Unified accent colors
        accent:    "#e8a622",
        "accent-hover": "#d5940c",
        "accent-2": "#e8a622", // Unified to prevent clashing shades
        "accent-3": "#0ea5e9", // High contrast clean blue for links

        // Light theme specific (kept for reference, vars handle switching)
        "light-bg":  "#fafafa",
        "light-bg2": "#f4f4f5",
        "light-bg3": "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        pulse2:   "pulse2 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%":     { opacity: "0.5", transform: "scale(0.8)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
