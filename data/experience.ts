// Parcours, du plus récent au plus ancien. Titres et dates identiques au CV et à LinkedIn.
import type { Locale } from "@/data/i18n";

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  /** Lien optionnel vers le détail ailleurs sur la page (ex. les études de cas). */
  detailHref?: string;
};

export const experience: Record<Locale, ExperienceEntry[]> = {
  fr: [
    {
      role: "Growth Marketing Consultant",
      company: "Freelance",
      period: "Depuis nov. 2025",
      highlights: [
        "Conseil marketing aux garages partenaires : landing pages, mots-clés, fiches Google Business Profile, blog, Google Ads, Meta Ads, tracking.",
        "Pour Revolte : refonte Google Ads des formations, créations Meta Ads produites avec Claude, tracking du clic à la facture.",
      ],
      detailHref: "#etudes-de-cas",
    },
    {
      role: "Growth Marketing Manager",
      company: "Revolte / E-Garages",
      period: "Févr. 2025 – nov. 2025",
      highlights: [
        "Sales machine : 322 MQL, 24 nouveaux clients et plus de 368 000 € de CA signé en six mois.",
        "Inbound et SEO : pipeline de 25 à 40 leads par mois, trafic organique +119 %, SEO à 41 % des leads.",
        "Google Ads : ROAS jusqu'à x9.",
        "Réseau Garage Branché : contribution à 38 abonnements, 111 K€ d'ARR.",
      ],
      detailHref: "#etudes-de-cas",
    },
    {
      role: "Marketing & Operations Manager, Directeur adjoint",
      company: "Le Wagon Grand Ouest, Nantes et Rennes",
      period: "Nov. 2023 – févr. 2025",
      highlights: [
        "Résultats du binôme sur un an : 1 087 MQL, 636 SQL, 51 clients, 326 K€ de CA.",
        "Plus de 70 événements et partenariats en 12 mois.",
      ],
    },
    {
      role: "Responsable marketing",
      company: "NOVA-SEO",
      period: "Oct. 2022 – avr. 2023",
      highlights: ["Conseil marketing : SEO et offres web."],
    },
    {
      role: "Copywriter freelance",
      company: "Freelance",
      period: "2021 – 2023",
      highlights: [
        "Trois ans de copywriting orienté conversion, pour SNCF, LIDL, Amplifon et Soprema.",
      ],
    },
    {
      role: "Stages en agence de publicité",
      company: "Agence Novembre (2018), Grenade & Sparks (2019, assistant copywriter)",
      period: "2018 et 2019",
      highlights: ["Concepts créatifs, textes de campagne, contenus de marque."],
    },
  ],
  en: [
    {
      role: "Growth Marketing Consultant",
      company: "Freelance",
      period: "Since Nov 2025",
      highlights: [
        "Marketing consulting for partner garages: landing pages, keywords, Google Business Profile listings, blog, Google Ads, Meta Ads, tracking.",
        "For Revolte: Google Ads overhaul for training courses, Meta Ads creatives produced with Claude, click-to-invoice tracking.",
      ],
      detailHref: "#etudes-de-cas",
    },
    {
      role: "Growth Marketing Manager",
      company: "Revolte / E-Garages",
      period: "Feb 2025 – Nov 2025",
      highlights: [
        "Sales machine: 322 MQLs, 24 new clients and over €368,000 in signed revenue in six months.",
        "Inbound and SEO: pipeline of 25 to 40 leads per month, organic traffic +119%, SEO behind 41% of leads.",
        "Google Ads: ROAS up to x9.",
        "Garage Branché network: contributed to 38 subscriptions, €111K in ARR.",
      ],
      detailHref: "#etudes-de-cas",
    },
    {
      role: "Marketing & Operations Manager / Deputy Director",
      company: "Le Wagon Grand Ouest, Nantes and Rennes",
      period: "Nov 2023 – Feb 2025",
      highlights: [
        "Results as a two-person team, over one year: 1,087 MQLs, 636 SQLs, 51 clients, €326K in revenue.",
        "Over 70 events and partnerships in 12 months.",
      ],
    },
    {
      role: "Marketing Manager",
      company: "NOVA-SEO",
      period: "Oct 2022 – Apr 2023",
      highlights: ["Marketing consulting: SEO and web offers."],
    },
    {
      role: "Freelance copywriter",
      company: "Freelance",
      period: "2021 – 2023",
      highlights: [
        "Three years of conversion-focused copywriting for SNCF, LIDL, Amplifon and Soprema.",
      ],
    },
    {
      role: "Internships in advertising agencies",
      company: "Agence Novembre (2018), Grenade & Sparks (2019, assistant copywriter)",
      period: "2018 and 2019",
      highlights: ["Creative concepts, campaign copy, brand content."],
    },
  ],
};
