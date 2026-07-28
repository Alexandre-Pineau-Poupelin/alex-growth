export type CaseStudyStat = {
  value: string;
  label: string;
};

export type ResultType = "measured" | "qualitative" | "strategic";

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  company: string;
  period: string;
  resultType: ResultType;
  resultTypeLabel: string;
  summary: string[];
  stats: CaseStudyStat[];
  pipeline: string[];
  detail: {
    context: string;
    problem: string;
    hypothesis: string;
    investigation?: string;
    solution: string;
    results: string;
    learning: string;
  };
  screenshotPlaceholder: string;
};

// Les 3 études de cas. resultType contrôle l'affichage du badge de crédibilité —
// on distingue explicitement un résultat mesuré, un résultat qualitatif assumé et
// une initiative stratégique en cours, plutôt que de tout présenter comme "résultat".
export const caseStudies: CaseStudy[] = [
  {
    id: "sales-machine",
    index: "01",
    title: "Sales Machine — Lead Scoring automatisé",
    company: "Revolte / E-Garages",
    period: "Fév 2025 – Jan 2026",
    resultType: "measured",
    resultTypeLabel: "Résultat mesuré",
    summary: [
      "Revolte générait un volume significatif de leads B2B, mais les traitait tous de la même façon.",
      "Les commerciaux perdaient du temps sur des prospects pas encore prêts à acheter.",
      "Solution : segmentation en 4 ICP, scoring progressif et séquences automatisées pour prioriser les appels selon la température du lead.",
    ],
    stats: [
      { value: "322", label: "MQL générés" },
      { value: "24", label: "clients signés" },
      { value: "€368K", label: "CA généré" },
      { value: "7.45%", label: "conversion MQL → client" },
    ],
    pipeline: [
      "Sourcing multi-source",
      "Enrichissement API",
      "Segmentation 4 ICP",
      "Scoring",
      "Séquences Brevo",
      "Sync HubSpot",
      "Priorisation commerciale",
    ],
    detail: {
      context:
        "Revolte (réparation et maintenance de véhicules électriques et hybrides) générait un volume significatif de leads B2B, mais sans logique de qualification différenciée.",
      problem:
        "Tous les leads étaient traités de façon uniforme. Les commerciaux contactaient des prospects encore loin de la décision d'achat, au détriment de ceux réellement prêts.",
      hypothesis:
        "Le vrai problème n'était pas le volume de leads mais l'absence de qualification — un problème de priorisation, pas d'acquisition.",
      solution:
        "Segmentation en 4 ICP, séquences Brevo adaptées à chaque profil, enrichissement progressif du profil à chaque interaction (email, clic, RDV), synchronisation HubSpot pour prioriser les appels selon la température du lead.",
      results:
        "322 MQL générés, 24 clients signés, €368K de chiffre d'affaires généré — soit une conversion MQL → client d'environ 7.45%.",
      learning:
        "Un scoring bien construit change la conversation commerciale : les équipes appellent au bon moment, pas au premier moment disponible.",
    },
    screenshotPlaceholder: "Emplacement réservé — capture HubSpot (pipeline & scoring)",
  },
  {
    id: "academie-seo-ux",
    index: "02",
    title: "SEO + UX + Tracking — Académie Revolte",
    company: "Revolte — Académie",
    period: "2025",
    resultType: "qualitative",
    resultTypeLabel: "Résultat qualitatif",
    summary: [
      "L'acquisition B2C de Revolte performait bien, mais l'acquisition B2B pour les formations restait en dessous des attentes malgré des campagnes Google Ads efficaces.",
      "Hypothèse : le problème ne venait pas de l'acquisition, mais de l'expérience une fois le visiteur sur le site.",
      "Audit SEO/UX et tracking fin des points d'abandon, puis refonte de la structure et simplification des formulaires.",
    ],
    stats: [],
    pipeline: [
      "Google Ads",
      "Landing Page Académie",
      "GTM (clics / CTA)",
      "GA4 (funnel formulaire)",
      "Audit SEO/UX",
      "Refonte structure",
    ],
    detail: {
      context:
        "Le volet B2C de Revolte performait bien, mais l'acquisition B2B pour les formations de l'Académie restait en dessous des objectifs malgré des campagnes Google Ads efficaces.",
      problem:
        "Le trafic payant arrivait, mais la conversion en formulaires complétés restait faible — le problème semblait se situer après le clic, pas avant.",
      hypothesis:
        "Le problème ne venait pas uniquement de l'acquisition mais de l'expérience une fois sur le site.",
      investigation:
        "Audit SEO/UX des pages Académie, et tracking fin (provenance, clics CTA, progression dans le formulaire, points d'abandon).",
      solution:
        "Refonte de la structure et du contenu des pages, simplification des formulaires suite à l'analyse du taux de complétion.",
      results:
        "Résultat qualitatif assumé, sans métrique précise disponible à ce jour : les données ont confirmé une amélioration de la conversion suite aux changements SEO/UX.",
      learning:
        "Le tracking sert à identifier les frictions, pas seulement à mesurer un résultat final.",
    },
    screenshotPlaceholder: "Emplacement réservé — capture GA4 (funnel formulaire Académie)",
  },
  {
    id: "seo-ai-structure",
    index: "03",
    title: "Structurer Revolte pour le SEO et les moteurs IA",
    company: "Revolte",
    period: "2025 — en cours",
    resultType: "strategic",
    resultTypeLabel: "Initiative stratégique",
    summary: [
      "Les comportements de recherche évoluent avec les assistants IA (ChatGPT, Gemini, Perplexity) — le SEO classique ne suffira plus seul à terme.",
      "Décision : renforcer les signaux d'autorité et restructurer l'architecture de contenu selon une logique métier plutôt que centrée sur le site.",
      "Objectif : rester pionnier sur ce terrain plutôt que dépendre uniquement du SEO traditionnel.",
    ],
    stats: [],
    pipeline: ["Expertise", "Marques", "Modèles", "Pannes spécifiques"],
    detail: {
      context:
        "Les comportements de recherche évoluent avec la montée des assistants IA (ChatGPT, Gemini, Perplexity), qui changent la façon dont l'information est trouvée et citée.",
      problem:
        "Une architecture de contenu centrée sur la structure du site plutôt que sur la logique métier limite la lisibilité de l'expertise, pour les moteurs classiques comme pour les moteurs IA.",
      hypothesis:
        "La visibilité SEO classique ne suffira plus seule à terme pour rester visible face à ces nouveaux usages de recherche.",
      solution:
        "Renforcement des signaux d'autorité et refonte de la structure informationnelle : réorganisation des contenus selon une logique métier — expertise → marques → modèles → pannes spécifiques — plutôt que centrée sur l'arborescence du site.",
      results:
        "Initiative en cours. Objectif formulé de façon mesurée, sans prétendre à un effet garanti sur les assistants IA : une anticipation stratégique de l'évolution des usages de recherche.",
      learning:
        "Attendre une preuve avant d'agir sur ce terrain revient à agir trop tard — certaines décisions se prennent sur un raisonnement, pas encore sur une métrique.",
    },
    screenshotPlaceholder: "Emplacement réservé — capture Looker Studio (visibilité organique)",
  },
];
