import type {
  FindUsHereSummaryGridProps,
  FindUsHereSummaryMetric,
} from "@/interfaces/main/find-us-here";
import { FindUsHereSummaryCard } from "./find-us-here-summary-card";
import { useMarketDashboardStats } from "@/hooks/api";
import { Shimmer } from "@/components/ui/shimmer";

export function FindUsHereSummaryGrid({ metrics }: FindUsHereSummaryGridProps) {
  const { data, isLoading } = useMarketDashboardStats();
  const stats = data?.data;

  const resolvedMetrics: FindUsHereSummaryMetric[] = metrics.map((metric) => {
    switch (metric.icon) {
      case "store":
        return {
          ...metric,
          value: stats?.total_markets?.toString() ?? metric.value,
          suffix: "markets",
        };
      case "calendar":
        return {
          ...metric,
          value: stats?.active_days?.toString() ?? metric.value,
          suffix: "days",
        };
      case "clock":
        return {
          ...metric,
          value: stats?.markets_this_week?.toString() ?? metric.value,
          suffix: "markets this week",
        };
      case "trend":
        return {
          ...metric,
          value: stats?.avg_markets_per_day?.toString() ?? metric.value,
          suffix: "markets per day",
        };
      default:
        return metric;
    }
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: metrics.length }).map((_, index) => (
          <Shimmer key={index} className="h-[118px] w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="rounded-2xl border border-primary/15 bg-gradient-to-b from-[#fbf8eb] to-white p-8 text-center shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
        <p className="text-lg font-semibold text-dark">
          No market stats available
        </p>
        <p className="mt-2 text-sm font-medium text-muted-text">
          Market summary data will appear here once it becomes available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {resolvedMetrics.map((metric) => (
        <FindUsHereSummaryCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
