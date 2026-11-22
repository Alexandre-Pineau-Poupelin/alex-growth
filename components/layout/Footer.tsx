import { content, siteConfig } from "@/data/content";
import type { Locale } from "@/data/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const { contact } = content[locale];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name} · {siteConfig.title}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-fg">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-fg"
          >
            LinkedIn
          </a>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
