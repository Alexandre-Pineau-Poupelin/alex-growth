export type Experiment = {
  title: string;
  description: string;
  tags: string[];
};

// Travaux secondaires — plus courts que les Case Studies, pas de schéma ni de détail déplié.
// Volontairement 3 entrées réelles plutôt que des cartes vides : ce tableau peut grandir
// sans toucher au composant Experiments.tsx.
export const experiments: Experiment[] = [
  {
    title: "Tests créatifs & ciblage — Google Ads",
    description:
      "Expérimentation continue sur le ciblage, les messages et les créatives des campagnes paid Revolte, pour améliorer le CAC et le ROAS dans la durée.",
    tags: ["Google Ads", "A/B testing", "Paid acquisition"],
  },
  {
    title: "Workflows IA pour la qualification de leads",
    description:
      "Workflows assistés par IA pour scaler la qualification des leads entrants et l'optimisation continue des campagnes d'acquisition.",
    tags: ["n8n", "IA / LLM", "Lead qualification"],
  },
  {
    title: "Outillage outbound & veille concurrentielle",
    description:
      "Mise en place d'outils de prospection outbound (Lemlist) et de veille SEO concurrentielle (Ahrefs, Semrush) en support des canaux d'acquisition.",
    tags: ["Lemlist", "Ahrefs", "Semrush"],
  },
];
