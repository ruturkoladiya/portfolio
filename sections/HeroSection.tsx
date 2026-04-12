"use client";

import Link from "next/link";
import Image from "next/image";

import { HERO_STATS } from "@/utils/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-20 px-4 sm:px-8 lg:px-16"
    >
      {/* Radial purple glow */}
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[500px]
                   bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.15)_0%,transparent_70%)]
                   pointer-events-none"
      />

      {/* Subtle dot-grid texture */}
      <div aria-hidden="true" className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full fade-in-hidden">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* LEFT: Text content */}
          <div className="flex-1 max-w-2xl">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 text-[12px] tracking-[1.5px] uppercase
                            text-accent-2 border border-accent-2/25 px-4 py-1.5 rounded-full mb-8">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse2"
              />
              Available for work · India
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.15] mb-4">
              Holla, I'm{" "}
              <span className="text-accent-2">Rutu Koladiya</span>
              <br />
              - I Build Things
              <br />
              for the Web.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed mb-10">
              Frontend Developer specialising in React and Next.js, with hands-on
              experience building full-stack apps. I write clean, maintainable code
              and ship products that actually work for real users, on real deadlines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                aria-label="View my work"
                className="px-7 py-3 rounded-lg text-sm font-medium bg-accent text-white
                           hover:bg-[#5a52e0] hover:-translate-y-px transition-all duration-200"
              >
                View Work
              </Link>
              <Link
                href="#cta"
                aria-label="Contact me"
                className="px-7 py-3 rounded-lg text-sm font-medium border border-white/20
                           hover:border-white/40 hover:-translate-y-px transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-14">
              {HERO_STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold">{num}</div>
                  <div className="text-xs text-muted tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Phot  ← photo in /public/images/ */}
            {/* <Image
              src="/images/rutu.jpg"  
              alt="Rutu Koladiya"
              width={340}
              height={340}
              className="rounded-2xl object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] ring-2 ring-accent-2/20"
              priority
            /> */}
        </div>
      </div>
    </section>
  );
}