import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
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
