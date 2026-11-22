// Formation (inchangée par rapport à la version précédente, traduite en français et en anglais).
import type { Locale } from "@/data/i18n";

export type EducationEntry = {
  degree: string;
  school: string;
  year: string;
};

export const education: Record<Locale, EducationEntry[]> = {
  fr: [
    {
      degree: "Master of Science — Business Management & Growth Strategy",
      school: "Rocket School, Nantes",
      year: "2025",
    },
    {
      degree:
        "Certification RS6479 — Concevoir et mettre en œuvre des stratégies d'acquisition client digitales pour startups et PME",
      school: "Mantra",
      year: "2025",
    },
    { degree: "Formation en copywriting", school: "Académie Copy-Lot", year: "2020" },
    {
      degree: "Mastère — Creative Team / Copywriting",
      school: "Sup de Création, Paris",
      year: "2019",
    },
    {
      degree: "Licence — Information et communication",
      school: "Université Rennes 2",
      year: "2016",
    },
  ],
  en: [
    {
      degree: "Master of Science — Business Management & Growth Strategy",
      school: "Rocket School, Nantes",
      year: "2025",
    },
    {
      degree:
        "RS6479 certification — Designing and Implementing Digital Customer Acquisition Strategies for Startups and SMEs",
      school: "Mantra",
      year: "2025",
    },
    { degree: "Copywriting training", school: "Académie Copy-Lot", year: "2020" },
    {
      degree: "Master's program — Creative Team / Copywriting",
      school: "Sup de Création, Paris",
      year: "2019",
    },
    {
      degree: "Bachelor's degree — Information & Communication",
      school: "Rennes 2 University",
      year: "2016",
    },
  ],
};
