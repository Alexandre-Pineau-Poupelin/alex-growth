// Les cinq études de cas, en trois temps : problème, ce qui a été construit, comment.
// Les chiffres doivent rester identiques à ceux du CV (brief du 22 novembre 2026).
import type { Locale } from "@/data/i18n";
import type { Stat } from "@/data/content";

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  company: string;
  period: string;
  problem: string;
  built: string;
  /** Outils et méthode, affichés en étiquettes. */
  how: string[];
  stats: Stat[];
  /** Phrase de résultat (et, pour un cas sans chiffre, le point fort à retenir). */
  result: string;
  /** Schéma détaillé affiché sous le cas. */
  diagram?: "sales-machine";
  /** Capture réelle (dans public/screenshots/). Affichée seulement si elle existe. */
  screenshot?: { src: string; alt: string };
};

export const caseStudies: Record<Locale, CaseStudy[]> = {
  fr: [
    {
      id: "sales-machine",
      index: "01",
      title: "Sales machine : réactivation et qualification des leads",
      company: "Revolte",
      period: "2025 · six mois",
      problem:
        "600 leads dormants accumulés depuis des années, que personne n'exploitait, plus un flux de nouveaux leads sourcés par un prestataire externe (scraping, Lemlist, LinkedIn) à qualifier.",
      built:
        "Une machine qui requalifie, enrichit et route chaque lead vers l'un de trois scénarios selon ses coordonnées (message vocal et email, email seul, appel SDR), le relance sans réponse au bout de 24 h, puis le classe : les leads chauds partent en rendez-vous chez l'account executive, les tièdes et les froids restent en nurturing, les OUT sont écartés.",
      how: [
        "Requalification et enrichissement dans n8n",
        "4 ICP et buyer personas",
        "Routage vers 3 scénarios",
        "HubSpot",
        "Brevo",
        "Dropper",
        "Google Sheets (monitoring)",
        "Relance après 24 h",
        "Scoring SDR (chaud, tiède, froid, OUT)",
        "Nurturing",
        "Livre blanc",
        "Passage à l'account executive",
      ],
      stats: [
        { value: "322", label: "MQL" },
        { value: "24", label: "nouveaux clients" },
        { value: "368 K€+", label: "de CA signé" },
        { value: "~30", label: "leads enrichis, scorés et routés par jour" },
      ],
      result:
        "322 MQL, 24 nouveaux clients et plus de 368 000 € de chiffre d'affaires signé en six mois (formations, adhésions au réseau et matériel).",
      diagram: "sales-machine",
    },
    {
      id: "google-ads-formations",
      index: "02",
      title: "Refonte Google Ads des formations",
      company: "Revolte",
      period: "Août – nov. 2026",
      problem:
        "Les campagnes Google Ads des formations coûtaient 36 € par lead réel.",
      built:
        "Un nouveau positionnement des campagnes, avec des titres, des descriptions et des mots-clés réécrits, et un tracking qui mesure les leads réels.",
      how: ["Google Ads (Search)", "Positionnement", "Titres et descriptions", "Mots-clés", "Tracking"],
      stats: [
        { value: "36 € → 12 €", label: "coût par lead réel en trois mois" },
        { value: "~160", label: "leads" },
      ],
      result: "Coût par lead réel passé de 36 € à 12 € en trois mois, pour environ 160 leads.",
    },
    {
      id: "meta-ads-ia",
      index: "03",
      title: "Créations Meta Ads produites avec l'IA",
      company: "Revolte",
      period: "Automne 2026",
      problem:
        "Trouver le format de création Meta Ads qui génère les pré-inscriptions aux formations au coût le plus bas.",
      built:
        "Une vidéo et un carrousel produits avec Claude à partir d'un même brief, puis testés en parallèle.",
      how: ["Claude", "Un brief décliné en plusieurs angles", "Vidéo", "Carrousel", "Test en parallèle", "Meta Ads"],
      stats: [
        { value: "~25 €", label: "par pré-inscription avec la vidéo" },
        { value: "-40 %", label: "de coût par rapport au carrousel" },
      ],
      result:
        "La vidéo génère des pré-inscriptions autour de 25 €, 40 % moins chères que le carrousel.",
    },
    {
      id: "tracking-clic-facture",
      index: "04",
      title: "Tracking du clic à la facture",
      company: "Revolte, en freelance",
      period: "Mission freelance",
      problem:
        "Les leads déclarés par Google Ads et Meta ne disent pas quelles campagnes produisent des ventes : il faut relier chaque facture à sa source.",
      built:
        "Une chaîne qui suit chaque lead du clic publicitaire jusqu'à la facture, et renvoie les ventes réelles à Google Ads.",
      how: [
        "GTM",
        "Pixel Meta",
        "gclid / fbclid",
        "Champs cachés",
        "Google Sheets",
        "n8n",
        "HubSpot",
        "Conversions hors ligne Google Ads",
        "Pennylane",
      ],
      stats: [],
      result:
        "Les leads déclarés par les plateformes sont recoupés avec les formulaires réellement reçus : chaque vente est rattachée à la campagne qui l'a générée.",
    },
    {
      id: "seo-geo-ux-academie",
      index: "05",
      title: "SEO, GEO et UX de l'Académie Revolte",
      company: "Revolte",
      period: "2025",
      problem:
        "Les campagnes Google Ads amenaient du trafic vers les formations de l'Académie, mais les visiteurs remplissaient peu les formulaires. Et la structure du site rendait mal l'expertise visible, sur Google comme dans les réponses des assistants IA.",
      built:
        "Un audit SEO et UX, un tracking des points d'abandon, des pages et formulaires simplifiés, et une architecture de contenus organisée comme le métier : expertise, puis marques, modèles et pannes fréquentes par modèle.",
      how: [
        "Audit SEO et UX",
        "GTM (clics, CTA)",
        "GA4 (tunnel du formulaire)",
        "Refonte des pages",
        "Architecture de contenus",
        "Signaux d'autorité",
        "Articles de blog",
      ],
      stats: [
        { value: "+119 %", label: "trafic organique" },
        { value: "41 %", label: "des leads venus du SEO" },
        { value: "25 à 40", label: "leads par mois en inbound" },
      ],
      result:
        "Un pipeline inbound de 25 à 40 leads par mois, un trafic organique en hausse de 119 %, et le SEO à l'origine de 41 % des leads.",
    },
  ],

  en: [
    {
      id: "sales-machine",
      index: "01",
      title: "Sales machine: reactivating and qualifying leads",
      company: "Revolte",
      period: "2025 · six months",
      problem:
        "600 dormant leads built up over the years that nobody was working, plus a stream of new leads sourced by an outside vendor (scraping, Lemlist, LinkedIn) that needed qualifying.",
      built:
        "A machine that requalifies, enriches and routes each lead to one of three scenarios based on its contact details (voicemail and email, email only, SDR call), follows up after 24 hours without a reply, then scores it: hot leads go to a meeting with the account executive, warm and cold leads stay in nurturing, OUT leads are removed.",
      how: [
        "Requalification and enrichment in n8n",
        "4 ICPs and buyer personas",
        "Routing to 3 scenarios",
        "HubSpot",
        "Brevo",
        "Dropper",
        "Google Sheets (monitoring)",
        "24-hour follow-up",
        "SDR scoring (hot, warm, cold, OUT)",
        "Nurturing",
        "White paper",
        "Handoff to the account executive",
      ],
      stats: [
        { value: "322", label: "MQLs" },
        { value: "24", label: "new clients" },
        { value: "€368K+", label: "in signed revenue" },
        { value: "~30", label: "leads enriched, scored and routed per day" },
      ],
      result:
        "322 MQLs, 24 new clients and over €368,000 in signed revenue in six months (training courses, network memberships and equipment).",
      diagram: "sales-machine",
    },
    {
      id: "google-ads-formations",
      index: "02",
      title: "Google Ads overhaul for training courses",
      company: "Revolte",
      period: "Aug – Nov 2026",
      problem: "The Google Ads campaigns for training courses cost €36 per real lead.",
      built:
        "A new campaign positioning, with rewritten headlines, descriptions and keywords, and tracking that measures real leads.",
      how: ["Google Ads (Search)", "Positioning", "Headlines and descriptions", "Keywords", "Tracking"],
      stats: [
        { value: "€36 → €12", label: "real cost per lead in three months" },
        { value: "~160", label: "leads" },
      ],
      result: "Real cost per lead went from €36 to €12 in three months, for about 160 leads.",
    },
    {
      id: "meta-ads-ia",
      index: "03",
      title: "Meta Ads creatives produced with AI",
      company: "Revolte",
      period: "Fall 2026",
      problem:
        "Find the Meta Ads creative format that brings in training pre-registrations at the lowest cost.",
      built:
        "A video and a carousel produced with Claude from the same brief, then tested side by side.",
      how: ["Claude", "One brief, several angles", "Video", "Carousel", "Side-by-side test", "Meta Ads"],
      stats: [
        { value: "~€25", label: "per pre-registration with the video" },
        { value: "-40%", label: "cost compared with the carousel" },
      ],
      result:
        "The video brings in pre-registrations at around €25, 40% cheaper than the carousel.",
    },
    {
      id: "tracking-clic-facture",
      index: "04",
      title: "Tracking from click to invoice",
      company: "Revolte, freelance",
      period: "Freelance engagement",
      problem:
        "The leads reported by Google Ads and Meta don't show which campaigns produce sales: every invoice has to be tied back to its source.",
      built:
        "A chain that follows each lead from the ad click to the invoice, and sends real sales back to Google Ads.",
      how: [
        "GTM",
        "Meta Pixel",
        "gclid / fbclid",
        "Hidden fields",
        "Google Sheets",
        "n8n",
        "HubSpot",
        "Google Ads offline conversions",
        "Pennylane",
      ],
      stats: [],
      result:
        "Leads reported by the ad platforms are cross-checked against the forms actually received: every sale is tied to the campaign that generated it.",
    },
    {
      id: "seo-geo-ux-academie",
      index: "05",
      title: "SEO, GEO and UX for the Revolte Academy",
      company: "Revolte",
      period: "2025",
      problem:
        "Google Ads campaigns brought traffic to the Academy's training pages, but few visitors completed the forms. And the site structure made the expertise hard to see, on Google and in AI assistants' answers.",
      built:
        "An SEO and UX audit, tracking of drop-off points, simpler pages and forms, and a content architecture organized like the business: expertise, then brands, models and common faults for each model.",
      how: [
        "SEO and UX audit",
        "GTM (clicks, CTAs)",
        "GA4 (form funnel)",
        "Page redesign",
        "Content architecture",
        "Authority signals",
        "Blog articles",
      ],
      stats: [
        { value: "+119%", label: "organic traffic" },
        { value: "41%", label: "of leads from SEO" },
        { value: "25 to 40", label: "inbound leads per month" },
      ],
      result:
        "An inbound pipeline of 25 to 40 leads per month, organic traffic up 119%, and SEO behind 41% of leads.",
    },
  ],
};
