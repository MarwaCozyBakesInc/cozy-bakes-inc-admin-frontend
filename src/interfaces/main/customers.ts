import type { ReactNode } from "react";
import type {
  CustomerMetricIconTone,
  CustomerMetricTrendTone,
  CustomerSegmentFilter,
  CustomerStatus,
  CustomerStatusTone,
  CustomersCanvasVariant,
} from "@/types/main/customers";

export interface CustomersWorkspaceConfig {
  ariaLabel: string;
  title: string;
  description: string;
  primaryActionLabel: string;
}

export interface CustomersShellProps {
  children: ReactNode;
}

export interface CustomersCanvasProps {
  ariaLabel: string;
  variant?: CustomersCanvasVariant;
  children: ReactNode;
}

export interface CustomerOverviewMetric {
  label: string;
  value: string;
  subtitle: string;
  trendLabel: string;
  trendTone: CustomerMetricTrendTone;
  iconTone: CustomerMetricIconTone;
  icon: "customers" | "registered" | "repeat" | "inactive" | "vip";
}

export interface CustomerPerformanceMetric {
  label: string;
  value: string;
  icon: "ltv" | "frequency" | "revenue" | "conversion";
}

export interface CustomerSegmentOption {
  label: string;
  value: CustomerSegmentFilter;
  count: number;
}

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: string;
  lastOrder: string;
  daysInactive: string;
  status: CustomerStatus;
  isHighSpender?: boolean;
}

export interface CustomersHeaderProps {
  title: string;
  description: string;
  actionLabel: string;
}

export interface CustomersSummaryGridProps {
  metrics: CustomerOverviewMetric[];
}

export interface CustomersPerformanceOverviewProps {
  metrics: CustomerPerformanceMetric[];
}

export interface CustomersSegmentTabsProps {
  filters: CustomerSegmentOption[];
  activeFilter: CustomerSegmentFilter;
  onFilterChange: (value: CustomerSegmentFilter) => void;
}

export interface CustomersToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  sortLabel: string;
  exportLabel: string;
}

export interface CustomersTableProps {
  rows: CustomerRecord[];
}

export interface CustomersPaginationProps {
  pages: number[];
  currentPage: number;
}

export interface CustomersStatusBadgeProps {
  status: CustomerStatus;
}

export interface CustomerStatusMeta {
  tone: CustomerStatusTone;
}

export interface CustomerDirectoryState {
  defaultSortLabel: string;
  exportLabel: string;
  paginationPages: number[];
}

export interface CustomerOverviewCountMetric {
  count: number;
  growth_percentage: number;
}

export interface CustomerOverviewNoteMetric {
  count: number;
  note: string;
}

export interface CustomersOverviewStatsData {
  total_customers: CustomerOverviewCountMetric;
  registered_only: CustomerOverviewCountMetric;
  repeat_customers: CustomerOverviewCountMetric;
  inactive_customers: CustomerOverviewNoteMetric;
  vip_customers: CustomerOverviewNoteMetric;
}

export interface CustomersOverviewStatsResponse {
  status: string;
  message: string;
  data: CustomersOverviewStatsData;
}
