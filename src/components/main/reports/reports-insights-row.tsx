"use client";
import { useCustomerSegmentationAndConversionFunnel } from "@/hooks/api";
import { ReportsConversionFunnelSection } from "./reports-conversion-funnel-section";
import { ReportsCustomerSegmentationSection } from "./reports-customer-segmentation-section";

export function ReportsInsightsRow() {
  const { data, isLoading } = useCustomerSegmentationAndConversionFunnel();
  const customerSegmentationData = data?.data?.customer_segmentation;
  const conversionFunnelData = data?.data?.conversion_funnel;
  return (
    <div className="grid gap-4 2xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
      <div className="min-w-0">
        <ReportsCustomerSegmentationSection
          customerSegmentationData={customerSegmentationData}
          isLoading={isLoading}
        />
      </div>

      <div className="min-w-0">
        <ReportsConversionFunnelSection
          conversionFunnelData={conversionFunnelData}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
