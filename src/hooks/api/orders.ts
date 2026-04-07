import { listOrdersAPI } from "@/services/queries/orders";
import { useCustomInfiniteQuery } from "../useCustomQuery";
import { OrderSort } from "@/types/main/orders";

export function useOrders(sort: OrderSort) {
  return useCustomInfiniteQuery(
    ["orders", sort],
    async ({ pageParam = 1 }) => {
      return listOrdersAPI(sort, pageParam);
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
