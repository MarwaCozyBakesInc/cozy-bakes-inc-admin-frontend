import type { CustomersSummaryGridProps } from "@/interfaces/main/customers";
import { CustomersSummaryCard } from "./customers-summary-card";

export function CustomersSummaryGrid({
  metrics,
}: CustomersSummaryGridProps) {
  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric) => (
        <CustomersSummaryCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
