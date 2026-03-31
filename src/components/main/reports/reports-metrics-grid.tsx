import { reportMetrics } from "./reports-data";
import { ReportsMetricCard } from "./reports-metric-card";

export function ReportsMetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {reportMetrics.map((metric) => (
        <ReportsMetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
