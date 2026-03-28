import {
  BarChart3,
  Bell,
  Box,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FolderOpen,
  LayoutGrid,
  LogOut,
  MapPin,
  Menu,
  NotebookText,
  Phone,
  Plus,
  Settings,
  Star,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SidebarIconName } from "@/data";

type SidebarIconProps = {
  icon: SidebarIconName;
  className?: string;
};

const iconMap = {
  dashboard: LayoutGrid,
  orders: ClipboardList,
  products: Box,
  categories: FolderOpen,
  customers: UsersRound,
  location: MapPin,
  menu: NotebookText,
  reports: BarChart3,
  reviews: Star,
  contact: Phone,
  settings: Settings,
} satisfies Record<
  SidebarIconName,
  React.ComponentType<{ className?: string }>
>;

export function SidebarIcon({ icon, className }: SidebarIconProps) {
  const Icon = iconMap[icon];

  return <Icon className={cn("size-5", className)} strokeWidth={1.9} />;
}

export function SidebarChevron({
  collapsed,
  className,
}: {
  collapsed?: boolean;
  className?: string;
}) {
  return (
    <ChevronRight
      className={cn(
        "size-4 text-primary transition-transform",
        collapsed && "rotate-180",
        className,
      )}
      strokeWidth={2}
    />
  );
}

export function SidebarToggleIcon({
  expanded,
  className,
}: {
  expanded: boolean;
  className?: string;
}) {
  const Icon = expanded ? ChevronLeft : ChevronRight;

  return <Icon className={cn("size-4", className)} strokeWidth={2.5} />;
}

export function HeaderMenuIcon({ className }: { className?: string }) {
  return <Menu className={cn("size-5", className)} strokeWidth={2} />;
}

export function HeaderBellIcon({ className }: { className?: string }) {
  return <Bell className={cn("size-5", className)} strokeWidth={2} />;
}

export function SidebarLogoutIcon({ className }: { className?: string }) {
  return <LogOut className={cn("size-5", className)} strokeWidth={2} />;
}

export function SidebarPlusIcon({ className }: { className?: string }) {
  return <Plus className={cn("size-4", className)} strokeWidth={2} />;
}
