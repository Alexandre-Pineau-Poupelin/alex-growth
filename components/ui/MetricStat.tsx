type MetricStatProps = {
  value: string;
  label: string;
};

export function MetricStat({ value, label }: MetricStatProps) {
  return (
    <div className="border-l-2 border-border pl-4">
      <p className="font-mono text-2xl font-medium tabular-nums tracking-[-0.02em] text-fg sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
