import type { FindUsHereSummaryGridProps } from "@/interfaces/main/find-us-here";
import { FindUsHereSummaryCard } from "./find-us-here-summary-card";

export function FindUsHereSummaryGrid({
  metrics,
}: FindUsHereSummaryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <FindUsHereSummaryCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
