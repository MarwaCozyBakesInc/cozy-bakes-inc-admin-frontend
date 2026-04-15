import type {
  CustomerOverviewMetric,
  CustomersSummaryGridProps,
} from "@/interfaces/main/customers";
import { CustomersSummaryCard } from "./customers-summary-card";
import { useCustomersOverviewStats } from "@/hooks/api";
import { Shimmer } from "@/components/ui/shimmer";

export function CustomersSummaryGrid({ metrics }: CustomersSummaryGridProps) {
  const { data, isLoading } = useCustomersOverviewStats();
  const overviewStats = data?.data;
  const resolvedMetrics: CustomerOverviewMetric[] = metrics.map((metric) => {
    switch (metric.icon) {
      case "customers":
        return {
          ...metric,
          value:
            overviewStats?.total_customers.count?.toString() ?? metric.value,
          subtitle: "total customers",
          trendLabel:
            overviewStats?.total_customers.growth_percentage !== undefined
              ? `${overviewStats.total_customers.growth_percentage}%`
              : metric.trendLabel,
          trendTone:
            (overviewStats?.total_customers.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "registered":
        return {
          ...metric,
          value:
            overviewStats?.registered_only.count?.toString() ?? metric.value,
          subtitle: "registered customers",
          trendLabel:
            overviewStats?.registered_only.growth_percentage !== undefined
              ? `${overviewStats.registered_only.growth_percentage}%`
              : metric.trendLabel,
          trendTone:
            (overviewStats?.registered_only.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "repeat":
        return {
          ...metric,
          value:
            overviewStats?.repeat_customers.count?.toString() ?? metric.value,
          subtitle: "repeat customers",
          trendLabel:
            overviewStats?.repeat_customers.growth_percentage !== undefined
              ? `${overviewStats.repeat_customers.growth_percentage}%`
              : metric.trendLabel,
          trendTone:
            (overviewStats?.repeat_customers.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "inactive":
        return {
          ...metric,
          value:
            overviewStats?.inactive_customers.count?.toString() ?? metric.value,
          subtitle: "inactive customers",
          trendLabel:
            overviewStats?.inactive_customers.note ?? metric.trendLabel,
          trendTone: "neutral",
        };
      case "vip":
        return {
          ...metric,
          value: overviewStats?.vip_customers.count?.toString() ?? metric.value,
          subtitle: "VIP customers",
          trendLabel: overviewStats?.vip_customers.note ?? metric.trendLabel,
          trendTone: "neutral",
        };
      default:
        return metric;
    }
  });

  if (isLoading) {
    return (
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: metrics.length }).map((_, index) => (
          <Shimmer key={index} className="h-49 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
      {resolvedMetrics.map((metric) => (
        <CustomersSummaryCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
