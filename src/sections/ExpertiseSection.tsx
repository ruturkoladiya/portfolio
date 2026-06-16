import SectionLabel from "@/components/ui/SectionLabel";
import Tag          from "@/components/ui/Tag";
import { EXPERTISE_CARDS } from "@/utils/constants";

// Map colour key → Tailwind background class
const iconBg: Record<string, string> = {
  purple: "bg-accent/10",
  teal:   "bg-accent-3/10",
  amber:  "bg-yellow-400/10",
  pink:   "bg-pink-400/10",
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto fade-in-hidden">
        <SectionLabel>Expertise</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
          What I Actually Work With
        </h2>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-10">
          Skills I use regularly in production, on real projects,
          with real constraints.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" role="list">
          {EXPERTISE_CARDS.map(({ icon, color, title, body, tags }) => (
            <div
              key={title}
              role="listitem"
              className="bg-dark-bg3 border border-[var(--border)] rounded-xl p-7
                         flex flex-col gap-4
                         hover:border-accent/40 hover:-translate-y-1
                         transition-all duration-[250ms]"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg
                            ${iconBg[color]}`}
                aria-hidden="true"
              >
                {icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{body}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}