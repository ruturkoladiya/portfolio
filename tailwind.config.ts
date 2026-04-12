import type { Config } from "tailwindcss";

const config: Config = {
  // ThemeProvider toggles "light" class on <html>
  // We handle theming via CSS variables, not Tailwind's dark: prefix
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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

        // Fixed accent colours (same in both themes)
        accent:    "#6c63ff",
        "accent-2": "#a78bfa",
        "accent-3": "#38bdf8",

        // Light theme specific (kept for reference, vars handle switching)
        "light-bg":  "#f8f8fc",
        "light-bg2": "#f0f0f7",
        "light-bg3": "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
