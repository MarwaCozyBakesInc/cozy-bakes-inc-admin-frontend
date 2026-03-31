import { cn } from "@/lib/utils";
import { conversionFunnel, customerSegments } from "./reports-data";
import { ReportsDonutChart } from "./reports-donut-chart";
import { ReportsSection } from "./reports-section";
import { formatNumber } from "./reports-utils";

export function ReportsInsightsRow() {
  return (
    <div className="grid gap-4 2xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
      <div className="min-w-0">
        <ReportsSection
          title="Customer Segmentation"
          description="Audience composition"
        >
          <div className="space-y-5">
            <div className="flex justify-center">
              <ReportsDonutChart
                items={[
                  { value: 27, color: "#3B82F6" },
                  { value: 49, color: "#10B981" },
                  { value: 8, color: "#D19628" },
                  { value: 16, color: "#EF4444" },
                ]}
                innerLabel="Returning 49.5%"
                size={146}
              />
            </div>

            <div className="space-y-3">
              {customerSegments.map((segment) => (
                <div
                  key={segment.label}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "size-2.5 rounded-full",
                        segment.label === "New Customers"
                          ? "bg-[#3B82F6]"
                          : segment.label === "Returning"
                            ? "bg-[#10B981]"
                            : segment.label === "VIP"
                              ? "bg-primary"
                              : "bg-danger",
                      )}
                    />
                    <span className="text-sm font-medium text-dark">
                      {segment.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-text">
                    {segment.users} users
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ReportsSection>
      </div>

      <div className="min-w-0">
        <ReportsSection
          title="Conversion Funnel"
          description="Buyer journey performance"
        >
          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => (
              <div key={stage.label} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex size-5 items-center justify-center rounded-md text-[11px] font-bold text-white",
                        index === 0
                          ? "bg-[#3B82F6]"
                          : index === 1
                            ? "bg-[#8B5CF6]"
                            : index === 2
                              ? "bg-[#F59E0B]"
                              : "bg-[#34D399]",
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-dark">
                      {stage.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-text">
                    {formatNumber(stage.value)}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p
                    className={cn(
                      "text-[11px] font-semibold",
                      index === 0 || index === 1
                        ? "text-[#FB7185]"
                        : index === 2
                          ? "text-[#F97316]"
                          : "text-[#34D399]",
                    )}
                  >
                    {stage.dropoff}
                  </p>
                  <div className="h-2 rounded-full bg-[#EAECF0]">
                    <div
                      className={cn(
                        "h-2 rounded-full",
                        index === 0
                          ? "bg-[#3B82F6]"
                          : index === 1
                            ? "bg-[#8B5CF6]"
                            : index === 2
                              ? "bg-[#F59E0B]"
                              : "bg-[#34D399]",
                      )}
                      style={{ width: `${stage.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ReportsSection>
      </div>
    </div>
  );
}
