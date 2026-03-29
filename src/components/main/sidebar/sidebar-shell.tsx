"use client";

import { type ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/data";
import { cn } from "@/lib/utils";
import { SidebarBrand } from "./sidebar-brand";
import { SidebarNav } from "./sidebar-nav";
import { SidebarSignOut } from "./sidebar-sign-out";
import { SidebarToggleIcon } from "./sidebar-icons";
import type { SidebarItem } from "@/data";
import { SidebarHeader } from "./sidebar-header";

type SidebarShellProps = {
  children: ReactNode;
};

function SidebarPanel({
  compact = false,
  activeItemId,
  onSelect,
}: {
  compact?: boolean;
  activeItemId: SidebarItem["id"];
  onSelect?: () => void;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-bg-creamy">
      <SidebarBrand compact={compact} />
      <SidebarNav
        activeItemId={activeItemId}
        compact={compact}
        onSelect={onSelect}
      />
      <SidebarSignOut compact={compact} />
    </div>
  );
}

export function SidebarShell({ children }: SidebarShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mediumExpanded, setMediumExpanded] = useState(false);
  const [desktopExpanded, setDesktopExpanded] = useState(true);

  const activeItem =
    sidebarItems.find((item) => {
      if (!item.href) {
        return false;
      }

      if (item.href === "/") {
        return pathname === "/";
      }

      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }) ??
    sidebarItems.find((item) => item.id === "dashboard") ??
    sidebarItems[0];

  const mediumSidebarWidth = mediumExpanded ? "w-[284px]" : "w-[84px]";
  const desktopSidebarWidth = desktopExpanded ? "w-[284px]" : "w-[84px]";

  return (
    <div className="flex min-h-svh bg-background">
      <div
        className={cn(
          "hidden shrink-0 md:block xl:hidden",
          !mediumExpanded && mediumSidebarWidth,
        )}
      />
      <div
        className={cn(
          "hidden shrink-0 xl:block",
          desktopSidebarWidth,
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden border-r border-primary/15 bg-bg-creamy md:flex xl:hidden",
          mediumSidebarWidth,
          mediumExpanded &&
            "shadow-[0_24px_60px_rgba(20,27,52,0.16)]",
        )}
      >
        <div className="h-full w-full">
          <SidebarPanel
            compact={!mediumExpanded}
            activeItemId={activeItem.id}
          />
        </div>

        <button
          type="button"
          onClick={() => setMediumExpanded((current) => !current)}
          className="absolute top-50 -right-2.5 inline-flex size-5 items-center justify-center rounded-full border border-primary bg-background text-primary shadow-sm"
          aria-label={mediumExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <SidebarToggleIcon expanded={mediumExpanded} />
        </button>
      </aside>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden border-r border-primary/15 bg-bg-creamy xl:flex",
          desktopSidebarWidth,
        )}
      >
        <div className="h-full w-full">
          <SidebarPanel
            compact={!desktopExpanded}
            activeItemId={activeItem.id}
          />
        </div>

        <button
          type="button"
          onClick={() => setDesktopExpanded((current) => !current)}
          className="absolute top-50 -right-2.5 inline-flex size-6 items-center justify-center rounded-full border border-primary bg-background text-primary shadow-sm"
          aria-label={desktopExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <SidebarToggleIcon expanded={desktopExpanded} />
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <SidebarHeader
          currentLabel={activeItem.label}
          onOpenMobileMenu={() => setMobileOpen(true)}
        />

        <main className="flex-1 p-4 md:p-6 xl:p-8">{children}</main>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#141b34]/35 transition-opacity md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[60] w-[286px] max-w-[88vw] border-r border-primary/15 bg-bg-creamy shadow-[0_24px_60px_rgba(20,27,52,0.16)] transition-transform md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <SidebarPanel
          activeItemId={activeItem.id}
          onSelect={() => setMobileOpen(false)}
        />
      </aside>
    </div>
  );
}
