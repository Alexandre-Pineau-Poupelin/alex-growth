import { systemPipeline } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SystemDiagram() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="System"
            title={systemPipeline.title}
            description={systemPipeline.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ol
            aria-label="Pipeline d'acquisition, du clic payant au reporting"
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {systemPipeline.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-sm text-fg">
                  {step}
                </span>
                {i < systemPipeline.steps.length - 1 ? (
                  <span aria-hidden="true" className="text-muted">
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
