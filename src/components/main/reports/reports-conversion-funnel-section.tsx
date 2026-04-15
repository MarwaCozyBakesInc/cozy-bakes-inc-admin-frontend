"use client";

import { cn } from "@/lib/utils";
import type {
  ConversionFunnelData,
  ReportFunnelStage,
} from "@/interfaces/main/reports";
import { Shimmer } from "@/components/ui/shimmer";
import { conversionFunnel } from "./reports-data";
import { ReportsSection } from "./reports-section";
import { formatNumber } from "./reports-utils";

type ReportsConversionFunnelSectionProps = {
  conversionFunnelData?: ConversionFunnelData;
  isLoading: boolean;
};

export function ReportsConversionFunnelSection({
  conversionFunnelData,
  isLoading,
}: ReportsConversionFunnelSectionProps) {
  const hasConversionFunnelData =
    conversionFunnelData !== undefined &&
    Object.keys(conversionFunnelData).length > 0;

  const resolvedConversionFunnel: ReportFunnelStage[] = hasConversionFunnelData
    ? [
        {
          label: "Visitors",
          value: Number(conversionFunnelData.visitors.count),
          dropoff: `+${conversionFunnelData.visitors.dropoff_rate}% growth`,
          progress: 100,
          tone: "breads",
        },
        {
          label: "Add to Cart",
          value: Number(conversionFunnelData.checkout_started.count),
          dropoff: `${conversionFunnelData.checkout_started.dropoff_rate}% drop-off`,
          progress: conversionFunnelData.checkout_started.percentage,
          tone: "pastries",
        },
        {
          label: "Checkout",
          value: Number(conversionFunnelData.checkout_completed.count),
          dropoff: `${conversionFunnelData.checkout_completed.dropoff_rate}% drop-off`,
          progress: conversionFunnelData.checkout_completed.percentage,
          tone: "others",
        },
        {
          label: "Purchase",
          value: Number(conversionFunnelData.purchase_completed.count),
          dropoff: `${conversionFunnelData.purchase_completed.dropoff_rate}% drop-off`,
          progress: conversionFunnelData.purchase_completed.percentage,
          tone: "cakes",
        },
      ]
    : conversionFunnel;

  return (
    <ReportsSection
      title="Conversion Funnel"
      description="Buyer journey performance"
    >
      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Shimmer className="size-5 rounded-md" />
                  <Shimmer className="h-4 w-20 rounded-md" />
                </div>
                <Shimmer className="h-4 w-16 rounded-md" />
              </div>
              <div className="space-y-1.5">
                <Shimmer className="h-3 w-24 rounded-md" />
                <Shimmer className="h-2 w-full rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : !hasConversionFunnelData ||
        resolvedConversionFunnel.every((stage) => stage.value === 0) ? (
        <div className="flex h-[200px] items-center justify-center rounded-2xl border border-dashed border-[#D4AF37]/25 bg-[#FFF7E7] px-4 text-center text-sm text-[#6B5B4C]">
          <div className="max-w-sm space-y-2">
            <p className="text-base font-semibold text-[#2C4B7A]">
              No conversion funnel data available.
            </p>
            <p className="text-xs text-[#6B5B4C] opacity-80">
              Conversion data will appear here once customer interactions are
              recorded.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {resolvedConversionFunnel.map((stage, index) => (
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
                  {formatNumber(Number(stage.value))}
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
      )}
    </ReportsSection>
  );
}
