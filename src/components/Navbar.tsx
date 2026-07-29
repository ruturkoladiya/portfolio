"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = useCallback((href: string) => {
    const id = href.replace("#", "");
    setActiveSection(id);
    setMenuOpen(false);

    // suppress scroll listener for 800ms while page animates to target
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }, []);

  // Single merged scroll listener for both active section tracking and navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      if (isClickScrolling.current) return;

      const scrollY = window.scrollY + 80;
      const sectionIds = NAV_LINKS
        .map(({ href }: { href: string }) => href.replace("#", ""))
        .filter(Boolean);

      let currentSection = "";
      sectionIds.forEach((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= scrollY) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Focus trap inside mobile menu when open
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableEls = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length === 0) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    menu.addEventListener("keydown", trapFocus);
    firstEl.focus();

    return () => menu.removeEventListener("keydown", trapFocus);
  }, [menuOpen]);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]
                  bg-[var(--nav-bg)] backdrop-blur-xl transition-all duration-300
                  ${scrolled ? "shadow-[0_1px_16px_rgba(0,0,0,0.07)]" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-[60px]">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            setActiveSection("hero");
          }}
          aria-label="Rutu Koladiya - Back to Top"
          className="text-[15px] font-semibold tracking-wide text-theme-text cursor-pointer
                     min-w-[44px] min-h-[44px] flex items-center"
        >
          Rutu<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }: { label: string; href: string }) => {
            const active = isActive(href);
            return (
              <li key={href} className="relative">
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[13px] font-medium transition-colors duration-200 py-1
                    ${active ? "text-theme-text" : "text-muted hover:text-theme-text"}`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-[2px] left-0 h-[1.5px] bg-accent rounded-full
                                transition-all duration-300 ease-out
                                ${active ? "w-full opacity-100" : "w-0 opacity-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: theme toggle + hamburger */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 p-2
                       focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
          >
            <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-300
                              ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-300
                              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-300
                              ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        ref={menuRef}
        id="mobile-nav-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-[var(--border)]" : "max-h-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-5 py-5 gap-1" role="list">
          {NAV_LINKS.map(({ label, href }: { label: string; href: string }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`flex items-center gap-2.5 text-sm py-2 transition-colors duration-200
                    min-h-[44px]
                    ${active ? "text-theme-text font-medium" : "text-muted hover:text-theme-text"}`}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0
                                transition-all duration-300
                                ${active ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
