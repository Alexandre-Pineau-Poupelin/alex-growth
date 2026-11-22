import { hero, proofStrip, siteConfig } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          {/* Disponibilité en tête : c'est la première question d'un recruteur. */}
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-fg">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
            {siteConfig.availability}
            <span className="hidden text-muted sm:inline">· {siteConfig.availabilityDetail}</span>
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-xl text-muted sm:text-2xl">
            {hero.eyebrow} <span aria-hidden="true">·</span> {siteConfig.location}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-prose text-2xl font-medium leading-snug tracking-[-0.015em] text-accent sm:text-3xl">
            {hero.tagline}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
            {hero.description}
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
            <CopyEmailButton email={siteConfig.email} className="-ml-3 px-3 py-3 text-muted sm:ml-0" />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {proofStrip.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="mt-1 text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="order-first font-mono text-3xl font-medium tabular-nums tracking-[-0.02em] text-fg sm:text-4xl">
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
