import { siteConfig } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center gap-6">
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
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </footer>
  );
}
