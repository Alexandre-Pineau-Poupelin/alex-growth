// Stack d'outils. Les noms d'outils ne se traduisent pas ; seuls les titres de groupes changent.
import type { Locale } from "@/data/i18n";

export type StackGroup = {
  title: string;
  tools: string[];
};

const groups = {
  acquisition: ["Google Ads", "Meta Ads", "Pixel Meta", "Google Business Profile"],
  data: ["GTM", "GA4", "Looker Studio", "BigQuery", "Google Sheets"],
  crm: ["n8n", "HubSpot", "Brevo", "Pennylane", "Python", "API"],
  ai: ["Claude", "Claude Code", "ChatGPT", "Prompt engineering"],
};

export const stackGroups: Record<Locale, StackGroup[]> = {
  fr: [
    { title: "Acquisition", tools: groups.acquisition },
    { title: "Tracking et data", tools: groups.data },
    { title: "CRM, automatisation et facturation", tools: groups.crm },
    { title: "IA", tools: groups.ai },
  ],
  en: [
    { title: "Acquisition", tools: groups.acquisition.map((t) => (t === "Pixel Meta" ? "Meta Pixel" : t)) },
    { title: "Tracking and data", tools: groups.data },
    { title: "CRM, automation and invoicing", tools: groups.crm.map((t) => (t === "API" ? "APIs" : t)) },
    { title: "AI", tools: groups.ai },
  ],
};
