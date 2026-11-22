"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { PipelineDiagram } from "@/components/case-study/PipelineDiagram";
import { CaseStudyDetail } from "@/components/case-study/CaseStudyDetail";
import { spring } from "@/lib/motion";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailId = `${caseStudy.id}-detail`;

  return (
    <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-muted">{caseStudy.index}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.015em] text-fg sm:text-2xl">
            {caseStudy.title}
          </h3>
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

      {/* Pas de bandeau « pas de métrique » : le badge de résultat le dit déjà, et le
          répéter en italique attire l'œil sur ce qui manque plutôt que sur ce qui a été fait. */}
      {caseStudy.stats.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {caseStudy.stats.map((stat) => (
            <MetricStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      ) : null}

      <div className="mt-8">
        <PipelineDiagram steps={caseStudy.pipeline} />
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={detailId}
        className="group -mx-2 mt-6 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-medium text-fg transition-[color,transform] duration-100 hover:text-accent active:scale-[0.98]"
      >
        <span className="underline decoration-border underline-offset-4 group-hover:decoration-accent">
          {expanded ? "Masquer le détail" : "Voir le détail"}
        </span>
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="none"
          initial={false}
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={spring.snappy}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      {/* Ressort sans rebond : interruptible — recliquer pendant l'ouverture repart
          de la hauteur affichée, sans attendre la fin de l'animation. */}
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={spring.snappy}
            style={{ overflow: "hidden" }}
          >
            <CaseStudyDetail caseStudy={caseStudy} id={detailId} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
