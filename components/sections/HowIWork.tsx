import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowIWork({ locale }: { locale: Locale }) {
  const { method } = content[locale];

  return (
    <section id="methode" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow={method.eyebrow} title={method.title} />
        </Reveal>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {method.principles.map((principle, i) => (
            <Reveal key={principle.number} as="li" delay={i * 0.05}>
              <p className="font-mono text-sm text-muted">{principle.number}</p>
              <h3 className="mt-2 text-lg font-medium text-fg">{principle.title}</h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
