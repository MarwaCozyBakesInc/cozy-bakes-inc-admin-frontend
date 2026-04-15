import {
  marketDashboardStatsAPI,
  marketListByDayAPI,
} from "@/services/queries";
import { useCustomQuery } from "..";

export function useMarketDashboardStats() {
  return useCustomQuery(["market-dashboard-stats"], marketDashboardStatsAPI);
}

export function useMarketListByDay() {
  return useCustomQuery(["market-list-by-day"], marketListByDayAPI);
}
