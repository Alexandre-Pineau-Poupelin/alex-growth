// Contenus éditoriaux partagés (en-tête, méthode, système, contact, SEO), en français et en anglais.
// Les chiffres doivent rester identiques à ceux du CV et du profil LinkedIn.
import type { Locale } from "@/data/i18n";

export const siteConfig = {
  name: "Alexandre Pineau-Poupelin",
  shortName: "Alexandre P-P",
  title: "Growth & Acquisition",
  email: "alexandre.pineaupoupelin@gmail.com",
  linkedin: "https://linkedin.com/in/alexandre-pineau-poupelin",
  calendly: "https://calendly.com/alexandre-pineaupoupelin/30min",
  // Priorité : domaine custom explicite > URL de prod Vercel auto-détectée > placeholder local.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

export type Stat = { value: string; label: string };

export type SiteContent = {
  seo: { title: string; description: string; keywords: string[] };
  nav: Array<{ label: string; href: string }>;
  ui: {
    skipLink: string;
    menuOpen: string;
    menuClose: string;
    navLabel: string;
    bookShort: string;
    languageLabel: string;
    themeToLight: string;
    themeToDark: string;
    copyEmail: string;
    emailCopied: string;
    emailCopiedLive: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    primaryCta: string;
    tags: string[];
    proof: Stat[];
  };
  method: {
    eyebrow: string;
    title: string;
    principles: Array<{ number: string; title: string; description: string }>;
  };
  system: {
    eyebrow: string;
    title: string;
    description: string;
    stages: Array<{ label: string; tools: string[] }>;
    ariaLabel: string;
  };
  caseStudiesHeading: { eyebrow: string; title: string; description: string };
  caseLabels: {
    problem: string;
    built: string;
    how: string;
    result: string;
    diagramTitle: string;
  };
  skillsHeading: { eyebrow: string; title: string; description: string };
  skillLabels: { what: string; how: string; stackTitle: string };
  experienceHeading: { eyebrow: string; title: string; description: string };
  experienceLabels: { seeCaseStudies: string };
  educationHeading: { eyebrow: string; title: string };
  contact: {
    eyebrow: string;
    statement: string;
    roles: string;
    calendlyLabel: string;
    availabilityLabel: string;
    availability: string;
    locationLabel: string;
    location: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  fr: {
    seo: {
      title: "Alexandre Pineau-Poupelin — Growth & Acquisition",
      description:
        "Growth & Acquisition : je construis des systèmes d'acquisition de la pub à la signature. Google Ads, Meta Ads, SEO, tracking, HubSpot, n8n. CDI, Hérault ou télétravail.",
      keywords: [
        "growth marketing",
        "acquisition",
        "Google Ads",
        "Meta Ads",
        "SEO",
        "GEO",
        "tracking",
        "conversions hors ligne",
        "CRM HubSpot",
        "n8n",
        "marketing automation",
        "lead scoring",
        "nurturing",
        "tunnel de vente",
        "landing page",
        "coût par lead",
        "CAC",
        "ROAS",
        "IA générative",
        "Claude",
      ],
    },
    nav: [
      { label: "Méthode", href: "#methode" },
      { label: "Études de cas", href: "#etudes-de-cas" },
      { label: "Compétences", href: "#competences" },
      { label: "Parcours", href: "#parcours" },
      { label: "Contact", href: "#contact" },
    ],
    ui: {
      skipLink: "Aller au contenu principal",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      navLabel: "Sections de la page",
      bookShort: "Réserver 30 min",
      languageLabel: "Langue du site",
      themeToLight: "Activer le thème clair",
      themeToDark: "Activer le thème sombre",
      copyEmail: "Copier l'adresse email",
      emailCopied: "Adresse copiée",
      emailCopiedLive: "Adresse email copiée dans le presse-papiers",
    },
    hero: {
      badge: "Disponible · CDI · Hérault ou télétravail",
      subtitle:
        "Je construis des systèmes d'acquisition, de la pub à la signature. SEA, SEO, tracking, CRM et automatisation IA.",
      primaryCta: "Réserver 30 min",
      tags: [
        "Growth Marketing",
        "Acquisition payante (Google Ads, Meta Ads)",
        "SEO et GEO",
        "Tracking (GTM)",
        "Data (GA4, Looker Studio, BigQuery)",
        "System builder (n8n, HubSpot, Brevo)",
        "Marketing automation",
        "Conseil marketing",
        "Copywriting",
      ],
      proof: [
        {
          value: "368 K€",
          label: "Plus de 368 000 € de CA signé en six mois avec la sales machine Revolte",
        },
        {
          value: "36 € → 12 €",
          label: "Coût par lead réel en trois mois, refonte Google Ads des formations",
        },
        {
          value: "+119 %",
          label: "Trafic organique Revolte, 25 à 40 leads par mois en inbound",
        },
        { value: "x9", label: "ROAS jusqu'à x9 sur Google Ads (Revolte)" },
        {
          value: "326 K€",
          label: "Le Wagon, résultats du binôme sur un an : 1 087 MQL, 51 clients",
        },
      ],
    },
    method: {
      eyebrow: "Méthode",
      title: "Comment je travaille",
      principles: [
        {
          number: "01",
          title: "Mesurer avant d'optimiser",
          description:
            "Chaque décision s'appuie sur les données de tracking (GA4, GTM, CRM), jamais sur une intuition.",
        },
        {
          number: "02",
          title: "Construire des systèmes, pas des campagnes",
          description:
            "Je conçois des chaînes d'acquisition complètes (sourcing, scoring, nurturing, CRM) plutôt que des actions isolées.",
        },
        {
          number: "03",
          title: "Automatiser ce qui se répète",
          description:
            "Workflows n8n et enrichissement par API pour rendre du temps aux équipes commerciales et marketing.",
        },
        {
          number: "04",
          title: "Transformer les tests en process",
          description:
            "Chaque test qui fonctionne devient un processus reproductible, pas un coup ponctuel.",
        },
      ],
    },
    system: {
      eyebrow: "Le système",
      title: "Du clic à la facture",
      description:
        "La chaîne que je construis : chaque lead est suivi de la publicité qui l'a amené jusqu'à la facture qu'il a signée.",
      ariaLabel: "Chaîne d'acquisition, de la publicité au reporting",
      stages: [
        { label: "Publicité", tools: ["Google Ads", "Meta Ads"] },
        { label: "Capture", tools: ["Landing page", "Formulaire"] },
        { label: "Mesure", tools: ["GTM", "GA4"] },
        { label: "Automatisation et CRM", tools: ["n8n", "HubSpot", "Brevo"] },
        { label: "Vente", tools: ["Appel SDR", "Devis"] },
        { label: "Facturation", tools: ["Pennylane"] },
        { label: "Pilotage", tools: ["Looker Studio", "Claude"] },
      ],
    },
    caseStudiesHeading: {
      eyebrow: "Études de cas",
      title: "Ce que j'ai construit",
      description:
        "Quatre cas, chacun en trois temps : le problème, ce que j'ai construit, et comment. Les chiffres sont ceux de mon CV.",
    },
    caseLabels: {
      problem: "Problème",
      built: "Ce que j'ai construit",
      how: "Comment",
      result: "Résultat",
      diagramTitle: "Schéma Sales Machine V2",
    },
    skillsHeading: {
      eyebrow: "Compétences",
      title: "Ce que je fais, et comment",
      description: "Six domaines, de la publicité au chiffre d'affaires.",
    },
    skillLabels: { what: "Ce que je fais", how: "Comment", stackTitle: "Stack et outils" },
    experienceHeading: {
      eyebrow: "Parcours",
      title: "Du copywriting au growth",
      description:
        "Cinq ans de copywriting, puis l'acquisition et l'automatisation : chaque poste a ajouté une brique au système.",
    },
    experienceLabels: { seeCaseStudies: "Voir les études de cas" },
    educationHeading: { eyebrow: "Formation", title: "Diplômes et certifications" },
    contact: {
      eyebrow: "Contact",
      statement: "Je construis des systèmes sur mesure.",
      roles:
        "Je cherche un CDI de Growth Marketing Manager, Responsable acquisition, Marketing Ops ou Demand Generation, dans l'Hérault ou en télétravail.",
      calendlyLabel: "Réserver un échange de 30 min",
      availabilityLabel: "Disponibilité",
      availability: "Disponible · CDI",
      locationLabel: "Localisation",
      location: "Hérault ou télétravail",
    },
  },

  en: {
    seo: {
      title: "Alexandre Pineau-Poupelin — Growth & Acquisition",
      description:
        "Growth & Acquisition: I build acquisition systems, from the ad to the signed deal. Google Ads, Meta Ads, SEO, tracking, HubSpot, n8n. Permanent role, Hérault (France) or remote.",
      keywords: [
        "growth marketing",
        "acquisition",
        "Google Ads",
        "Meta Ads",
        "SEO",
        "GEO",
        "tracking",
        "offline conversions",
        "HubSpot CRM",
        "n8n",
        "marketing automation",
        "lead scoring",
        "nurturing",
        "sales funnel",
        "landing page",
        "cost per lead",
        "CAC",
        "ROAS",
        "generative AI",
        "Claude",
      ],
    },
    nav: [
      { label: "Method", href: "#methode" },
      { label: "Case studies", href: "#etudes-de-cas" },
      { label: "Skills", href: "#competences" },
      { label: "Experience", href: "#parcours" },
      { label: "Contact", href: "#contact" },
    ],
    ui: {
      skipLink: "Skip to main content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navLabel: "Page sections",
      bookShort: "Book 30 min",
      languageLabel: "Site language",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      copyEmail: "Copy email address",
      emailCopied: "Address copied",
      emailCopiedLive: "Email address copied to clipboard",
    },
    hero: {
      badge: "Available · Permanent role · Hérault (France) or remote",
      subtitle:
        "I build acquisition systems, from the ad to the signed deal. Paid search, SEO, tracking, CRM and AI automation.",
      primaryCta: "Book 30 min",
      tags: [
        "Growth Marketing",
        "Paid acquisition (Google Ads, Meta Ads)",
        "SEO and GEO",
        "Tracking (GTM)",
        "Data (GA4, Looker Studio, BigQuery)",
        "System builder (n8n, HubSpot, Brevo)",
        "Marketing automation",
        "Marketing consulting",
        "Copywriting",
      ],
      proof: [
        {
          value: "€368K",
          label: "Over €368,000 in signed revenue in six months from the Revolte sales machine",
        },
        {
          value: "€36 → €12",
          label: "Real cost per lead in three months, Google Ads overhaul for training courses",
        },
        {
          value: "+119%",
          label: "Revolte organic traffic, 25 to 40 inbound leads per month",
        },
        { value: "x9", label: "ROAS up to x9 on Google Ads (Revolte)" },
        {
          value: "€326K",
          label: "Le Wagon, two-person team results over one year: 1,087 MQLs, 51 clients",
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "How I work",
      principles: [
        {
          number: "01",
          title: "Measure before optimizing",
          description:
            "Every decision is based on tracking data (GA4, GTM, CRM), never on a hunch.",
        },
        {
          number: "02",
          title: "Build systems, not campaigns",
          description:
            "I design complete acquisition chains (sourcing, scoring, nurturing, CRM) rather than one-off actions.",
        },
        {
          number: "03",
          title: "Automate what repeats",
          description:
            "n8n workflows and API enrichment give sales and marketing teams their time back.",
        },
        {
          number: "04",
          title: "Turn tests into processes",
          description:
            "Every test that works becomes a repeatable process, not a one-time win.",
        },
      ],
    },
    system: {
      eyebrow: "The system",
      title: "From click to invoice",
      description:
        "The chain I build: every lead is tracked from the ad that brought it in to the invoice it signed.",
      ariaLabel: "Acquisition chain, from ads to reporting",
      stages: [
        { label: "Ads", tools: ["Google Ads", "Meta Ads"] },
        { label: "Capture", tools: ["Landing page", "Form"] },
        { label: "Measurement", tools: ["GTM", "GA4"] },
        { label: "Automation and CRM", tools: ["n8n", "HubSpot", "Brevo"] },
        { label: "Sales", tools: ["SDR call", "Quote"] },
        { label: "Invoicing", tools: ["Pennylane"] },
        { label: "Reporting", tools: ["Looker Studio", "Claude"] },
      ],
    },
    caseStudiesHeading: {
      eyebrow: "Case studies",
      title: "What I built",
      description:
        "Four cases, each in three parts: the problem, what I built, and how. The figures match my résumé.",
    },
    caseLabels: {
      problem: "Problem",
      built: "What I built",
      how: "How",
      result: "Result",
      diagramTitle: "Sales Machine V2 diagram",
    },
    skillsHeading: {
      eyebrow: "Skills",
      title: "What I do, and how",
      description: "Six areas, from the ad to the revenue.",
    },
    skillLabels: { what: "What I do", how: "How", stackTitle: "Stack and tools" },
    experienceHeading: {
      eyebrow: "Experience",
      title: "From copywriting to growth",
      description:
        "Five years of copywriting, then acquisition and automation: each role added a building block to the system.",
    },
    experienceLabels: { seeCaseStudies: "See the case studies" },
    educationHeading: { eyebrow: "Education", title: "Degrees and certifications" },
    contact: {
      eyebrow: "Contact",
      statement: "I build tailor-made systems.",
      roles:
        "I'm looking for a permanent role as Growth Marketing Manager, Head of Acquisition, Marketing Ops or Demand Generation, in Hérault (France) or remote.",
      calendlyLabel: "Book a 30-minute call",
      availabilityLabel: "Availability",
      availability: "Available · Permanent role",
      locationLabel: "Location",
      location: "Hérault (France) or remote",
    },
  },
};
