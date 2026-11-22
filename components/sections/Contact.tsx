import { content, siteConfig } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact({ locale }: { locale: Locale }) {
  const { contact, ui } = content[locale];

  return (
    <section id="contact" className="scroll-mt-16 bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-muted">{contact.eyebrow}</p>
          <p className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-fg sm:text-5xl">
            {contact.statement}
          </p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
            {contact.roles}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3"
            >
              {contact.calendlyLabel}
              <span aria-hidden="true">→</span>
            </Button>
            <CopyEmailButton
              email={siteConfig.email}
              variant="outline"
              className="px-6 py-3"
              labels={{ copy: ui.copyEmail, copied: ui.emailCopied, copiedLive: ui.emailCopiedLive }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <dl className="mt-12 grid gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-muted">{contact.availabilityLabel}</dt>
              <dd className="mt-1 inline-flex items-center gap-2 text-fg">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
                {contact.availability}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1 break-all text-fg">{siteConfig.email}</dd>
            </div>
            <div>
              <dt className="text-muted">{contact.locationLabel}</dt>
              <dd className="mt-1 text-fg">{contact.location}</dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  alexandre-pineau-poupelin
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
