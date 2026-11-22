import { skillBlocks } from "@/data/skills";
import { stackGroups } from "@/data/stack";
import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

/** Six blocs de compétences (ce que je fais, et comment), puis la stack d'outils. */
export function Skills({ locale }: { locale: Locale }) {
  const { skillsHeading, skillLabels } = content[locale];

  return (
    <section id="competences" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={skillsHeading.eyebrow}
            title={skillsHeading.title}
            description={skillsHeading.description}
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillBlocks[locale].map((block, i) => (
            <Reveal
              key={block.title}
              as="li"
              delay={(i % 3) * 0.05}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-fg">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{block.what}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                {skillLabels.how}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {block.how.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 id="stack" className="mt-16 scroll-mt-20 text-xl font-semibold tracking-[-0.015em] text-fg">
            {skillLabels.stackTitle}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups[locale].map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <h4 className="font-mono text-sm text-muted">{group.title}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li key={tool}>
                    <Badge>{tool}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
