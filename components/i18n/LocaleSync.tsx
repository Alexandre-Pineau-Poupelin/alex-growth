"use client";

import { useEffect } from "react";
import { LOCALE_STORAGE_KEY, localePath, type Locale } from "@/data/i18n";

/**
 * - Met à jour l'attribut lang de <html> (le layout racine est partagé par les deux langues).
 * - Sur la page française, renvoie vers /en un visiteur qui a déjà choisi l'anglais, sauf s'il
 *   vient d'une autre page du site (il vient alors de cliquer sur FR).
 */
export function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;

    if (locale !== "fr") return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    } catch {
      return;
    }
    const fromThisSite = document.referrer.startsWith(window.location.origin);
    if (stored === "en" && !fromThisSite) {
      window.location.replace(`${localePath.en}${window.location.hash}`);
    }
  }, [locale]);

  return null;
}
