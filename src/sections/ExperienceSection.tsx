import SectionLabel from "@/components/ui/SectionLabel";
import { TIMELINE_ITEMS } from "@/utils/constants";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-dark-bg2 py-28 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto fade-in-hidden">
        <SectionLabel>Experience</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
          Work History
        </h2>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-10">
          1+ year of professional experience across three companies
          from internship to full-time engineering.
        </p>

        <ol className="border-l border-[var(--border)]" aria-label="Work experience timeline">
          {TIMELINE_ITEMS.map(({ period, role, company, points }) => (
            <li key={role} className="pl-8 sm:pl-10 pb-12 relative">

              {/* Dot marker */}
              <span
                aria-hidden="true"
                className="absolute left-[-5px] top-1.5 w-2.5 h-2.5
                           rounded-full bg-accent border-2 border-[var(--bg2)]"
              />

              <p className="text-[12px] text-accent-2 tracking-wide font-medium mb-1">
                {period}
              </p>

              <h3 className="text-base sm:text-lg font-semibold mb-0.5">
                {role}
              </h3>

              <p className="text-sm text-muted mb-4">{company}</p>

              <ul
                className="flex flex-col gap-2"
                aria-label={`Responsibilities at ${company}`}
              >
                {points.map((p) => (
                  <li
                    key={p}
                    className="relative text-sm text-muted leading-relaxed pl-5
                               before:absolute before:left-0 before:top-0
                               before:text-accent before:content-['→'] before:text-xs
                               before:leading-relaxed"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}