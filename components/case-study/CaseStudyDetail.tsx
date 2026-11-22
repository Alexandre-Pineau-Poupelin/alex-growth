import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
  id: string;
};

const fields: Array<{ key: keyof CaseStudy["detail"]; label: string }> = [
  { key: "context", label: "Contexte" },
  { key: "problem", label: "Problème observé" },
  { key: "hypothesis", label: "Hypothèse" },
  { key: "investigation", label: "Investigation" },
  { key: "solution", label: "Solution mise en œuvre" },
  { key: "results", label: "Résultats" },
  { key: "learning", label: "Enseignement" },
];

export function CaseStudyDetail({ caseStudy, id }: CaseStudyDetailProps) {
  return (
    <div id={id} className="mt-8 space-y-6 border-t border-border pt-8">
      {fields.map(({ key, label }) => {
        const value = caseStudy.detail[key];
        if (!value) return null;
        return (
          <div key={key}>
            <h4 className="font-mono text-xs uppercase tracking-wide text-muted">{label}</h4>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-fg">{value}</p>
          </div>
        );
      })}

      {/* Les captures ne s'affichent que lorsqu'elles existent vraiment : un cadre
          « emplacement réservé » donne au recruteur l'impression d'un site inachevé. */}
      {caseStudy.screenshot ? (
        <figure className="overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseStudy.screenshot.src}
            alt={caseStudy.screenshot.alt}
            loading="lazy"
            className="w-full"
          />
        </figure>
      ) : null}
    </div>
  );
}
