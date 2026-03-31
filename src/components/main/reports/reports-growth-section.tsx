import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReportsRevenueGrowthChart } from "./reports-revenue-growth-chart";
import { ReportsSection } from "./reports-section";

export function ReportsGrowthSection() {
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

          <Button
            type="button"
            variant="ghost"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFF7E7] px-4 py-2 text-xs font-semibold text-[#6B5B4C]"
          >
            Daily
            <ChevronDown className="size-4" strokeWidth={2} />
          </Button>
        </div>
      }
    >
      <ReportsRevenueGrowthChart />
    </ReportsSection>
  );
}
