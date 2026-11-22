// Six blocs de compétences : ce qu'Alexandre fait, et comment (outils et méthode).
import type { Locale } from "@/data/i18n";

export type SkillBlock = {
  title: string;
  what: string;
  how: string[];
};

export const skillBlocks: Record<Locale, SkillBlock[]> = {
  fr: [
    {
      title: "Acquisition payante (SEA)",
      what: "Lance et pilote des campagnes, teste audiences, offres et créations.",
      how: [
        "Google Ads (Search)",
        "Meta Ads",
        "Refonte du positionnement",
        "Titres, descriptions et mots-clés",
      ],
    },
    {
      title: "Production publicitaire IA",
      what: "Produit vidéos, carrousels et déclinaisons d'annonces.",
      how: ["Claude", "Un brief décliné en plusieurs angles", "Angles testés en parallèle"],
    },
    {
      title: "SEO et GEO",
      what: "Rend le site visible sur Google et dans les réponses des IA.",
      how: [
        "Audit SEO et UX",
        "Architecture de contenus",
        "Signaux d'autorité",
        "Articles de blog",
        "Fiches Google Business Profile",
      ],
    },
    {
      title: "Tracking du clic au chiffre d'affaires",
      what: "Relie chaque vente à sa source.",
      how: [
        "GTM",
        "GA4",
        "Pixel Meta",
        "gclid / fbclid",
        "UTM",
        "Champs cachés",
        "Conversions hors ligne Google Ads",
        "Looker Studio",
        "BigQuery",
      ],
    },
    {
      title: "CRM et automatisation",
      what: "Qualifie, route et relance les leads sans tâche manuelle.",
      how: [
        "n8n",
        "HubSpot",
        "Brevo",
        "API",
        "Python",
        "Lead scoring",
        "Séquences par ICP",
        "Relances automatiques",
      ],
    },
    {
      title: "Tunnels de vente et copywriting",
      what: "Écrit et construit pages de capture, formulaires et séquences.",
      how: [
        "Landing pages",
        "Formulaires de qualification et de rappel",
        "Lead magnet",
        "5 ans de copywriting",
      ],
    },
  ],
  en: [
    {
      title: "Paid acquisition (SEA)",
      what: "Launches and runs campaigns, tests audiences, offers and creatives.",
      how: ["Google Ads (Search)", "Meta Ads", "Repositioning", "Headlines, descriptions and keywords"],
    },
    {
      title: "AI ad production",
      what: "Produces videos, carousels and ad variations.",
      how: ["Claude", "One brief, several angles", "Angles tested side by side"],
    },
    {
      title: "SEO and GEO",
      what: "Makes the site visible on Google and in AI assistants' answers.",
      how: [
        "SEO and UX audit",
        "Content architecture",
        "Authority signals",
        "Blog articles",
        "Google Business Profile listings",
      ],
    },
    {
      title: "Tracking from click to revenue",
      what: "Ties every sale to its source.",
      how: [
        "GTM",
        "GA4",
        "Meta Pixel",
        "gclid / fbclid",
        "UTM",
        "Hidden fields",
        "Google Ads offline conversions",
        "Looker Studio",
        "BigQuery",
      ],
    },
    {
      title: "CRM and automation",
      what: "Qualifies, routes and follows up on leads with no manual work.",
      how: [
        "n8n",
        "HubSpot",
        "Brevo",
        "APIs",
        "Python",
        "Lead scoring",
        "Sequences by ICP",
        "Automatic follow-ups",
      ],
    },
    {
      title: "Sales funnels and copywriting",
      what: "Writes and builds landing pages, forms and sequences.",
      how: [
        "Landing pages",
        "Qualification and callback forms",
        "Lead magnet",
        "5 years of copywriting",
      ],
    },
  ],
};
