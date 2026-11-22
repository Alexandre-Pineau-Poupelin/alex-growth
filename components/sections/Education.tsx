import { education } from "@/data/education";
import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education({ locale }: { locale: Locale }) {
  const heading = content[locale].educationHeading;

  return (
    <section id="formation" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} />
        </Reveal>

        <ol className="mt-12 space-y-6">
          {education[locale].map((entry, i) => (
            <Reveal
              key={entry.degree}
              as="li"
              delay={i * 0.05}
              className="flex flex-col gap-1 border-b border-border pb-6 last:border-none sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-sm font-medium text-fg">{entry.degree}</p>
                <p className="text-sm text-muted">{entry.school}</p>
              </div>
              <p className="font-mono text-xs text-muted">{entry.year}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
