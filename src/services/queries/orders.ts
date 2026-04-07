import type { OrdersApiResponse } from "@/interfaces";
import { PAGE_SIZE } from "@/constants";
import type { OrderSort } from "@/types/main/orders";
import { baseAPI } from "..";

export const listOrdersAPI = async (sort: OrderSort, page: number) =>
  await baseAPI<OrdersApiResponse>(
    "GET",
    `/order/list?sort=${sort}&page=${page}&per_page=${PAGE_SIZE}`,
  );
