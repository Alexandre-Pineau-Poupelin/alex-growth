import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * La chaîne complète, du clic à la facture. Sur grand écran, sept colonnes reliées par
 * des flèches ; sur mobile, une liste verticale numérotée qui se lit de haut en bas.
 */
export function SystemDiagram({ locale }: { locale: Locale }) {
  const { system } = content[locale];

  return (
    <section id="systeme" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={system.eyebrow}
            title={system.title}
            description={system.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ol
            aria-label={system.ariaLabel}
            className="mt-12 grid gap-3 lg:grid-cols-7 lg:gap-0"
          >
            {system.stages.map((stage, i) => (
              <li key={stage.label} className="relative flex lg:flex-col">
                <div className="flex w-full items-start gap-4 rounded-lg border border-border bg-surface p-4 lg:mx-1.5 lg:w-auto lg:flex-1 lg:flex-col lg:gap-3">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-fg">{stage.label}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5 lg:flex-col lg:items-start">
                      {stage.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < system.stages.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-1.5 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 text-xs text-muted lg:block"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
