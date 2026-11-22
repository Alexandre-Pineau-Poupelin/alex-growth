"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content, siteConfig } from "@/data/content";
import type { Locale } from "@/data/i18n";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

/** Section actuellement à l'écran, pour indiquer au visiteur où il se trouve. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Bande horizontale au tiers supérieur de l'écran : la section qui la traverse est active.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Header({ locale }: { locale: Locale }) {
  const { nav, ui } = content[locale];
  const sectionIds = useMemo(() => nav.map((item) => item.href.slice(1)), [nav]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  // La séparation n'apparaît que quand du contenu passe sous le header.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "header-material sticky top-0 z-50 border-b transition-[border-color,background-color] duration-200",
        scrolled || open ? "border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium text-fg">
          {siteConfig.shortName}
        </a>

        <nav aria-label={ui.navLabel} className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative isolate rounded-md px-3 py-1.5 text-sm transition-colors duration-150",
                  isActive ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-fg/[0.06]"
                    transition={spring.snappy}
                  />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* FR / EN reste visible sur mobile, à côté du bouton de menu. */}
          <LanguageToggle locale={locale} label={ui.languageLabel} />
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle labelToLight={ui.themeToLight} labelToDark={ui.themeToDark} />
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2"
            >
              {ui.bookShort}
            </Button>
          </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-transform duration-100 active:scale-95 lg:hidden"
          aria-label={open ? ui.menuClose : ui.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <motion.path
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={false}
              animate={{ d: open ? "M6 6L18 18" : "M4 8L20 8" }}
              transition={spring.snappy}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={false}
              animate={{ d: open ? "M6 18L18 6" : "M4 16L20 16" }}
              transition={spring.snappy}
            />
          </svg>
        </button>
        </div>
      </div>

      {/* Le menu descend du header et y remonte par le même chemin. Interruptible :
          un second appui en pleine animation repart de la position affichée. */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={spring.snappy}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <nav aria-label={ui.navLabel} className="flex flex-col px-6 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? "location" : undefined}
                  className={cn(
                    "py-3 text-base transition-colors",
                    active === item.href.slice(1) ? "text-fg" : "text-muted",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between gap-3 border-t border-border py-4">
                <Button
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2.5"
                >
                  {ui.bookShort}
                </Button>
                <ThemeToggle labelToLight={ui.themeToLight} labelToDark={ui.themeToDark} />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
