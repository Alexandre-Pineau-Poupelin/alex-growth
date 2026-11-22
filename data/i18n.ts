// Langues du site. Le français est servi sur "/", l'anglais sur "/en".
export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];

export const localePath: Record<Locale, string> = {
  fr: "/",
  en: "/en",
};

/** Clé localStorage où le choix de langue du visiteur est mémorisé. */
export const LOCALE_STORAGE_KEY = "preferred-locale";
