type PipelineDiagramProps = {
  steps: string[];
};

export function PipelineDiagram({ steps }: PipelineDiagramProps) {
  return (
    <ol aria-label="Schéma du système" className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded border border-border bg-bg px-3 py-1.5 font-mono text-xs text-fg">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="text-xs text-muted">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
