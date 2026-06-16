import SectionLabel from "@/components/ui/SectionLabel";
import Tag          from "@/components/ui/Tag";
import { PROJECTS } from "@/utils/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto fade-in-hidden">
        <SectionLabel>Projects</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
          Selected Work
        </h2>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-10">
          A mix of personal projects and freelance work - each one
          built to solve a real problem for real users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ label, title, problem, arch, stack, link }) => (
            <article
              key={title}
              aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-dark-bg3 border border-[var(--border)] rounded-xl p-7 sm:p-8
                         flex flex-col gap-4
                         hover:border-accent/40 hover:-translate-y-1
                         transition-all duration-[250ms] shadow-sm"
            >
              {/* Category label */}
              <p className="text-[11px] tracking-[1.5px] uppercase text-accent font-mono font-semibold">
                {label}
              </p>

              {/* Title */}
              <h3 id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-display font-bold leading-snug">{title}</h3>

              {/* Problem + What I built */}
              <div className="flex flex-col gap-3 text-xs text-muted leading-relaxed">
                <p>
                  <strong className="text-theme-text font-semibold">Problem: </strong>
                  {problem}
                </p>
                <p>
                  <strong className="text-theme-text font-semibold">What I built: </strong>
                  {arch}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              {/* Link */}
              <div className="pt-3 border-t border-[var(--border)] mt-2">
                {link ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${title}`}
                    className="inline-flex items-center gap-1.5 text-accent-3 text-xs font-semibold
                               hover:underline hover:opacity-80 transition-all duration-200"
                  >
                    ↗ Live Site
                  </a>
                ) : (
                  <span className="text-xs text-muted italic font-mono">
                    Client project · No public URL
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}