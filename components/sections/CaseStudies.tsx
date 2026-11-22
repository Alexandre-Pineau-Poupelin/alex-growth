import { caseStudies } from "@/data/caseStudies";
import { content } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies({ locale }: { locale: Locale }) {
  const heading = content[locale].caseStudiesHeading;

  return (
    <section id="etudes-de-cas" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {caseStudies[locale].map((cs) => (
            <Reveal key={cs.id}>
              <CaseStudyCard caseStudy={cs} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
