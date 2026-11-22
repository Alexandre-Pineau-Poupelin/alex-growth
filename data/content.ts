// Toutes les données éditoriales du site. Modifier ce fichier ne touche à aucun composant React.

export const siteConfig = {
  name: "Alexandre Pineau-Poupelin",
  shortName: "Alexandre P-P",
  title: "Growth Marketing Manager",
  tagline: "Building scalable growth systems.",
  email: "alexandre.pineaupoupelin@gmail.com",
  linkedin: "https://linkedin.com/in/alexandre-pineau-poupelin",
  location: "Hérault, France",
  // Affiché dans le Hero (badge) et dans la section Contact. À tenir à jour : une date
  // passée donne l'impression d'un site abandonné.
  availability: "Disponible immédiatement",
  availabilityDetail: "CDI · France ou remote",
  calendly: "https://calendly.com/alexandre-pineaupoupelin/30min",
  // Priorité : domaine custom explicite > URL de prod Vercel auto-détectée > placeholder local.
  // NEXT_PUBLIC_SITE_URL est à définir dans les env vars Vercel une fois un domaine choisi.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Growth Marketing Manager spécialisé dans la conception de systèmes d'acquisition B2B automatisés — de la génération de leads à la conversion en revenu mesurable.",
};

// Libellés qui nomment le contenu réel de chaque section. "Parcours" est la section
// qu'un recruteur cherche en premier : elle doit être dans la navigation.
export const nav = [
  { label: "Méthode", href: "#about" },
  { label: "Études de cas", href: "#case-studies" },
  { label: "Parcours", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Growth Marketing Manager",
  tagline: "Building scalable growth systems.",
  description:
    "Je conçois, automatise et optimise des funnels d'acquisition B2B complets — de la génération de leads à la conversion en revenu mesurable.",
  primaryCta: "Réserver un échange de 30 min",
  secondaryCta: "Écrire un email",
};

// Bandeau de preuve sous le Hero — uniquement des chiffres directement sourcés du CV.
export const proofStrip = [
  { value: "€368K", label: "CA généré — système d'acquisition B2B Revolte" },
  { value: "+119%", label: "trafic SEO — Revolte" },
  { value: "9x", label: "ROAS moyen — acquisition payante Revolte" },
  { value: "€326K", label: "CA contribué — Le Wagon Grand Ouest" },
];

// Fusion de "Ce que j'apporte" + "Principles" — un seul bloc pour éviter la redondance
// de deux listes de 4 lignes qui disaient la même chose sous deux angles.
export const howIWork = [
  {
    number: "01",
    title: "Mesurer avant d'optimiser",
    description:
      "Chaque décision s'appuie sur les données de tracking (GA4, GTM, CRM) — jamais sur une intuition.",
  },
  {
    number: "02",
    title: "Construire des systèmes, pas des campagnes",
    description:
      "Je conçois des pipelines d'acquisition complets — sourcing, scoring, nurturing, CRM — plutôt que des actions isolées.",
  },
  {
    number: "03",
    title: "Automatiser ce qui se répète",
    description:
      "Workflows n8n et enrichissement API pour redonner du temps aux équipes commerciales et marketing.",
  },
  {
    number: "04",
    title: "Transformer les tests en process",
    description:
      "Chaque expérimentation qui fonctionne devient un processus reproductible, pas un coup ponctuel.",
  },
];

export const systemPipeline = {
  title: "How I Build Growth Systems",
  description:
    "Un pipeline type : acquisition, tracking, automatisation et reporting connectés plutôt que des outils isolés.",
  steps: [
    "Google Ads",
    "Landing Page",
    "GA4",
    "GTM",
    "n8n",
    "HubSpot",
    "Brevo",
    "Looker Studio",
  ],
};

export const contact = {
  heading: "Contact",
  statement: "I don't optimize ads. I optimize how companies acquire customers.",
  subtext:
    "Ouvert aux postes de Growth Marketing Manager, Marketing Ops et Demand Generation — France ou remote.",
  availabilityLabel: "Disponibilité",
  availability: siteConfig.availability,
  calendlyLabel: "Réserver un échange de 30 min",
  emailLabel: "Écrire un email",
  locationLabel: "Localisation",
};
