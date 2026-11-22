import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  "aria-label"?: string;
};

// Retour visuel dès l'appui (active:), pas au relâchement : le bouton se tasse
// légèrement en 100 ms. C'est ce qui donne la sensation qu'il répond tout de suite.
const baseStyles =
  "inline-flex select-none items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium " +
  "transition-[transform,background-color,color,opacity,border-color] duration-100 ease-out " +
  "active:scale-[0.97] motion-reduce:active:scale-100";

const variantStyles: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:opacity-90 active:opacity-80",
  outline: "border border-border bg-bg/40 text-fg hover:bg-surface active:bg-surface",
  ghost: "text-fg hover:text-accent",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = buttonClasses(variant, className);

  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </a>
    );
  }

  const { onClick, type = "button" } = props as NativeButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={(props as NativeButtonProps)["aria-label"]}
    >
      {children}
    </button>
  );
}
