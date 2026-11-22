import type { ReactNode } from "react";
import { salesMachine } from "@/data/salesMachine";
import type { Locale } from "@/data/i18n";
import { cn } from "@/lib/utils";

const toneStyles = {
  hot: "border-emerald-500/50 bg-emerald-500/10",
  warm: "border-amber-500/50 bg-amber-500/10",
  cold: "border-sky-500/40 bg-sky-500/10",
  out: "border-dashed border-border bg-bg",
} as const;

/** Flèche verticale entre deux étapes. */
function Down() {
  return (
    <div aria-hidden="true" className="flex justify-center py-2 text-muted">
      <svg viewBox="0 0 12 20" width="12" height="20" fill="none">
        <path
          d="M6 1v17M1.5 13.5L6 18l4.5-4.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded bg-accent px-1.5 py-0.5 font-mono text-[11px] font-medium text-accent-fg">
      {children}
    </span>
  );
}

function Step({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4">
      <div className="flex flex-wrap items-center gap-2">
        <StepLabel>{label}</StepLabel>
        <p className="text-sm font-medium text-fg">{title}</p>
      </div>
      {children}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Schéma « Sales Machine V2 », publié en entier : entrée des leads, routage vers trois
 * branches selon des conditions précises, relances automatiques à 24 h, scoring SDR,
 * monitoring et résultat. Construit en HTML pour rester lisible sur mobile, traduisible
 * et indexable.
 */
export function SalesMachineDiagram({ locale, title }: { locale: Locale; title: string }) {
  const d = salesMachine[locale];

  return (
    <figure className="rounded-lg border border-border bg-bg p-4 sm:p-6">
      <figcaption className="font-mono text-xs uppercase tracking-wide text-muted">{title}</figcaption>

      <div className="mt-5">
        {/* Étape 1 */}
        <Step label={d.step1.label} title={d.step1.title}>
          <p className="mt-2 text-sm text-muted">{d.step1.sources}</p>
          <p className="mt-3 text-xs text-muted">{d.step1.fieldsLabel}</p>
          <Chips items={d.step1.fields} />
          <ul className="mt-3 space-y-1">
            {d.step1.then.map((t) => (
              <li key={t} className="text-sm text-fg">
                <span aria-hidden="true" className="text-muted">→ </span>
                {t}
              </li>
            ))}
          </ul>
        </Step>
        <Down />

        {/* Étapes 2 et 3 : conditions de routage, puis workflow de chaque branche */}
        <Step label={d.step2.label} title={d.step2.title}>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {d.branches.map((b) => (
              <li key={b.id} className="flex flex-col rounded-md border border-accent/30 bg-accent/5 p-3">
                <p className="font-mono text-xs text-accent">
                  {locale === "fr" ? "Branche" : "Branch"} {b.id} · {b.workflow}
                </p>
                <p className="mt-2 text-sm font-medium text-fg">{b.condition}</p>
                <ul className="mt-1 space-y-0.5">
                  {b.rules.map((r) => (
                    <li key={r} className="text-xs text-muted">
                      {r}
                    </li>
                  ))}
                </ul>

                <div aria-hidden="true" className="my-3 flex justify-center text-muted">↓</div>

                <div className="flex flex-1 flex-col rounded border border-border bg-surface p-3">
                  <StepLabel>
                    {d.branchesStep3Label}.{b.step.split(".")[1]} · {b.workflow}
                  </StepLabel>
                  <ul className="mt-2 flex-1 space-y-1">
                    {b.actions.map((a) => (
                      <li key={a} className="text-xs leading-relaxed text-fg">
                        {a}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 rounded bg-bg px-2 py-1 font-mono text-[11px] text-fg">
                    {b.property}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Step>
        <Down />

        {/* Étape 4 : règles de suivi à 24 h et scoring SDR */}
        <Step label={d.step4.label} title={d.step4.title}>
          <ul className="mt-3 divide-y divide-border rounded-md border border-border bg-bg">
            {d.step4.rules.map((r) => (
              <li key={r.case} className="grid gap-1 p-3 text-sm sm:grid-cols-[1.1fr_1.2fr_1.4fr] sm:items-center sm:gap-3">
                <span className="font-medium text-fg">{r.case}</span>
                <span className="text-muted">{r.trigger}</span>
                <span className="text-fg">
                  <span aria-hidden="true" className="text-muted">→ </span>
                  {r.action}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-muted">{d.step4.sdrTitle}</p>
          <ul className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {d.step4.outcomes.map((o) => (
              <li key={o.sdr} className={cn("rounded border p-3", toneStyles[o.tone])}>
                <p className="text-sm font-medium text-fg">{o.sdr}</p>
                <p className="mt-0.5 font-mono text-xs text-fg">{o.temperature}</p>
                <p className="mt-1 text-xs text-muted">→ {o.next}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">{d.support}</p>
        </Step>
        <Down />

        {/* Étape 5 : monitoring */}
        <Step label={d.step5.label} title={d.step5.title}>
          <p className="mt-2 text-sm text-muted">{d.step5.detail}</p>
          <p className="mt-3 text-xs text-muted">{d.step5.logsLabel}</p>
          <Chips items={d.step5.logs} />
          <p className="mt-3 text-sm text-fg">
            <span aria-hidden="true" className="text-muted">→ </span>
            {d.step5.sheet}
          </p>
        </Step>
        <Down />

        {/* Étape 6 : résultat */}
        <Step label={d.step6.label} title={d.step6.title}>
          <p className="mt-2 font-mono text-xs text-fg">{d.step6.sync}</p>
          <p className="mt-2 text-sm text-muted">{d.step6.sentence}</p>
        </Step>
      </div>
    </figure>
  );
}
