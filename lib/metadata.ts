import type { Metadata } from "next";
import { content, siteConfig } from "@/data/content";
import { localePath, type Locale } from "@/data/i18n";

/** Métadonnées d'une version linguistique, avec les liens hreflang vers l'autre version. */
export function buildMetadata(locale: Locale): Metadata {
  const { seo } = content[locale];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: localePath[locale],
      languages: {
        fr: localePath.fr,
        en: localePath.en,
        "x-default": localePath.fr,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      url: localePath[locale],
      title: seo.title,
      description: seo.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}
