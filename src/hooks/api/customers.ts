import { customersOverviewStatsAPI } from "@/services/queries";
import { useCustomQuery } from "..";

export function useCustomersOverviewStats() {
  return useCustomQuery(["customersOverviewStats"], customersOverviewStatsAPI);
}
