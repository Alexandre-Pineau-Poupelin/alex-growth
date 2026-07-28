type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-prose">
      {eyebrow ? (
        <p className="mb-3 font-mono text-sm text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
