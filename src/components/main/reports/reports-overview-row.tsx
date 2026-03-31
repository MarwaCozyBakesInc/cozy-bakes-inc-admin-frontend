import { cn } from "@/lib/utils";
import { categoryShares, segmentToneMeta } from "./reports-data";
import { ReportsDonutChart } from "./reports-donut-chart";
import { ReportsSalesOverviewChart } from "./reports-sales-overview-chart";
import { ReportsSection } from "./reports-section";

export function ReportsOverviewRow() {
  return (
    <div className="grid gap-4 2xl:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.8fr)]">
      <div className="min-w-0">
        <ReportsSection
          title="Sales Overview"
          description="Daily performance this week"
          actions={
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E7] px-3 py-1.5 text-xs font-semibold text-chocolate">
              <span className="size-2 rounded-full bg-primary" />
              Revenue
            </div>
          }
        >
          <ReportsSalesOverviewChart />
        </ReportsSection>
      </div>

      <div className="min-w-0">
        <ReportsSection
          title="Sales by Category"
          description="This month&apos;s distribution"
        >
          <div className="flex flex-col items-center gap-5 sm:gap-6">
            <ReportsDonutChart
              items={categoryShares.map((item) => ({
                value: item.value,
                color: segmentToneMeta[item.tone].color,
              }))}
              innerLabel={"Breads\n35%".replace("\n", " ")}
              size={164}
            />

            <div className="w-full space-y-3">
              {categoryShares.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "size-2.5 rounded-full",
                        segmentToneMeta[item.tone].bulletClassName,
                      )}
                    />
                    <span className="text-sm font-medium text-dark">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-text">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ReportsSection>
      </div>
    </div>
  );
}
