"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user" : si le visiteur a activé « Réduire les animations » dans son
 * système, Framer Motion supprime les déplacements et ne garde que les fondus.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
