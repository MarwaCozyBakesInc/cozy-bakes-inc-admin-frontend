"use client";

import { LayoutGrid, List, Search } from "lucide-react";
import type {
  OrdersToolbarProps,
  OrdersViewToggleOption,
} from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";

const viewOptions: OrdersViewToggleOption[] = [
  {
    value: "table",
    label: "Table",
    icon: <List className="size-4" />,
  },
  {
    value: "card",
    label: "Card",
    icon: <LayoutGrid className="size-4" />,
  },
];

export function OrdersToolbar({
  searchValue,
  onSearchChange,
  viewMode,
  onViewModeChange,
}: OrdersToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[16px] border border-border/10 bg-bg-creamy/40 p-4 md:p-5 xl:flex-row xl:items-center xl:justify-between">
      <label className="flex h-[52px] w-full items-center gap-2 rounded-[999px] border border-[#D0D5DD] bg-white/40 px-5 text-gray xl:max-w-[430px]">
        <Search className="size-5 text-primary" />
        <input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by customer name or order ID..."
          className="h-full flex-1 bg-transparent text-sm font-medium text-dark outline-none placeholder:text-gray"
        />
      </label>

      <div className="flex h-[52px] w-full max-w-[220px] items-center gap-1.5 rounded-[999px] bg-[#FBF8EB] p-1.5 self-end xl:self-auto">
        {viewOptions.map((option) => {
          const isActive = option.value === viewMode;

          return (
            <Button
              key={option.value}
              type="button"
              variant="ghost"
              onClick={() => onViewModeChange(option.value)}
              className={cn(
                "inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-[999px] text-sm font-semibold tracking-[-0.02em] transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-muted-text hover:bg-white/70",
              )}
            >
              {option.icon}
              <span>{option.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
