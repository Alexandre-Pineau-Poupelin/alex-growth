"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { spring } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

/**
 * Apparition discrète au scroll.
 *
 * On rend TOUJOURS un composant motion, côté serveur comme côté client : remplacer
 * le motion.div par un <div> statique quand prefers-reduced-motion est actif créait
 * un écart d'hydratation, et le style="opacity:0" rendu par le serveur restait figé —
 * la page entière était invisible pour ces visiteurs. La réduction de mouvement est
 * désormais gérée globalement par <MotionConfig reducedMotion="user"> (MotionProvider) :
 * le déplacement est supprimé, seul le fondu d'opacité reste.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring.gentle, delay }}
    >
      {children}
    </Component>
  );
}
