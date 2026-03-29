"use client";

import Link from "next/link";
import { useState } from "react";
import type { SidebarItem } from "@/data";
import { cn } from "@/lib/utils";
import {
  SidebarChevron,
  SidebarIcon,
  SidebarPlusIcon,
} from "./sidebar-icons";

type SidebarNavItemProps = {
  item: SidebarItem;
  active?: boolean;
  compact?: boolean;
  onSelect?: () => void;
};

export function SidebarNavItem({
  item,
  active = false,
  compact = false,
  onSelect,
}: SidebarNavItemProps) {
  const hasChildren = Boolean(item.children?.length);
  const [expanded, setExpanded] = useState(item.id === "categories");
  const parentHighlighted = active;

  const sharedClassName = cn(
    "group flex w-full shrink-0 items-center rounded-[14px] text-left transition-colors",
    compact
      ? "h-[50px] justify-center px-3"
      : "h-[50.5px] px-4 pr-5",
    active
      ? "bg-primary text-white shadow-[0_12px_24px_rgba(209,150,40,0.22)]"
      : "text-muted-text hover:bg-white/80 hover:text-light-chocolate"
  );

  if (hasChildren && !compact) {
    return (
      <div
        className={cn(
          "w-full shrink-0 transition-all",
          expanded
            ? "rounded-[24px] bg-white p-3 shadow-[0_10px_30px_rgba(20,27,52,0.04)]"
            : "rounded-[14px] bg-transparent p-0 shadow-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "flex h-[50.5px] w-full shrink-0 items-center rounded-[14px] px-4 pr-5 text-left transition-colors",
            parentHighlighted
              ? "bg-primary text-white shadow-[0_12px_24px_rgba(209,150,40,0.22)]"
              : "text-muted-text hover:bg-white/80 hover:text-light-chocolate",
          )}
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
        >
          <span className="flex items-center justify-start">
            <SidebarIcon
              icon={item.icon}
              className={parentHighlighted ? "text-white" : "text-gray"}
            />
          </span>

          <span className="ml-3 flex min-w-0 flex-1 items-center gap-2">
            <span className="truncate text-[15px] font-semibold">
              {item.label}
            </span>
          </span>

          <SidebarChevron
            className={cn(
              "shrink-0 transition-transform",
              parentHighlighted ? "text-white" : "text-muted-text",
              expanded ? "rotate-90" : "rotate-0",
            )}
            collapsed={false}
          />
        </button>

        {expanded ? (
          <div className="mt-2 space-y-1.5 rounded-2xl bg-transparent">
            {item.children?.map((child, index) => (
              <Link
                key={child.label}
                href={child.href}
                className={cn(
                  "flex h-10 w-full items-center rounded-[14px] px-4 text-left text-xs transition-colors",
                  index === 0
                    ? "bg-bg-creamy/60 font-semibold text-primary"
                    : "font-medium text-muted-text hover:bg-bg-creamy/40",
                )}
                onClick={onSelect}
              >
                {child.label}
              </Link>
            ))}

            <button
              type="button"
              className="mt-1 flex h-10 w-full items-center justify-center gap-2 rounded-2xl bg-bg-creamy px-4 text-xs font-medium text-primary transition-colors hover:bg-bg-creamy/80"
              onClick={onSelect}
            >
              <SidebarPlusIcon />
              <span>{item.ctaLabel}</span>
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  const content = (
    <>
      <span
        className={cn(
          "flex items-center",
          compact ? "justify-center" : "justify-start"
        )}
      >
        <SidebarIcon
          icon={item.icon}
          className={active ? "text-white" : "text-gray"}
        />
      </span>

      <span
        className={cn(
          "ml-3 min-w-0 flex-1 items-center gap-2",
          compact ? "hidden" : "flex"
        )}
      >
        <span className="truncate text-[15px] font-semibold">{item.label}</span>
      </span>

      {item.hasChevron ? (
        <SidebarChevron
          className={cn("ml-6 shrink-0", compact ? "hidden" : "block")}
          collapsed={false}
        />
      ) : null}
    </>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={sharedClassName}
        onClick={onSelect}
        aria-current={active ? "page" : undefined}
        title={compact ? item.label : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={sharedClassName}
      onClick={onSelect}
      title={compact ? item.label : undefined}
    >
      {content}
    </button>
  );
}
