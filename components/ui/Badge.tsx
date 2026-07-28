import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        variant === "accent"
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
