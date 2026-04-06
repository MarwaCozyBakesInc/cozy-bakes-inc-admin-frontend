import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { PaginatedApiResponse } from "@/interfaces/pagination";
import type {
  DashboardActionIcon,
  DashboardCategoryTone,
  DashboardOrderStatus,
  DashboardStatTone,
} from "@/types/main/dashboard";

export interface DashboardStat {
  title: string;
  value: string;
  note: string;
  trend: string;
  icon: LucideIcon;
  tone: DashboardStatTone;
}

export interface SalesPoint {
  day: string;
  value: number;
}

export interface CategoryShare {
  name: string;
  value: number;
  tone: DashboardCategoryTone;
}

export interface StockProduct {
  name: string;
  stock: number;
  threshold: number;
}

export interface RecentOrder {
  id: string;
  customer: string;
  items: number;
  timeAgo: string;
  amount: string;
  status: DashboardOrderStatus;
}

export interface TopProduct {
  rank: number;
  name: string;
  sold: number;
  growth: string;
  revenue: string;
}

export interface DashboardStockAlert {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DashboardAction {
  label: string;
  icon: DashboardActionIcon;
  filled: boolean;
}

export interface DashboardSectionCardProps {
  title: string;
  description: string;
  actionLabel?: string;
  className?: string;
  children: ReactNode;
}

export interface DashboardProductThumbProps {
  label: string;
  className?: string;
}

export interface DashboardStatCardProps {
  stat: DashboardStat;
}

export interface DashboardSummaryAmountMetric {
  amount: number;
  percentage: number;
}

export interface DashboardSummaryCountMetric {
  count: number;
  percentage: number;
}

export interface DashboardSummaryData {
  revenue_today: DashboardSummaryAmountMetric;
  total_orders: DashboardSummaryCountMetric;
  pending_orders: DashboardSummaryCountMetric;
  delivered_today: DashboardSummaryCountMetric;
}

export interface DashboardSummaryApiResponse {
  status: string;
  data: DashboardSummaryData;
}

export interface DashboardSalesOverview {
  labels: string[];
  revenues: number[];
}

export interface DashboardSalesByCategory {
  labels: string[];
  percentages: number[];
}

export interface DashboardChartsData {
  sales_overview: DashboardSalesOverview;
  sales_by_category: DashboardSalesByCategory;
}

export interface DashboardChartsApiResponse {
  status: string;
  data: DashboardChartsData;
}

export interface DashboardTopProductItem {
  id: number;
  title: string;
  current_revenue: string;
  last_revenue: string;
  total_revenue: string;
  growth_percentage: number;
}

export type DashboardTopProductsApiResponse =
  PaginatedApiResponse<DashboardTopProductItem>;

export interface DashboardPaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface DashboardLowStockSubCategory {
  id: number;
  title: string;
  category: string;
}

export interface DashboardLowStockProduct {
  slug: string;
  title: string;
  price: number;
  discount_percentage: number;
  final_price: number;
  quantity: number;
  stock_status: string;
  status: number;
  sub_categories: DashboardLowStockSubCategory[];
  images: unknown[];
}

export interface DashboardLowStockPaginationData {
  current_page: number;
  data: DashboardLowStockProduct[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: DashboardPaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface DashboardLowStockProductsApiResponse {
  status: string;
  threshold: number;
  data: DashboardLowStockPaginationData;
}
