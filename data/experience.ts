export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlight: string;
};

// Timeline condensée. Revolte est déjà détaillé dans les Case Studies ci-dessus —
// ici, une ligne de contexte suffit. Le Wagon et les rôles antérieurs n'ont pas
// d'autre emplacement sur la page : ce bloc évite qu'ils disparaissent complètement
// d'un site pensé pour remplacer un CV classique.
export const experience: ExperienceEntry[] = [
  {
    role: "Growth Marketing Manager — Paid Acquisition",
    company: "Revolte / E-Garages",
    period: "Fév 2025 – Jan 2026",
    highlight: "Détails dans les Case Studies ci-dessus.",
  },
  {
    role: "Marketing & Operations Manager / Deputy Director",
    company: "Le Wagon Grand Ouest — Nantes & Rennes",
    period: "Nov 2023 – Fév 2025",
    highlight:
      "1087 MQL, 636 SQL, 51 clients et €326K de CA générés via événements et partenariats (70+ événements sur 12 mois).",
  },
  {
    role: "B2B Sales Representative",
    company: "NOVA-SEO",
    period: "Oct 2022 – Avr 2023",
    highlight: "Prospection B2B et cycle de vente court sur des offres SEO et web.",
  },
  {
    role: "Freelance Copywriter",
    company: "Freelance",
    period: "2021 – 2023",
    highlight: "Copywriting orienté conversion pour projets web et acquisition.",
  },
  {
    role: "Assistant Copywriter",
    company: "Agence Grenade & Sparks",
    period: "2019",
    highlight: "Concepts créatifs, copy de campagne, contenus de marque.",
  },
];
