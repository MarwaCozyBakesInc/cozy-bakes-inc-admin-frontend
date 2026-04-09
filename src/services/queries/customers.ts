import { CustomersOverviewStatsResponse } from "@/interfaces";
import { baseAPI } from "..";

export const customersOverviewStatsAPI = async () =>
  await baseAPI<CustomersOverviewStatsResponse>(
    "GET",
    `/customer/overview-stats`,
  );
