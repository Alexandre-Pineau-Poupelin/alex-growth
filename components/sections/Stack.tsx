import { stackGroups } from "@/data/stack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Outils" title="Stack & outils" />
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {stackGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <h3 className="font-mono text-sm text-muted">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
