"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buttonClasses } from "@/components/ui/Button";

type Variant = "outline" | "ghost";
import { spring } from "@/lib/motion";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
  labels: { copy: string; copied: string; copiedLive: string };
  variant?: Variant;
};

/**
 * Un lien mailto: n'ouvre rien chez beaucoup de recruteurs (Gmail ou Outlook dans le
 * navigateur, pas de logiciel de messagerie configuré). Ce bouton copie l'adresse et
 * confirme visuellement que c'est fait.
 */
export function CopyEmailButton({ email, className, labels, variant = "ghost" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Presse-papiers indisponible (contexte non sécurisé) : on ouvre le mailto à la place.
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" onClick={copy} className={buttonClasses(variant, className)}>
      <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <AnimatePresence initial={false} mode="popLayout">
          {copied ? (
            <motion.svg
              key="check"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="none"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={spring.snappy}
            >
              <path
                d="M3.5 8.5l3 3 6-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="copy"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="none"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={spring.snappy}
            >
              <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M3 10.5V3.5A1 1 0 0 1 4 2.5h6.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
      <span>{copied ? labels.copied : labels.copy}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? labels.copiedLive : ""}
      </span>
    </button>
  );
}
