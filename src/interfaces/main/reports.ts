import type { ReactNode } from "react";
import type {
  ReportCategoryTone,
  ReportChartSeries,
  ReportMetricIcon,
  ReportMetricTone,
  ReportRange,
} from "@/types/main/reports";

export interface ReportMetric {
  label: string;
  value: string;
  note: string;
  trend: string;
  tone: ReportMetricTone;
  icon: ReportMetricIcon;
}

export interface ReportSalesPoint {
  label: string;
  value: number;
}

export interface ReportRevenuePoint {
  label: string;
  revenue: number;
  forecast?: number;
}

export interface ReportCategoryShare {
  label: string;
  value: number;
  tone: ReportCategoryTone;
}

export interface ReportCustomerSegment {
  label: string;
  users: number;
  tone: ReportCategoryTone;
}

export interface ReportFunnelStage {
  label: string;
  value: number;
  dropoff: string;
  progress: number;
  tone: ReportCategoryTone;
}

export interface ReportProductPerformance {
  productName: string;
  unitsSold: string;
  totalRevenue: string;
  avgPrice: string;
  performance: number;
}

export interface ReportsSectionProps {
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export interface ReportsMetricCardProps {
  metric: ReportMetric;
}

export interface ReportsLegendItemProps {
  label: string;
  tone: ReportCategoryTone;
  suffix?: string;
}

export interface ReportsChartToggleProps {
  activeSeries: ReportChartSeries;
  activeRange: ReportRange;
}
