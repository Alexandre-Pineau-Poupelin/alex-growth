"use client";

import type { MouseEvent } from "react";
import { LOCALE_STORAGE_KEY, localePath, locales, type Locale } from "@/data/i18n";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
  className?: string;
};

/**
 * Bouton FR / EN. Chaque langue a sa propre adresse (/ et /en) pour le référencement ;
 * le choix est mémorisé pour les visites suivantes, et la section en cours (#ancre) est conservée.
 */
export function LanguageToggle({ locale, label, className }: LanguageToggleProps) {
  function remember(target: Locale) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, target);
      } catch {
        // Stockage indisponible : la langue ne sera simplement pas mémorisée.
      }
      if (target !== locale && window.location.hash) {
        event.preventDefault();
        window.location.href = `${localePath[target]}${window.location.hash}`;
      }
    };
  }

  return (
    <nav
      aria-label={label}
      className={cn(
        "inline-flex h-10 items-center rounded-md border border-border p-0.5 font-mono text-xs",
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <a
            key={l}
            href={localePath[l]}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            onClick={remember(l)}
            className={cn(
              "flex h-full min-w-9 items-center justify-center rounded px-2 uppercase transition-[background-color,color,transform] duration-100 active:scale-95",
              active ? "bg-fg text-bg" : "text-muted hover:text-fg",
            )}
          >
            {l}
          </a>
        );
      })}
    </nav>
  );
}
