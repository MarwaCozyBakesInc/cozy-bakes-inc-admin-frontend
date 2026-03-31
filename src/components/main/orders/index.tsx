"use client";

import { useState } from "react";
import { orderFilters, orders, ordersPagination } from "@/data/main/orders";
import type { OrderFilterValue, OrderViewMode } from "@/types/main/orders";
import { OrdersCardGrid } from "./orders-card-grid";
import { OrdersEmptyState } from "./orders-empty-state";
import { OrdersFilterTabs } from "./orders-filter-tabs";
import { OrdersHeader } from "./orders-header";
import { OrdersPagination } from "./orders-pagination";
import { OrdersTable } from "./orders-table";
import { OrdersToolbar } from "./orders-toolbar";

function matchesFilter(status: string, filter: OrderFilterValue) {
  if (filter === "all") {
    return true;
  }

  return status.toLowerCase() === filter;
}

function Orders() {
  const [activeFilter, setActiveFilter] = useState<OrderFilterValue>("all");
  const [searchValue, setSearchValue] = useState("");
  const [viewMode, setViewMode] = useState<OrderViewMode>("card");

  const normalizedSearch = searchValue.trim().toLowerCase();
  const visibleOrders = orders.filter((order) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      order.customer.toLowerCase().includes(normalizedSearch) ||
      order.id.toLowerCase().includes(normalizedSearch);

    return matchesFilter(order.status, activeFilter) && matchesSearch;
  });
  const hasEmptyState = visibleOrders.length === 0;

  return (
    <section className="space-y-4 md:space-y-6">
      <OrdersHeader
        title="Orders Management"
        description="Track and manage all customer orders"
      />

      <OrdersFilterTabs
        filters={orderFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <OrdersToolbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {hasEmptyState ? (
        <OrdersEmptyState
          hasSearch={normalizedSearch.length > 0}
          hasFilteredStatus={activeFilter !== "all"}
          viewMode={viewMode}
          onClearSearch={() => setSearchValue("")}
          onResetFilters={() => {
            setActiveFilter("all");
            setSearchValue("");
          }}
        />
      ) : viewMode === "table" ? (
        <OrdersTable orders={visibleOrders} />
      ) : (
        <OrdersCardGrid orders={visibleOrders} />
      )}

      {!hasEmptyState ? (
        <div className="flex justify-center overflow-x-auto pt-2">
          <OrdersPagination currentPage={1} pages={ordersPagination} />
        </div>
      ) : null}
    </section>
  );
}

export default Orders;
