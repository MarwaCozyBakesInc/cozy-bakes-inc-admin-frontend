import {
  FindUsHereMarketsResponse,
  MarketDashboardStatsResponse,
} from "@/interfaces";
import { baseAPI } from "..";

export const marketDashboardStatsAPI = async () =>
  await baseAPI<MarketDashboardStatsResponse>("GET", `/market/dashboard-stats`);

export const marketListByDayAPI = async () =>
  await baseAPI<FindUsHereMarketsResponse>("GET", `/market/list-by-day`);
