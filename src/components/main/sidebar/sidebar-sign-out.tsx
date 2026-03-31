import { sidebarSignOutLabel } from "@/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarLogoutIcon } from "./sidebar-icons";

type SidebarSignOutProps = {
  compact?: boolean;
};

export function SidebarSignOut({ compact = false }: SidebarSignOutProps) {
  return (
    <div className="shrink-0 border-t border-primary/15 p-4">
      <Button
        type="button"
        variant="ghost"
        className={cn(
          "flex w-full items-center justify-center bg-[#ff1010] font-medium text-white transition-transform hover:scale-[0.99]",
          compact ? "h-12 rounded-[14px] px-0" : "h-12 rounded-lg px-5"
        )}
        title={compact ? sidebarSignOutLabel : undefined}
      >
        <SidebarLogoutIcon className="shrink-0" />
        <span className={cn("ml-2", compact ? "hidden" : "inline")}>
          {sidebarSignOutLabel}
        </span>
      </Button>
    </div>
  );
}
