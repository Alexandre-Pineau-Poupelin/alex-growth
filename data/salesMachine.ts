// Schéma « Sales Machine V2 » (étude de cas 1), repris du schéma original d'Alexandre et du
// brief du 22 novembre 2026 : six étapes, trois branches avec leurs conditions, règles de
// relance à 24 h, scoring final des SDR, monitoring et résultat global.
import type { Locale } from "@/data/i18n";

export type Branch = {
  id: "A" | "B" | "C";
  workflow: string;
  condition: string;
  rules: string[];
  step: string;
  actions: string[];
  property: string;
};

export type SalesMachineDiagram = {
  step1: { label: string; title: string; sources: string; fieldsLabel: string; fields: string[]; then: string[] };
  step2: { label: string; title: string };
  branchesStep3Label: string;
  branches: Branch[];
  step4: {
    label: string;
    title: string;
    rules: Array<{ case: string; trigger: string; action: string }>;
    sdrTitle: string;
    outcomes: Array<{
      sdr: string;
      temperature: string;
      next: string;
      tone: "hot" | "warm" | "cold" | "out";
    }>;
  };
  step5: { label: string; title: string; detail: string; logsLabel: string; logs: string[]; sheet: string };
  step6: { label: string; title: string; sync: string; sentence: string };
  support: string;
};

const syncChain = "n8n → Dropper / Brevo → HubSpot → Google Sheet";

export const salesMachine: Record<Locale, SalesMachineDiagram> = {
  fr: {
    step1: {
      label: "Étape 1",
      title: "Entrée des leads dans n8n",
      sources:
        "600 leads dormants et nouveaux leads sourcés par un prestataire externe (scraping, Lemlist, LinkedIn) · environ 30 leads par jour",
      fieldsLabel: "Chaque lead contient",
      fields: ["Prénom", "Nom", "Email", "Téléphone", "Typologie", "Source"],
      then: ["Enrichissement du lead", "Envoi vers le Google Sheet central (vue de monitoring)"],
    },
    step2: { label: "Étape 2", title: "Routage automatique : n8n vérifie les conditions et choisit une branche" },
    branchesStep3Label: "Étape 3",
    branches: [
      {
        id: "A",
        workflow: "Dropper First",
        condition: "Numéro mobile + email valide",
        rules: ["Numéro qui commence par 06 ou 07", "et email valide"],
        step: "3.1",
        actions: [
          "Dropper : message vocal automatique",
          "Brevo : email automatisé",
          "HubSpot : création ou mise à jour du contact",
        ],
        property: "Dropper First = envoyé",
      },
      {
        id: "B",
        workflow: "Mail First",
        condition: "Email valide, numéro non mobile",
        rules: ["Email valide", "et numéro non mobile ou absent"],
        step: "3.2",
        actions: ["Brevo : envoi de l'email", "HubSpot : création ou mise à jour du contact"],
        property: "Mail First = envoyé",
      },
      {
        id: "C",
        workflow: "Call First",
        condition: "Aucun email valide ou cas particulier",
        rules: ["Email invalide ou absent", "ou appel nécessaire"],
        step: "3.3",
        actions: [
          "HubSpot : création ou mise à jour du contact",
          "Email fictif créé si nécessaire pour HubSpot",
        ],
        property: "Call First = à appeler",
      },
    ],
    step4: {
      label: "Étape 4",
      title: "Suivi automatique dans HubSpot (workflow interne, 24 h de délai)",
      rules: [
        {
          case: "Cas 1 · Dropper First envoyé",
          trigger: "Aucune action SDR après 24 h",
          action: "Passe en « Call First = à appeler »",
        },
        {
          case: "Cas 2 · Mail First envoyé",
          trigger: "Aucune action SDR après les relances Brevo",
          action: "Rebascule en Call First, avec l'attribut « Mail OUT »",
        },
        {
          case: "Cas 3 · Call First",
          trigger: "Le SDR appelle et qualifie le lead",
          action: "Scoring final ci-dessous",
        },
      ],
      sdrTitle: "Scoring final du SDR",
      outcomes: [
        { sdr: "Rendez-vous", temperature: "Lead chaud", next: "Passage à l'account executive", tone: "hot" },
        { sdr: "À rappeler", temperature: "Lead tiède", next: "Passage aux SDR", tone: "warm" },
        { sdr: "Pas intéressé", temperature: "Lead froid", next: "Reste en nurturing", tone: "cold" },
        { sdr: "Pas du tout intéressé", temperature: "Lead OUT", next: "Écarté", tone: "out" },
      ],
    },
    step5: {
      label: "Étape 5",
      title: "Monitoring global dans Google Sheets",
      detail: "Connecté à chaque workflow sortant, il alimente le tableau de pilotage.",
      logsLabel: "Chaque log contient",
      logs: ["Type d'action envoyée", "Date", "Statut HubSpot", "Réponse"],
      sheet: "Google Sheet « Tableau de pilotage »",
    },
    step6: {
      label: "Étape 6",
      title: "Résultat global",
      sync: `Synchronisation complète : ${syncChain}`,
      sentence:
        "Le lead avance automatiquement dans le pipeline en fonction de ses réponses, ou de l'absence d'action sous 24 h.",
    },
    support: "Contenu d'appui pour le nurturing : livre blanc",
  },

  en: {
    step1: {
      label: "Step 1",
      title: "Leads enter n8n",
      sources:
        "600 dormant leads and new leads sourced by an outside vendor (scraping, Lemlist, LinkedIn) · about 30 leads per day",
      fieldsLabel: "Each lead contains",
      fields: ["First name", "Last name", "Email", "Phone", "Type", "Source"],
      then: ["Lead enrichment", "Sent to the central Google Sheet (monitoring view)"],
    },
    step2: { label: "Step 2", title: "Automatic routing: n8n checks the conditions and picks a branch" },
    branchesStep3Label: "Step 3",
    branches: [
      {
        id: "A",
        workflow: "Dropper First",
        condition: "Mobile number + valid email",
        rules: ["Number starts with 06 or 07 (French mobile)", "and valid email"],
        step: "3.1",
        actions: [
          "Dropper: automatic voicemail",
          "Brevo: automated email",
          "HubSpot: contact created or updated",
        ],
        property: "Dropper First = sent",
      },
      {
        id: "B",
        workflow: "Mail First",
        condition: "Valid email, no mobile number",
        rules: ["Valid email", "and landline or missing number"],
        step: "3.2",
        actions: ["Brevo: email sent", "HubSpot: contact created or updated"],
        property: "Mail First = sent",
      },
      {
        id: "C",
        workflow: "Call First",
        condition: "No valid email, or special case",
        rules: ["Invalid or missing email", "or a call is needed"],
        step: "3.3",
        actions: [
          "HubSpot: contact created or updated",
          "Placeholder email created for HubSpot if needed",
        ],
        property: "Call First = to call",
      },
    ],
    step4: {
      label: "Step 4",
      title: "Automatic follow-up in HubSpot (internal workflow, 24-hour delay)",
      rules: [
        {
          case: "Case 1 · Dropper First sent",
          trigger: "No SDR action after 24 hours",
          action: "Switched to “Call First = to call”",
        },
        {
          case: "Case 2 · Mail First sent",
          trigger: "No SDR action after the Brevo follow-ups",
          action: "Moved back to Call First, tagged “Mail OUT”",
        },
        {
          case: "Case 3 · Call First",
          trigger: "The SDR calls and qualifies the lead",
          action: "Final scoring below",
        },
      ],
      sdrTitle: "Final SDR scoring",
      outcomes: [
        { sdr: "Meeting booked", temperature: "Hot lead", next: "Handed to the account executive", tone: "hot" },
        { sdr: "Call back", temperature: "Warm lead", next: "Back to the SDRs", tone: "warm" },
        { sdr: "Not interested", temperature: "Cold lead", next: "Stays in nurturing", tone: "cold" },
        { sdr: "Not interested at all", temperature: "OUT lead", next: "Removed", tone: "out" },
      ],
    },
    step5: {
      label: "Step 5",
      title: "Global monitoring in Google Sheets",
      detail: "Connected to every outgoing workflow, it feeds the reporting dashboard.",
      logsLabel: "Each log contains",
      logs: ["Type of action sent", "Date", "HubSpot status", "Reply"],
      sheet: "Google Sheet “Reporting dashboard”",
    },
    step6: {
      label: "Step 6",
      title: "Overall result",
      sync: `Full sync: ${syncChain}`,
      sentence:
        "Each lead moves through the pipeline automatically, based on its replies or on no action within 24 hours.",
    },
    support: "Supporting content for nurturing: white paper",
  },
};
