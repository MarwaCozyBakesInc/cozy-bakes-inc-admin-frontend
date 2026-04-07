import { dashboardStats } from "@/data/main/dashboard";
import type { DashboardStat, DashboardSummaryData } from "@/interfaces";

export function formatPercentage(value: number) {
  if (value > 0) return `+${value}%`;
  return `${value}%`;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildDashboardStats(summary?: DashboardSummaryData): DashboardStat[] {
  if (!summary) return dashboardStats;

  return [
    {
      ...dashboardStats[0],
      value: formatCurrency(summary.revenue_today.amount),
      note: "vs previous period",
      trend: formatPercentage(summary.revenue_today.percentage),
    },
    {
      ...dashboardStats[1],
      value: summary.total_orders.count.toString(),
      note: "vs previous period",
      trend: formatPercentage(summary.total_orders.percentage),
    },
    {
      ...dashboardStats[2],
      value: summary.pending_orders.count.toString(),
      note: "vs previous period",
      trend: formatPercentage(summary.pending_orders.percentage),
    },
    {
      ...dashboardStats[3],
      value: summary.delivered_today.count.toString(),
      note: "vs previous period",
      trend: formatPercentage(summary.delivered_today.percentage),
    },
  ];
}
