export type StackGroup = {
  title: string;
  tools: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Automation & CRM",
    tools: ["n8n", "HubSpot", "Brevo"],
  },
  {
    title: "Acquisition & Analytics",
    tools: ["Google Ads", "GA4", "GTM", "Looker Studio"],
  },
  {
    title: "IA & Automation avancée",
    tools: ["Claude Code", "ChatGPT", "Prompt Engineering"],
  },
];
