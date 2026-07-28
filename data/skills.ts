export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Acquisition",
    items: [
      "Demand generation",
      "Performance marketing",
      "Google Ads",
      "SEO",
      "Outbound campaigns",
      "Multi-channel acquisition",
      "Partnership acquisition",
      "Audience segmentation",
    ],
  },
  {
    title: "Automation",
    items: [
      "n8n workflow automation",
      "API-based enrichment",
      "Multi-source lead enrichment",
      "AI-assisted marketing workflows",
      "CRM synchronization",
      "Automated routing",
      "System orchestration",
    ],
  },
  {
    title: "Data",
    items: [
      "GA4",
      "GTM",
      "Looker Studio",
      "Google Sheets",
      "Excel",
      "Funnel reporting",
      "Event tracking",
      "CAC / ROAS / LTV analysis",
    ],
  },
  {
    title: "Funnel & Conversion",
    items: [
      "Funnel optimization",
      "MQL / SQL / customer tracking",
      "Lead scoring",
      "Lifecycle workflows",
      "A/B testing",
      "Lead nurturing",
      "Positioning & messaging",
      "Landing page copywriting",
    ],
  },
];
