"use client";

import { cn } from "@/lib/utils";
import type {
  CustomerSegmentationData,
  ReportCustomerSegment,
} from "@/interfaces/main/reports";
import { Shimmer } from "@/components/ui/shimmer";
import { customerSegments } from "./reports-data";
import { ReportsDonutChart } from "./reports-donut-chart";
import { ReportsSection } from "./reports-section";

type ReportsCustomerSegmentationSectionProps = {
  customerSegmentationData?: CustomerSegmentationData;
  isLoading: boolean;
};

const fallbackDonutItems = [
  { value: 27, color: "#3B82F6" },
  { value: 49, color: "#10B981" },
  { value: 8, color: "#D19628" },
  { value: 16, color: "#EF4444" },
];

export function ReportsCustomerSegmentationSection({
  customerSegmentationData,
  isLoading,
}: ReportsCustomerSegmentationSectionProps) {
  const hasCustomerSegmentationData =
    customerSegmentationData !== undefined &&
    customerSegmentationData.labels.length > 0 &&
    customerSegmentationData.labels.length ===
      customerSegmentationData.counts.length &&
    customerSegmentationData.labels.length ===
      customerSegmentationData.percentages.length;

  const resolvedCustomerSegments: ReportCustomerSegment[] =
    hasCustomerSegmentationData
      ? customerSegmentationData.labels.map((label, index) => ({
          label,
          users: customerSegmentationData.counts[index] ?? 0,
          percentage: customerSegmentationData.percentages[index] ?? 0,
          tone:
            index === 0
              ? "breads"
              : index === 1
                ? "pastries"
                : index === 2
                  ? "others"
                  : "cakes",
        }))
      : customerSegments;

  const donutItems = hasCustomerSegmentationData
    ? customerSegmentationData.labels.map((_, index) => ({
        value: customerSegmentationData.percentages[index] ?? 0,
        color:
          index === 0
            ? "#3B82F6"
            : index === 1
              ? "#10B981"
              : index === 2
                ? "#D19628"
                : "#EF4444",
      }))
    : fallbackDonutItems;

  const innerLabel = hasCustomerSegmentationData
    ? `${customerSegmentationData.labels[1] ?? "Returning"} ${customerSegmentationData.percentages[1] ?? 49.5}%`
    : "Returning 49.5%";

  return (
    <ReportsSection
      title="Customer Segmentation"
      description="Audience composition"
    >
      {isLoading ? (
        <div className="space-y-5">
          <div className="flex justify-center">
            <Shimmer className="size-[146px] rounded-full" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <Shimmer className="size-2.5 rounded-full" />
                  <Shimmer className="h-4 w-24 rounded-md" />
                </div>
                <Shimmer className="h-4 w-16 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      ) : !hasCustomerSegmentationData ||
        resolvedCustomerSegments.every((segment) => segment.users === 0) ? (
        <div className="flex h-[200px] items-center justify-center rounded-2xl border border-dashed border-[#D4AF37]/25 bg-[#FFF7E7] px-4 text-center text-sm text-[#6B5B4C]">
          <div className="max-w-sm space-y-2">
            <p className="text-base font-semibold text-[#2C4B7A]">
              No customer segmentation data available.
            </p>
            <p className="text-xs text-[#6B5B4C] opacity-80">
              Customer data will appear here once purchases are recorded.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex justify-center">
            <ReportsDonutChart
              items={donutItems}
              innerLabel={innerLabel}
              size={146}
            />
          </div>

          <div className="space-y-3">
            {resolvedCustomerSegments.map((segment, index) => (
              <div
                key={segment.label}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      index === 0
                        ? "bg-[#3B82F6]"
                        : index === 1
                          ? "bg-[#10B981]"
                          : index === 2
                            ? "bg-primary"
                            : "bg-danger",
                    )}
                  />
                  <span className="text-sm font-medium text-dark">
                    {segment.label}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-text">
                  {segment.users} users ({segment.percentage ?? 0}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </ReportsSection>
  );
}
