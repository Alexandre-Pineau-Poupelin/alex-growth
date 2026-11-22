import { caseStudies } from "@/data/caseStudies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Travaux choisis"
            title="Études de cas"
            description="Trois façons dont j'ai résolu un problème d'acquisition ou de conversion — un résultat mesuré, un résultat qualitatif assumé, et une initiative stratégique en cours."
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.05}>
              <CaseStudyCard caseStudy={cs} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
