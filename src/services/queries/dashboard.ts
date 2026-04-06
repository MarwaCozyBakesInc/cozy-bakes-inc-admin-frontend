import {
  DashboardChartsApiResponse,
  DashboardLowStockProductsApiResponse,
  DashboardSummaryApiResponse,
  DashboardTopProductsApiResponse,
} from "@/interfaces";
import { baseAPI } from "..";
import { PAGE_SIZE } from "@/constants";

export const summaryDataSetsAPI = async () =>
  await baseAPI<DashboardSummaryApiResponse>("GET", "/dashboard/summary");

export const saleOverviewChartAPI = async () =>
  await baseAPI<DashboardChartsApiResponse>(
    "GET",
    "/dashboard/sale-overview-chart",
  );

export const topProductsAPI = async (page: number) =>
  await baseAPI<DashboardTopProductsApiResponse>(
    "GET",
    `/product/top-products?sort_by=revenue&page=${page}&per_page=${PAGE_SIZE}`,
  );

export const lowStockProductsAPI = async (threshold: number, page: number) =>
  await baseAPI<DashboardLowStockProductsApiResponse>(
    "GET",
    `/product/low-stock?threshold=${threshold}&page=${page}&per_page=${PAGE_SIZE}`,
  );
