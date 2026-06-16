"use client";

import { useTheme } from "@/components/ThemeProvider";

// Inline SVG icons — lightweight, no dependency
function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

interface ThemeToggleProps {
  /** Pass "mobile" to render inline (for the mobile nav drawer) */
  variant?: "default" | "mobile";
}

export default function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "mobile") {
    // Simple row button for the mobile menu
    return (
      <button
        onClick={toggleTheme}
        role="switch"
        aria-checked={!isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex items-center gap-3 text-sm text-muted hover:text-theme-text
                   py-1.5 transition-colors duration-200 w-full
                   focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <PillToggle isDark={isDark} />
        <span>{isDark ? "Light mode" : "Dark mode"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-full"
    >
      <PillToggle isDark={isDark} />
    </button>
  );
}

// The reusable animated pill
function PillToggle({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="relative flex items-center w-[56px] h-7 rounded-full px-1
                 border border-[var(--border)] bg-dark-bg3
                 transition-colors duration-300"
      aria-hidden="true"
    >
      {/* Sun icon — left side */}
      <span className={`flex-1 flex items-center justify-center z-10 transition-colors duration-300
                        ${!isDark ? "text-zinc-950" : "text-muted"}`}>
        <SunIcon />
      </span>

      {/* Moon icon — right side */}
      <span className={`flex-1 flex items-center justify-center z-10 transition-colors duration-300
                        ${isDark ? "text-zinc-950" : "text-muted"}`}>
        <MoonIcon />
      </span>

      {/* Sliding thumb */}
      <span
        className={`absolute top-[3px] w-[22px] h-[22px] rounded-full
                    bg-accent shadow-sm transition-all duration-300 ease-in-out
                    ${isDark ? "left-[29px]" : "left-[3px]"}`}
      />
    </div>
  );
}
