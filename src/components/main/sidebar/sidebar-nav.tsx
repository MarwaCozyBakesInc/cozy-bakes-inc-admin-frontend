import { sidebarItems } from "@/data";
import type { SidebarItem } from "@/data";
import { SidebarNavItem } from "./sidebar-nav-item";

type SidebarNavProps = {
  activeItemId: SidebarItem["id"];
  compact?: boolean;
  onSelect?: () => void;
};

export function SidebarNav({
  activeItemId,
  compact = false,
  onSelect,
}: SidebarNavProps) {
  return (
    <nav className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
      {sidebarItems.map((item) => (
        <SidebarNavItem
          key={item.id}
          item={item}
          active={item.id === activeItemId}
          compact={compact}
          onSelect={onSelect}
        />
      ))}
    </nav>
  );
}
