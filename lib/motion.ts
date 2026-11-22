// Réglages de mouvement partagés par tout le site.
//
// Des ressorts plutôt que des durées fixes : un ressort part de la valeur affichée à
// l'écran et peut être interrompu à tout moment (ex. replier une étude de cas pendant
// qu'elle se déplie) sans saut visuel. bounce: 0 = ressort amorti, sans rebond — le bon
// réglage par défaut pour une interface qui n'est pas pilotée par un geste.
export const spring = {
  /** Apparitions au scroll : posé, non distrayant. */
  gentle: { type: "spring", bounce: 0, duration: 0.6 },
  /** Ouvertures / fermetures déclenchées par un clic (menu, détail d'une étude de cas). */
  snappy: { type: "spring", bounce: 0, duration: 0.35 },
} as const;
