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
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none";

const variantStyles: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:opacity-90",
  outline: "border border-border text-fg hover:bg-surface",
  ghost: "text-fg hover:text-accent",
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </a>
    );
  }

  const { onClick, type = "button" } = props as NativeButtonProps;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
