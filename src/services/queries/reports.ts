import {
  AnalyticsOverviewResponse,
  RevenueGrowthResponse,
  SalesAnalyticsResponse,
  SalesPerformanceResponse,
  SegmentationConversionFunnelResponse,
} from "@/interfaces";
import { baseAPI } from "..";
import type { ReportRange } from "@/types/main/reports";
import { PAGE_SIZE } from "@/constants";

export const analyticsOverviewAPI = async () =>
  await baseAPI<AnalyticsOverviewResponse>("GET", "/report/analytics-overview");

export const reportsSaleOverviewChartAPI = async () =>
  await baseAPI<SalesAnalyticsResponse>(
    "GET",
    "/dashboard/sale-overview-chart",
  );

export const revenueGrowthAPI = async (period: ReportRange) =>
  await baseAPI<RevenueGrowthResponse>(
    "GET",
    `/report/analytics/revenue-growth?period=${period}`,
  );

export const customerSegmentationAndConversionFunnelAPI = async () =>
  await baseAPI<SegmentationConversionFunnelResponse>(
    "GET",
    "/report/segmentation-conversionfunnel-cart",
  );

export const salesPerformanceAPI = async (page: number) =>
  await baseAPI<SalesPerformanceResponse>(
    "GET",
    `/report/sales-performance?&page=${page}&per_page=${PAGE_SIZE}`,
  );
