import {
  CustomerDetailsResponse,
  CustomersListResponse,
  CustomersOverviewStatsResponse,
  CustomersPerformanceOverviewStatsResponse,
} from "@/interfaces";
import type { CustomerSortOption } from "@/types/main/customers";
import { baseAPI } from "..";
import { PAGE_SIZE } from "@/constants";

export const customersOverviewStatsAPI = async () =>
  await baseAPI<CustomersOverviewStatsResponse>(
    "GET",
    `/customer/overview-stats`,
  );

export const customersPerformanceOverviewStatsAPI = async () =>
  await baseAPI<CustomersPerformanceOverviewStatsResponse>(
    "GET",
    `/customer/performance-overview-stats`,
  );

export const customersListAPI = async (
  tab: string = "all",
  page: number,
  sort: CustomerSortOption = "newest",
) =>
  await baseAPI<CustomersListResponse>(
    "GET",
    `/customer/list?tab=${tab}&sort=${sort}&page=${page}&per_page=${PAGE_SIZE}`,
  );

export const singleCustomerAPI = async (slug: string) =>
  await baseAPI<CustomerDetailsResponse>("GET", `/customer/${slug}/view`);
