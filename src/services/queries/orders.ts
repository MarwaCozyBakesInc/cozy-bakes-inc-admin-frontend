import type { OrdersApiResponse, SingleOrderApiResponse } from "@/interfaces";
import { PAGE_SIZE } from "@/constants";
import type { OrderSort } from "@/types/main/orders";
import { baseAPI } from "..";

export const listOrdersAPI = async (page: number, sort?: OrderSort) =>
  await baseAPI<OrdersApiResponse>(
    "GET",
    `/order/list?${buildOrdersQuery(page, sort)}`,
  );

function buildOrdersQuery(page: number, sort?: OrderSort) {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: PAGE_SIZE.toString(),
  });

  if (sort) {
    params.set("sort", sort);
  }

  return params.toString();
}

export const singleOrderAPI = async (orderNo: string) =>
  await baseAPI<SingleOrderApiResponse>("GET", `/order/${orderNo}/view`);
