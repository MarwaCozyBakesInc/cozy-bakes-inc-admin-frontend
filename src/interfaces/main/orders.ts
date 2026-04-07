import type { ReactNode } from "react";
import type {
  ApiOrderStatus,
  OrderFilterValue,
  OrderPaymentMethod,
  OrderPaymentStatus,
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

export interface OrdersPaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface OrderListItem {
  id: number;
  order_number: string;
  customer_name: string;
  customer_phone: string | null;
  customer_email: string;
  total_quantity: string;
  subtotal: string;
  delivery_fee: string;
  total_amount: string;
  status: ApiOrderStatus;
  payment_status: OrderPaymentStatus;
  payment_method: OrderPaymentMethod;
  created_at: string;
}

export interface OrdersPaginationData {
  current_page: number;
  data: OrderListItem[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: OrdersPaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface OrdersApiResponse {
  status: string;
  message: string;
  data: OrdersPaginationData;
}
