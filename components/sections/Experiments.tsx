import { experiments } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Experiments() {
  return (
    <section id="experiments" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Travaux annexes"
            title="Expérimentations"
            description="Travaux plus courts, en support des systèmes présentés plus haut."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((project, i) => (
            <Reveal
              key={project.title}
              as="li"
              delay={i * 0.05}
              className="list-none rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-base font-medium text-fg">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
