import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/utils/constants";


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-dark-bg2 py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto fade-in-hidden">
        <SectionLabel>Testimonials</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          What People Say
        </h2>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-10">
          Kind words from people I've worked with - colleagues, leads, and clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, name, role, company }) => (
            <div
              key={name}
              className="bg-dark-bg border border-[var(--border)] rounded-xl p-6
                         flex flex-col gap-5
                         hover:border-accent/40 transition-colors duration-[250ms]"
            >
              <span
                aria-hidden="true"
                className="text-4xl font-bold text-accent-2/30 leading-none"
              >
                "
              </span>

              <p className="text-sm text-muted leading-relaxed -mt-3">
                {quote}
              </p>

              <div className="mt-auto pt-4 border-t border-[var(--border)]">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-muted mt-0.5">
                  {role} · {company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}