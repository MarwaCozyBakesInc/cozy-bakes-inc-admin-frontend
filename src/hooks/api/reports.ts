import {
  analyticsOverviewAPI,
  customerSegmentationAndConversionFunnelAPI,
  reportsSaleOverviewChartAPI,
  revenueGrowthAPI,
  salesPerformanceAPI,
} from "@/services/queries";
import { useCustomInfiniteQuery, useCustomQuery } from "..";
import { ReportRange } from "@/types";

export function useAnalyticsOverview() {
  return useCustomQuery(["analytics-overview"], analyticsOverviewAPI);
}

export function useReportsSaleOverviewChart() {
  return useCustomQuery(
    ["reports-sale-overview-chart"],
    reportsSaleOverviewChartAPI,
  );
}

export function useRevenueGrowth(period: ReportRange) {
  return useCustomQuery(["revenue-growth", period], () =>
    revenueGrowthAPI(period),
  );
}

export function useCustomerSegmentationAndConversionFunnel() {
  return useCustomQuery(
    ["customer-segmentation-conversion-funnel"],
    customerSegmentationAndConversionFunnelAPI,
  );
}

export function useSalesPerformance() {
  return useCustomInfiniteQuery(
    ["sales-performance"],
    async ({ pageParam = 1 }) => {
      return salesPerformanceAPI(pageParam);
    },
    {
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data;
        if (!pagination) return undefined;
        if (
          pagination.next_page_url &&
          pagination.current_page < pagination.last_page
        ) {
          return pagination.current_page + 1;
        }
        return undefined;
      },
    },
  );
}
