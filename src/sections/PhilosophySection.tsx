import SectionLabel from "@/components/ui/SectionLabel";
import { PHILOSOPHY_BLOCKS } from "@/utils/constants";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="bg-dark-bg2 py-28 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto fade-in-hidden">
        <SectionLabel>Philosophy</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight leading-tight mb-4">
          How I Think About
          <br />
          Building Software.
        </h2>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-6">
          I&apos;m early in my career, but I&apos;ve already picked up some principles
          that shape how I work and the kind of developer I want to become.
        </p>

        <hr className="border-[var(--border)] mb-10" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PHILOSOPHY_BLOCKS.map(({ title, body }) => (
            <div
              key={title}
              className="border-l-2 border-accent pl-5"
            >
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}