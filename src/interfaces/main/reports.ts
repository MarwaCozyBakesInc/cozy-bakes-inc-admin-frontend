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
  percentage?: number;
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

export interface ReportAmountGrowthMetric {
  amount: number;
  growth_percentage: number;
}

export interface ReportCountGrowthMetric {
  count: number;
  growth_percentage: number;
}

export interface ReportPercentageMetric {
  percentage: number;
}

export interface AnalyticsOverviewData {
  total_revenue: ReportAmountGrowthMetric;
  average_order_value: ReportAmountGrowthMetric;
  total_products_sold: ReportCountGrowthMetric;
  conversion_rate: ReportPercentageMetric;
}

export interface AnalyticsOverviewResponse {
  status: string;
  message: string;
  data: AnalyticsOverviewData;
}

export interface SalesOverviewData {
  labels: string[];
  revenues: number[];
}

export interface SalesByCategoryData {
  labels: string[];
  percentages: number[];
}

export interface SalesAnalyticsData {
  sales_overview: SalesOverviewData;
  sales_by_category: SalesByCategoryData;
}

export interface SalesAnalyticsResponse {
  status: string;
  data: SalesAnalyticsData;
}

export interface RevenueGrowthChartDatasets {
  revenue: number[];
  orders: number[];
  forecast: number[];
}

export interface RevenueGrowthChartData {
  labels: string[];
  datasets: RevenueGrowthChartDatasets;
}

export interface RevenueGrowthData {
  period: ReportRange;
  chart: RevenueGrowthChartData;
}

export interface RevenueGrowthResponse {
  status: string;
  message: string;
  data: RevenueGrowthData;
}

export interface CustomerSegmentationData {
  labels: string[];
  counts: number[];
  percentages: number[];
}

export interface ConversionFunnelStageData {
  count: number | string;
  percentage: number;
  dropoff_count: number;
  dropoff_rate: number;
}

export interface ConversionFunnelData {
  visitors: ConversionFunnelStageData;
  checkout_started: ConversionFunnelStageData;
  checkout_completed: ConversionFunnelStageData;
  purchase_completed: ConversionFunnelStageData;
}

export interface SegmentationConversionFunnelData {
  customer_segmentation: CustomerSegmentationData;
  conversion_funnel: ConversionFunnelData;
}

export interface SegmentationConversionFunnelResponse {
  status: string;
  data: SegmentationConversionFunnelData;
}

export interface SalesPerformanceItem {
  product_name: string;
  units_sold: number;
  total_revenue: number;
  avg_price: number;
  performance_percentage: number;
}

export interface SalesPerformancePaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface SalesPerformancePaginationData {
  current_page: number;
  data: SalesPerformanceItem[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: SalesPerformancePaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface SalesPerformanceResponse {
  status: string;
  message: string;
  data: SalesPerformancePaginationData;
}
