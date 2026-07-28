import { contact, siteConfig } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-muted">{contact.heading}</p>
          <p className="mt-4 max-w-prose text-2xl font-medium leading-snug text-fg sm:text-4xl">
            {contact.statement}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
            {contact.subtext}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Button href={`mailto:${siteConfig.email}`} className="w-fit px-6 py-3">
              {contact.emailLabel} — {siteConfig.email}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-muted">{contact.availabilityLabel}</dt>
              <dd className="mt-1 text-fg">{contact.availability}</dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="mt-1 text-fg">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
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
