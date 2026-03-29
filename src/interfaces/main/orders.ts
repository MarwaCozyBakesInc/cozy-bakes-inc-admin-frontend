import type { ReactNode } from "react";
import type {
  OrderFilterValue,
  OrderStatus,
  OrderViewMode,
} from "@/types/main/orders";

export interface OrderRecord {
  id: string;
  customer: string;
  phone: string;
  items: number;
  details: string;
  total: string;
  status: OrderStatus;
  date: string;
  time: string;
}

export interface OrderFilterOption {
  label: string;
  value: OrderFilterValue;
  count: number;
}

export interface OrdersHeaderProps {
  title: string;
  description: string;
}

export interface OrdersFilterTabsProps {
  filters: OrderFilterOption[];
  activeFilter: OrderFilterValue;
  onFilterChange: (value: OrderFilterValue) => void;
}

export interface OrdersToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  viewMode: OrderViewMode;
  onViewModeChange: (value: OrderViewMode) => void;
}

export interface OrdersStatusBadgeProps {
  status: OrderStatus;
}

export interface OrdersTableProps {
  orders: OrderRecord[];
}

export interface OrdersCardGridProps {
  orders: OrderRecord[];
}

export interface OrdersPaginationProps {
  pages: number[];
  currentPage: number;
}

export interface OrdersViewToggleOption {
  value: OrderViewMode;
  label: string;
  icon: ReactNode;
}

export interface OrdersEmptyStateProps {
  hasSearch: boolean;
  hasFilteredStatus: boolean;
  viewMode: OrderViewMode;
  onResetFilters: () => void;
  onClearSearch: () => void;
}
