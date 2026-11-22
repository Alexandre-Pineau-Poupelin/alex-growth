import type { Locale } from "@/data/i18n";
import { content } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleSync } from "@/components/i18n/LocaleSync";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { SystemDiagram } from "@/components/sections/SystemDiagram";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

/** La page unique, dans l'ordre du brief. Partagée par / (français) et /en (anglais). */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <LocaleSync locale={locale} />
      <a
        href="#main-content"
        className="sr-only-focusable fixed left-4 top-4 z-[60] rounded-md bg-fg px-4 py-2 text-sm text-bg"
      >
        {content[locale].ui.skipLink}
      </a>
      <Header locale={locale} />
      <main id="main-content" className="flex-1">
        <Hero locale={locale} />
        <HowIWork locale={locale} />
        <SystemDiagram locale={locale} />
        <CaseStudies locale={locale} />
        <Skills locale={locale} />
        <Experience locale={locale} />
        <Education locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
