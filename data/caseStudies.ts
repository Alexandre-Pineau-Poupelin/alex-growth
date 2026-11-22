// Les trois études de cas, en trois temps : problème, ce qui a été construit, comment.
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
        "Une machine qui requalifie, enrichit et route chaque lead vers l'un de trois scénarios selon ses coordonnées (message vocal et email, email seul, appel SDR), le relance sans réponse au bout de 24 h, puis le classe : les leads chauds partent en rendez-vous chez l'account executive, les tièdes repassent aux SDR, les froids restent en nurturing, les OUT sont écartés.",
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
      id: "acquisition-payante",
      index: "02",
      title: "Acquisition payante : coût par lead divisé par trois",
      company: "Revolte",
      period: "Août – nov. 2026",
      problem:
        "Les campagnes Google Ads des formations coûtaient 36 € par lead réel, et il fallait trouver le format de création Meta Ads qui génère les pré-inscriptions les moins chères.",
      built:
        "Sur Google Ads, un nouveau positionnement des campagnes, avec titres, descriptions et mots-clés réécrits, et un tracking qui mesure les leads réels. Sur Meta Ads, une vidéo et un carrousel produits avec Claude à partir d'un même brief, testés en parallèle.",
      how: [
        "Google Ads (Search)",
        "Positionnement",
        "Titres, descriptions et mots-clés",
        "Meta Ads",
        "Créations produites avec Claude",
        "Un brief décliné en plusieurs angles",
        "Test en parallèle",
        "Tracking des leads réels",
      ],
      stats: [
        { value: "÷ 3", label: "coût par lead réel Google Ads en trois mois (36 € → 12 €)" },
        { value: "~160", label: "leads Google Ads sur la période" },
        { value: "-40 %", label: "coût par pré-inscription : vidéo contre carrousel" },
        { value: "~25 €", label: "par pré-inscription avec la vidéo" },
      ],
      result:
        "Coût par lead réel divisé par trois sur Google Ads en trois mois, de 36 € à 12 €, pour environ 160 leads. Sur Meta Ads, la vidéo produite avec Claude génère des pré-inscriptions autour de 25 €, 40 % moins chères que le carrousel.",
    },
    {
      id: "tracking-clic-facture",
      index: "03",
      title: "Tracking et reporting multicanal, du clic à la facture",
      company: "Revolte, en freelance",
      period: "Mission freelance",
      problem:
        "Chaque canal (Google Ads, Meta Ads, SEO, emailing) annonce ses propres leads, sans dire lesquels deviennent des ventes : impossible de savoir où investir.",
      built:
        "Un tracking commun à tous les canaux (SEA, SEO, emailing), qui suit chaque lead jusqu'à la facture et renvoie les ventes réelles à Google Ads. Le reporting est produit avec Claude, branché par ses connecteurs sur GTM, Google Ads, Meta Ads, Google Sheets et HubSpot.",
      how: [
        "GTM",
        "GA4",
        "Pixel Meta",
        "UTM",
        "gclid / fbclid",
        "Champs cachés",
        "n8n",
        "HubSpot",
        "Conversions hors ligne Google Ads",
        "Pennylane",
        "Reporting avec Claude (connecteurs)",
        "Google Sheets",
      ],
      stats: [],
      result:
        "SEA, SEO et emailing sont suivis dans un même tracking. Les leads déclarés par les plateformes sont recoupés avec les formulaires réellement reçus, chaque vente est rattachée à sa source, et le reporting de tous les canaux est produit avec Claude.",
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
        "A machine that requalifies, enriches and routes each lead to one of three scenarios based on its contact details (voicemail and email, email only, SDR call), follows up after 24 hours without a reply, then scores it: hot leads go to a meeting with the account executive, warm leads go back to the SDRs, cold leads stay in nurturing, OUT leads are removed.",
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
      id: "acquisition-payante",
      index: "02",
      title: "Paid acquisition: cost per lead cut by three",
      company: "Revolte",
      period: "Aug – Nov 2026",
      problem:
        "The Google Ads campaigns for training courses cost €36 per real lead, and the Meta Ads creative format that brings in the cheapest pre-registrations was still to be found.",
      built:
        "On Google Ads, a new campaign positioning, with rewritten headlines, descriptions and keywords, and tracking that measures real leads. On Meta Ads, a video and a carousel produced with Claude from the same brief, tested side by side.",
      how: [
        "Google Ads (Search)",
        "Positioning",
        "Headlines, descriptions and keywords",
        "Meta Ads",
        "Creatives produced with Claude",
        "One brief, several angles",
        "Side-by-side test",
        "Real-lead tracking",
      ],
      stats: [
        { value: "÷ 3", label: "Google Ads real cost per lead in three months (€36 → €12)" },
        { value: "~160", label: "Google Ads leads over the period" },
        { value: "-40%", label: "cost per pre-registration: video vs. carousel" },
        { value: "~€25", label: "per pre-registration with the video" },
      ],
      result:
        "Real cost per lead cut by three on Google Ads in three months, from €36 to €12, for about 160 leads. On Meta Ads, the video produced with Claude brings in pre-registrations at around €25, 40% cheaper than the carousel.",
    },
    {
      id: "tracking-clic-facture",
      index: "03",
      title: "Cross-channel tracking and reporting, from click to invoice",
      company: "Revolte, freelance",
      period: "Freelance engagement",
      problem:
        "Each channel (Google Ads, Meta Ads, SEO, email) reports its own leads without showing which ones turn into sales: there is no way to know where to invest.",
      built:
        "One tracking setup for every channel (paid search, SEO, email) that follows each lead to the invoice and sends real sales back to Google Ads. Reporting is produced with Claude, connected through its connectors to GTM, Google Ads, Meta Ads, Google Sheets and HubSpot.",
      how: [
        "GTM",
        "GA4",
        "Meta Pixel",
        "UTM",
        "gclid / fbclid",
        "Hidden fields",
        "n8n",
        "HubSpot",
        "Google Ads offline conversions",
        "Pennylane",
        "Reporting with Claude (connectors)",
        "Google Sheets",
      ],
      stats: [],
      result:
        "Paid search, SEO and email are tracked in one setup. Leads reported by the ad platforms are cross-checked against the forms actually received, every sale is tied to its source, and reporting for every channel is produced with Claude.",
    },
  ],
};
