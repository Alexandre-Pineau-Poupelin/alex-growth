import type { CaseStudy } from "@/data/caseStudies";
import type { Locale } from "@/data/i18n";
import { content } from "@/data/content";
import { MetricStat } from "@/components/ui/MetricStat";
import { SalesMachineDiagram } from "@/components/case-study/SalesMachineDiagram";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  locale: Locale;
};

/** Une étude de cas en trois temps (problème, construit, comment), puis le résultat chiffré. */
export function CaseStudyCard({ caseStudy, locale }: CaseStudyCardProps) {
  const labels = content[locale].caseLabels;

  return (
    <article
      id={caseStudy.id}
      className="scroll-mt-20 rounded-xl border border-border bg-surface p-6 sm:p-8"
    >
      <p className="font-mono text-sm text-muted">
        {caseStudy.index} <span aria-hidden="true">·</span> {caseStudy.company}{" "}
        <span aria-hidden="true">·</span> {caseStudy.period}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.015em] text-fg sm:text-2xl">
        {caseStudy.title}
      </h3>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-muted">{labels.problem}</h4>
          <p className="mt-2 text-sm leading-relaxed text-fg">{caseStudy.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-muted">{labels.built}</h4>
          <p className="mt-2 text-sm leading-relaxed text-fg">{caseStudy.built}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-muted">{labels.how}</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {caseStudy.how.map((item) => (
              <li
                key={item}
                className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <h4 className="font-mono text-xs uppercase tracking-wide text-muted">{labels.result}</h4>
        {caseStudy.stats.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {caseStudy.stats.map((stat) => (
              <MetricStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        ) : null}
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          {caseStudy.result}
        </p>
      </div>

      {caseStudy.diagram === "sales-machine" ? (
        <div className="mt-8">
          <SalesMachineDiagram locale={locale} title={labels.diagramTitle} />
        </div>
      ) : null}

      {caseStudy.screenshot ? (
        <figure className="mt-8 overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseStudy.screenshot.src}
            alt={caseStudy.screenshot.alt}
            loading="lazy"
            className="w-full"
          />
        </figure>
      ) : null}
    </article>
  );
}
