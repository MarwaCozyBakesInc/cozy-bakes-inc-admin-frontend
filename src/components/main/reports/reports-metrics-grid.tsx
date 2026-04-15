"use client";

import { useAnalyticsOverview } from "@/hooks/api";
import type { ReportMetric } from "@/interfaces/main/reports";
import { Shimmer } from "@/components/ui/shimmer";
import { reportMetrics } from "./reports-data";
import { ReportsMetricCard } from "./reports-metric-card";

export function ReportsMetricsGrid() {
  const { data, isLoading } = useAnalyticsOverview();
  const overviewData = data?.data;

  const resolvedMetrics: ReportMetric[] = reportMetrics.map((metric) => {
    switch (metric.icon) {
      case "revenue":
        return {
          ...metric,
          value:
            overviewData?.total_revenue.amount !== undefined
              ? `$${overviewData.total_revenue.amount}`
              : metric.value,
          trend:
            overviewData?.total_revenue.growth_percentage !== undefined
              ? `${overviewData.total_revenue.growth_percentage}%`
              : metric.trend,
          tone:
            (overviewData?.total_revenue.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "average-order":
        return {
          ...metric,
          value:
            overviewData?.average_order_value.amount !== undefined
              ? `$${overviewData.average_order_value.amount}`
              : metric.value,
          trend:
            overviewData?.average_order_value.growth_percentage !== undefined
              ? `${overviewData.average_order_value.growth_percentage}%`
              : metric.trend,
          tone:
            (overviewData?.average_order_value.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "products":
        return {
          ...metric,
          value:
            overviewData?.total_products_sold.count !== undefined
              ? overviewData.total_products_sold.count.toString()
              : metric.value,
          trend:
            overviewData?.total_products_sold.growth_percentage !== undefined
              ? `${overviewData.total_products_sold.growth_percentage}%`
              : metric.trend,
          tone:
            (overviewData?.total_products_sold.growth_percentage ?? 0) < 0
              ? "negative"
              : "positive",
        };
      case "conversion":
        return {
          ...metric,
          value:
            overviewData?.conversion_rate.percentage !== undefined
              ? `${overviewData.conversion_rate.percentage}%`
              : metric.value,
          trend: "Current rate",
          tone: "positive",
        };
      default:
        return metric;
    }
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: reportMetrics.length }).map((_, index) => (
          <Shimmer key={index} className="h-[168px] w-full rounded-[16px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {resolvedMetrics.map((metric) => (
        <ReportsMetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
