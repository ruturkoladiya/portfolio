"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

// Types
type FormState = "idle" | "submitting" | "success" | "error";

interface Fields {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

interface Errors {
  name?:    string;
  email?:   string;
  subject?: string;
  message?: string;
}

// Validation 
function validate(fields: Fields): Errors {
  const e: Errors = {};
  if (!fields.name.trim())                                           e.name    = "Name is required.";
  if (!fields.email.trim())                                          e.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))        e.email   = "Enter a valid email address.";
  if (!fields.subject.trim())                                        e.subject = "Subject is required.";
  if (!fields.message.trim())                                        e.message = "Message is required.";
  else if (fields.message.trim().length < 20)                        e.message = "Please write at least 20 characters.";
  return e;
}

// Reusable input field
function Field({
  label, id, type = "text", value, onChange, error, placeholder, rows, autoComplete,
}: {
  label: string; id: string; type?: string; value: string;
  onChange: (v: string) => void; error?: string;
  placeholder?: string; rows?: number; autoComplete?: string;
}) {
  const base = `
    w-full bg-dark-bg text-theme-text text-sm
    border rounded-lg px-4 py-3 outline-none
    placeholder:text-muted/50
    transition-all duration-200
    ${error
      ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
      : "border-[var(--border)] focus:border-accent focus:ring-2 focus:ring-accent/20"
    }
  `;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-muted uppercase tracking-wider">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id} rows={rows} value={value} placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id} type={type} value={value} placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          autoComplete={autoComplete}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400 flex items-center gap-1">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  );
}

// Main Section 
export default function CTASection() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormState>("idle");

  const set = (key: keyof Fields) => (val: string) => {
    setFields((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("submitting");

    try {
      // POST to Next.js API route (/app/api/contact/route.ts)
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(fields),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch(error) {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFields({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 px-4 sm:px-8 lg:px-16"
    >
      {/* Radial glow */}
      <div aria-hidden="true"
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2
                   w-[700px] h-[500px] pointer-events-none
                   bg-[radial-gradient(ellipse_at_center,rgba(232,166,34,0.12)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto fade-in-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info panel */}
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight leading-tight mb-5">
              Got a Project
              <br />
              in Mind?
            </h2>

            <p className="text-base text-muted leading-relaxed mb-10 max-w-md">
              I&apos;m open to frontend and full-stack roles, and available
              for freelance projects. Whether it&apos;s a new product, a feature,
              or just a question - feel free to reach out.
            </p>

            {/* Contact meta */}
            <div className="flex flex-col gap-4 mb-8">
              <InfoRow icon={<MailIcon />} label="Email">
                <a
                  href="mailto:ruturkoladiya@gmail.com"
                  className="text-accent hover:underline transition-opacity hover:opacity-80"
                >
                  ruturkoladiya@gmail.com
                </a>
              </InfoRow>

              <InfoRow icon={<PinIcon />} label="Location">
                <span className="text-theme-text">India · Open to Remote</span>
              </InfoRow>

              <InfoRow icon={<ClockIcon />} label="Availability">
                <span className="flex items-center gap-2 text-theme-text">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new opportunities
                </span>
              </InfoRow>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="https://linkedin.com/in/rutu-koladiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-sm text-muted
                           hover:text-accent transition-colors duration-200"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <span className="text-muted/30">·</span>
              <a
                href="https://github.com/ruturkoladiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-sm text-muted
                           hover:text-accent transition-colors duration-200"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>

          {/* Right — form panel */}
          <div className="bg-dark-bg3 border border-[var(--border)] rounded-2xl p-8 sm:p-10" aria-live="polite">

            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-5" role="status">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25
                                flex items-center justify-center">
                  <CheckIcon />
                </div>
                <div>
                  <p className="text-lg font-semibold text-theme-text mb-2">Message sent!</p>
                  <p className="text-sm text-muted leading-relaxed">
                    Thanks for reaching out. I&apos;ll get back to you within 1-2 business days.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-2 text-sm text-accent hover:underline transition-opacity hover:opacity-75"
                >
                  Send another message
                </button>
              </div>

            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <p className="text-base font-semibold text-theme-text mb-1">Send a message</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="name"  label="Your name"     value={fields.name}
                         onChange={set("name")}  error={errors.name}
                         placeholder="John Smith" autoComplete="name" />
                  <Field id="email" label="Email address" type="email" value={fields.email}
                         onChange={set("email")} error={errors.email}
                         placeholder="you@company.com" autoComplete="email" />
                </div>

                <Field id="subject" label="Subject" value={fields.subject}
                       onChange={set("subject")} error={errors.subject}
                       placeholder="e.g. Frontend Role at Acme" />

                <Field id="message" label="Message" value={fields.message}
                       onChange={set("message")} error={errors.message}
                       placeholder="Tell me about the project, stack, and what you're building…"
                       rows={5} />

                {/* Error state */}
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    Something went wrong. Please try again or email me directly at{" "}
                    <a href="mailto:ruturkoladiya@gmail.com" className="underline">
                      ruturkoladiya@gmail.com
                    </a>
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-1 w-full py-3.5 rounded-lg text-sm font-medium
                             bg-accent text-white transition-all duration-200
                             hover:bg-accent-hover hover:-translate-y-px
                             disabled:opacity-60 disabled:cursor-not-allowed
                             disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <SpinnerIcon />
                      Sending…
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p className="text-xs text-muted text-center">
                  I typically respond within 1-2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-components
function InfoRow({
  icon, label, children,
}: {
  icon: React.ReactNode; label: string; children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-dark-bg3 border border-[var(--border)]
                       flex items-center justify-center text-accent">
        {icon}
      </span>
      <div>
        <p className="text-[11px] text-muted uppercase tracking-wider mb-0.5">{label}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}

// Icons
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399"
         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function SpinnerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"
         className="animate-spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}