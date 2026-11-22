import { content, siteConfig } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero({ locale }: { locale: Locale }) {
  const { hero, ui } = content[locale];

  return (
    <section id="top" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          {/* Disponibilité en tête : c'est la première question d'un recruteur. */}
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-fg">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            {hero.badge}
          </p>
          <h1 className="mt-6 text-fg">
            <span className="block text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
              {siteConfig.name}
            </span>
            <span className="mt-3 block text-2xl font-medium tracking-[-0.015em] text-accent sm:text-3xl">
              {siteConfig.title}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted sm:text-xl">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3"
            >
              {hero.primaryCta}
              <span aria-hidden="true">→</span>
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="outline" className="px-6 py-3">
              {hero.secondaryCta}
            </Button>
            <CopyEmailButton
              email={siteConfig.email}
              className="-ml-3 px-3 py-3 text-muted sm:ml-0"
              labels={{ copy: ui.copyEmail, copied: ui.emailCopied, copiedLive: ui.emailCopiedLive }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex max-w-4xl flex-wrap gap-2">
            {hero.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 lg:grid-cols-5">
            {hero.proof.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="mt-2 text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="order-first whitespace-nowrap font-mono text-2xl font-medium tabular-nums tracking-[-0.02em] text-fg sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
