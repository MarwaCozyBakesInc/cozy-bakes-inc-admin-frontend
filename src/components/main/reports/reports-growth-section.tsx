"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReportRange } from "@/types/main/reports";
import { ReportsRevenueGrowthChart } from "./reports-revenue-growth-chart";
import { ReportsSection } from "./reports-section";
import { useRevenueGrowth } from "@/hooks/api";

const reportRanges: { label: string; value: ReportRange }[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

export function ReportsGrowthSection() {
  const [selectedRange, setSelectedRange] = useState<ReportRange>("daily");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading } = useRevenueGrowth(selectedRange);
  const growthData = data?.data;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    reportRanges.find((range) => range.value === selectedRange)?.label ??
    "Daily";

  return (
    <ReportsSection
      title="Revenue & Growth Analysis"
      description="Track performance trends with predictive forecasting"
      actions={
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <div className="inline-flex rounded-full bg-white/10 p-1">
            <Button
              type="button"
              variant="ghost"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white"
            >
              Revenue
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-text"
            >
              Orders
            </Button>
          </div>

          <div ref={dropdownRef} className="relative min-w-[140px]">
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              onClick={() => setDropdownOpen((value) => !value)}
              className="inline-flex w-full items-center justify-between rounded-full border border-border/20 bg-[#FFF7E7] px-4 py-2 text-left text-sm font-semibold text-[#6B5B4C] shadow-sm transition-colors duration-150 hover:bg-[#FFF4D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
            >
              <span>{selectedLabel}</span>
              <ChevronDown
                className={`size-4 transition-transform duration-150 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen ? (
              <ul
                role="listbox"
                aria-activedescendant={selectedRange}
                className="absolute right-0 z-10 mt-2 w-full overflow-hidden rounded-[18px] border border-border/20 bg-white shadow-[0_14px_40px_rgba(85,80,77,0.12)]"
              >
                {reportRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRange(range.value);
                        setDropdownOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm font-semibold transition-colors duration-150 ${
                        range.value === selectedRange
                          ? "bg-[#FFF4D8] text-[#6B5B4C]"
                          : "text-[#6B5B4C] hover:bg-[#FFF7E7]"
                      }`}
                    >
                      <span>{range.label}</span>
                      {range.value === selectedRange ? (
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      }
    >
      <ReportsRevenueGrowthChart
        period={selectedRange}
        chartData={growthData?.chart}
        isLoading={isLoading}
      />
    </ReportsSection>
  );
}
