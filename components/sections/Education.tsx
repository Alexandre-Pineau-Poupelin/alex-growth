import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Background" title="Formation" />
        </Reveal>

        <ol className="mt-12 space-y-6">
          {education.map((entry, i) => (
            <Reveal
              key={entry.degree}
              as="li"
              delay={i * 0.05}
              className="flex flex-col gap-1 border-b border-border pb-6 last:border-none sm:flex-row sm:items-baseline sm:justify-between"
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
