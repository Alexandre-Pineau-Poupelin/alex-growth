"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { PipelineDiagram } from "@/components/case-study/PipelineDiagram";
import { CaseStudyDetail } from "@/components/case-study/CaseStudyDetail";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const detailId = `${caseStudy.id}-detail`;

  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-muted">{caseStudy.index}</p>
          <h3 className="mt-2 text-xl font-medium text-fg sm:text-2xl">{caseStudy.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {caseStudy.company} — {caseStudy.period}
          </p>
        </div>
        <Badge variant={caseStudy.resultType === "measured" ? "accent" : "default"}>
          {caseStudy.resultTypeLabel}
        </Badge>
      </div>

      <ul className="mt-6 space-y-2">
        {caseStudy.summary.map((line) => (
          <li key={line} className="max-w-prose text-sm leading-relaxed text-muted sm:text-base">
            {line}
          </li>
        ))}
      </ul>

      {caseStudy.stats.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {caseStudy.stats.map((stat) => (
            <MetricStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      ) : (
        <p className="mt-8 border-l-2 border-border pl-4 text-sm italic text-muted">
          Pas de métrique chiffrée disponible pour cette histoire — voir le détail pour le
          résultat qualitatif assumé.
        </p>
      )}

      <div className="mt-8">
        <PipelineDiagram steps={caseStudy.pipeline} />
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={detailId}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
      >
        {expanded ? "Masquer le détail" : "Voir le détail"}
        <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          shouldReduceMotion ? (
            <CaseStudyDetail caseStudy={caseStudy} id={detailId} />
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <CaseStudyDetail caseStudy={caseStudy} id={detailId} />
            </motion.div>
          )
        ) : null}
      </AnimatePresence>
    </article>
  );
}
