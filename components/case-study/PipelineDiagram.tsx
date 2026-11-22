type PipelineDiagramProps = {
  steps: string[];
};

/**
 * Sur grand écran : une chaîne d'étapes reliées par des flèches.
 * Sur mobile, les lignes se coupent et les flèches restaient suspendues en bout de
 * ligne : on numérote plutôt chaque étape, l'ordre reste lisible quel que soit le retour à la ligne.
 */
export function PipelineDiagram({ steps }: PipelineDiagramProps) {
  return (
    <ol aria-label="Schéma du système" className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded border border-border bg-bg px-3 py-1.5 font-mono text-xs text-fg">
            <span className="text-muted sm:hidden">{i + 1}.</span>
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="hidden text-xs text-muted sm:inline">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
