"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

import { HERO_STATS } from "@/utils/constants";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 px-4 sm:px-8 lg:px-16"
    >
      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[500px]
                   bg-[radial-gradient(ellipse_at_center,rgba(232,166,34,0.12)_0%,transparent_70%)]
                   pointer-events-none"
      />

      {/* Subtle dot-grid texture */}
      <div aria-hidden="true" className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full fade-in-hidden">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* LEFT: Text content */}
          <div className="flex-1 max-w-2xl">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[1.5px] uppercase
                            text-accent border border-accent/25 px-4 py-1.5 rounded-full mb-8">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2"
              />
              Available for Work · Remote / India
            </div>

            {/* Main heading */}
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold tracking-tight leading-[1.12] mb-5">
              Hello, I&apos;m{" "}
              <span className="text-accent">Rutu Koladiya</span>
              <br />
              Full Stack Developer.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed mb-10">
              I&apos;m a Full Stack Developer with over a year of experience building production-grade React.js and Next.js applications for healthcare and business platforms. I work across the entire stack, translating Figma designs into responsive frontends, building secure backend APIs with Node.js and Express.js, and managing PostgreSQL and MongoDB databases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="#projects">View Work</Button>
              <Button href="https://drive.google.com/file/d/1fY7ch5kiTIqTDANFeSxi2sX7MH0ftSNy/view?usp=drivesdk" variant="ghost" external>
                View Resume
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-14">
              {HERO_STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold font-mono">{num}</div>
                  <div className="text-xs text-muted tracking-wide mt-1 uppercase font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Video Component */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-up opacity-0 [animation-delay:400ms] -mt-10 lg:-mt-40">
            <div className="relative w-[200px] sm:w-[240px] md:w-[260px] lg:w-[360px] aspect-[9/16] overflow-hidden" aria-label="Introduction video of Rutu Koladiya">
              <video
                ref={videoRef}
                src="/rutu-intro.webm"
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                style={{
                  maskImage: "radial-gradient(ellipse at center, black 40%, transparent 92%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 92%)"
                }}
              >
                <track kind="captions" label="No dialogue" default />
              </video>
              {/* Mute/Unmute Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-zinc-950/60 border border-white/10 text-white backdrop-blur-md hover:bg-zinc-900/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="22" y1="9" x2="16" y2="15"></line>
                    <line x1="16" y1="9" x2="22" y2="15"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}