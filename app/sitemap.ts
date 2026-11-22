import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: siteConfig.url, en: `${siteConfig.url}/en` };
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
