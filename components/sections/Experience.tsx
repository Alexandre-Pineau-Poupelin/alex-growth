import { experience } from "@/data/experience";
import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience({ locale }: { locale: Locale }) {
  const { experienceHeading, experienceLabels } = content[locale];

  return (
    <section id="parcours" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={experienceHeading.eyebrow}
            title={experienceHeading.title}
            description={experienceHeading.description}
          />
        </Reveal>

        <ol className="mt-12 space-y-10 border-l border-border pl-6">
          {experience[locale].map((entry, i) => (
            <Reveal key={entry.role + entry.period} as="li" delay={i * 0.04} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-muted"
              />
              <p className="font-mono text-xs text-muted">{entry.period}</p>
              <h3 className="mt-1 text-base font-semibold text-fg">{entry.role}</h3>
              <p className="text-sm text-muted">{entry.company}</p>
              <ul className="mt-3 max-w-prose space-y-1.5">
                {entry.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-fg/85">
                    {h}
                  </li>
                ))}
              </ul>
              {entry.detailHref ? (
                <a
                  href={entry.detailHref}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {experienceLabels.seeCaseStudies} <span aria-hidden="true">↑</span>
                </a>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
