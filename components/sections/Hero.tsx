import { hero, proofStrip, siteConfig } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-muted">{siteConfig.location}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-xl text-muted sm:text-2xl">{hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-prose text-2xl font-medium leading-snug text-accent sm:text-3xl">
            {hero.tagline}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
            {hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <Button href={`mailto:${siteConfig.email}`} className="px-6 py-3">
              {hero.ctaLabel}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {proofStrip.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-medium text-fg sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
