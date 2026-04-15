"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Download, Search } from "lucide-react";
import type { CustomersToolbarProps } from "@/interfaces/main/customers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CustomerSortOption } from "@/types/main/customers";

const sortOptions: { value: CustomerSortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "highest_spent", label: "Highest Spent" },
  { value: "most_orders", label: "Most Orders" },
  { value: "last_order", label: "Last Order" },
];

export function CustomersToolbar({
  searchValue,
  onSearchChange,
  sortValue,
  onSortChange,
  exportLabel,
  onExport,
}: CustomersToolbarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!sortRef.current?.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedSortLabel =
    sortOptions.find((option) => option.value === sortValue)?.label ?? "Newest";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/10 bg-bg-creamy/32 p-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
        <label className="flex h-[52px] w-full items-center gap-3 rounded-full border border-[#d0d5dd] bg-[color-mix(in_srgb,var(--color-bg-creamy)_14%,transparent)] px-6 text-sm text-gray transition-colors focus-within:border-primary/60 xl:w-[455px]">
          <Search className="size-5 text-primary" strokeWidth={2.1} />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name ..."
            className="w-full bg-transparent text-dark outline-none placeholder:text-gray"
          />
        </label>

        <div ref={sortRef} className="relative xl:w-[220px]">
          <button
            type="button"
            onClick={() => setIsSortOpen((open) => !open)}
            className={cn(
              "inline-flex h-[52px] w-full items-center justify-between rounded-full border border-primary bg-bg-creamy px-6 text-sm font-medium text-dark transition-colors",
              isSortOpen && "border-primary/80 bg-white",
            )}
          >
            <span>{selectedSortLabel}</span>
            <ChevronDown
              className={cn(
                "size-4 text-primary transition-transform",
                isSortOpen && "rotate-180",
              )}
              strokeWidth={2.1}
            />
          </button>

          {isSortOpen ? (
            <div className="absolute top-[calc(100%+10px)] left-0 z-20 w-full overflow-hidden rounded-3xl border border-primary/15 bg-white p-2 shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
              {sortOptions.map((option) => {
                const isSelected = option.value === sortValue;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onSortChange(option.value);
                      setIsSortOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                      isSelected
                        ? "bg-primary text-white"
                        : "text-dark hover:bg-bg-creamy/60",
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected ? <Check className="size-4" strokeWidth={2.3} /> : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <Button
        type="button"
        variant="ghost"
        onClick={onExport}
        className="inline-flex h-[52px] items-center gap-2 self-start rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Download className="size-4" strokeWidth={2.2} />
        {exportLabel}
      </Button>
    </div>
  );
}
