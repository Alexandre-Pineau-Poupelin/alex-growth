import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Parcours"
            title="Expérience"
            description="Du copywriting au growth : chaque poste a ajouté une brique au système."
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
              {entry.detailHref ? (
                <a
                  href={entry.detailHref}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Voir les études de cas <span aria-hidden="true">↑</span>
                </a>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
