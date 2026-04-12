// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle";
// import { NAV_LINKS } from "@/utils/constants";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handleNavClick = () => setMenuOpen(false);

//   return (
//     <nav
//       aria-label="Main navigation"
//       className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]
//                  bg-[var(--nav-bg)] backdrop-blur-xl transition-colors duration-300"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-[60px]">

//         {/* Logo */}
//         <Link href="/" aria-label="Rutu Koladiya home"
//               className="text-[15px] font-semibold tracking-wide text-theme-text">
//           Rutu<span className="text-accent-2">.</span>
//         </Link>

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center gap-8" role="list">
//           {NAV_LINKS.map(({ label, href }) => (
//             <li key={href}>
//               <a href={href}
//                  className="text-[13px] text-muted hover:text-theme-text transition-colors duration-200">
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Right: theme toggle + hamburger */}
//         <div className="flex items-center gap-4">
//           <ThemeToggle />

//           {/* Hamburger — mobile only */}
//           <button
//             onClick={() => setMenuOpen((v) => !v)}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//             className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
//           >
//             <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-250
//                               ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
//             <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-250
//                               ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
//             <span className={`block h-[1.5px] bg-theme-text rounded transition-all duration-250
//                               ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile slide-down menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-96 border-t border-[var(--border)]" : "max-h-0"
//         }`}
//         aria-hidden={!menuOpen}
//       >
//         <ul className="flex flex-col px-5 py-5 gap-1" role="list">
//           {NAV_LINKS.map(({ label, href }) => (
//             <li key={href}>
//               <a href={href} onClick={handleNavClick}
//                  className="block text-sm text-muted hover:text-theme-text py-2 transition-colors duration-200">
//                 {label}
//               </a>
//             </li>
//           ))}
//           {/* Theme toggle row inside mobile drawer */}
//           <li className="mt-3 pt-3 border-t border-[var(--border)]">
//             <ThemeToggle variant="mobile" />
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false); // prevents scroll listener from overriding click

  const handleLinkClick = (href: string) => {
    const id = href.replace("#", "");
    setActiveSection(id);      // ← jump active immediately
    setMenuOpen(false);

    // suppress scroll listener for 800ms while page animates to target
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return; // ← skip during click-scroll animation

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link
          href="/"
          aria-label="Rutu Koladiya home"
          className="text-[15px] font-semibold tracking-wide text-theme-text"
        >
          Rutu<span className="text-accent-2">.</span>
        </Link>

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
                    className={`absolute -bottom-[2px] left-0 h-[1.5px] bg-accent-2 rounded-full
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
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-[var(--border)]" : "max-h-0"
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
                  className={`flex items-center gap-2.5 text-sm py-2 transition-colors duration-200
                    ${active ? "text-theme-text font-medium" : "text-muted hover:text-theme-text"}`}
                >
                  <span
                    className={`inline-block w-[5px] h-[5px] rounded-full bg-accent-2 shrink-0
                                transition-all duration-300
                                ${active ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  />
                  {label}
                </a>
              </li>
            );
          })}

          <li className="mt-3 pt-3 border-t border-[var(--border)]">
            <ThemeToggle variant="mobile" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
