import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="Experience"
            description="Le détail de Revolte est dans les Case Studies ci-dessus. Le reste du parcours, en bref."
          />
        </Reveal>

        <ol className="mt-12 space-y-8 border-l border-border pl-6">
          {experience.map((entry, i) => (
            <Reveal key={entry.company + entry.period} as="li" delay={i * 0.05}>
              <p className="font-mono text-xs text-muted">{entry.period}</p>
              <h3 className="mt-1 text-base font-medium text-fg">{entry.role}</h3>
              <p className="text-sm text-muted">{entry.company}</p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                {entry.highlight}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
