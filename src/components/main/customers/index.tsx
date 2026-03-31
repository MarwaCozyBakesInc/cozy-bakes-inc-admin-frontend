"use client";

import { useMemo, useState } from "react";
import {
  customerDirectoryState,
  customerOverviewMetrics,
  customerPerformanceMetrics,
  customerRows,
  customerSegmentOptions,
  customersWorkspace,
} from "@/data/main/customers";
import type { CustomerRecord } from "@/interfaces/main/customers";
import type { CustomerSegmentFilter } from "@/types/main/customers";
import { CustomersCanvas } from "./customers-canvas";
import { CustomersHeader } from "./customers-header";
import { CustomersPagination } from "./customers-pagination";
import { CustomersPerformanceOverview } from "./customers-performance-overview";
import { CustomersSegmentTabs } from "./customers-segment-tabs";
import { CustomersShell } from "./customers-shell";
import { CustomersSummaryGrid } from "./customers-summary-grid";
import { CustomersTable } from "./customers-table";
import { CustomersToolbar } from "./customers-toolbar";

function matchesCustomerFilter(
  row: CustomerRecord,
  filter: CustomerSegmentFilter,
) {
  switch (filter) {
    case "all":
      return true;
    case "registered-only":
      return row.status === "Registered Only";
    case "first-time":
      return row.status === "First-Time";
    case "repeat-customers":
      return row.orders > 1;
    case "vip":
      return row.status === "VIP";
    case "inactive":
      return row.status === "Inactive";
    case "high-spenders":
      return row.isHighSpender === true;
    default:
      return true;
  }
}

function Customers() {
  const [activeFilter, setActiveFilter] =
    useState<CustomerSegmentFilter>("all");
  const [searchValue, setSearchValue] = useState("");

  const visibleRows = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return customerRows.filter((row) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        row.id.toLowerCase().includes(normalizedSearch) ||
        row.name.toLowerCase().includes(normalizedSearch) ||
        row.email.toLowerCase().includes(normalizedSearch);

      return matchesSearch && matchesCustomerFilter(row, activeFilter);
    });
  }, [activeFilter, searchValue]);

  return (
    <CustomersShell>
      <CustomersHeader
        title={customersWorkspace.title}
        description={customersWorkspace.description}
        actionLabel={customersWorkspace.primaryActionLabel}
      />

      <CustomersSummaryGrid metrics={customerOverviewMetrics} />

      <CustomersPerformanceOverview metrics={customerPerformanceMetrics} />

      <CustomersCanvas ariaLabel={customersWorkspace.ariaLabel}>
        <CustomersSegmentTabs
          filters={customerSegmentOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <CustomersToolbar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          sortLabel={customerDirectoryState.defaultSortLabel}
          exportLabel={customerDirectoryState.exportLabel}
        />

        <CustomersTable rows={visibleRows} />

        <div className="flex justify-center overflow-x-auto pt-2">
          <CustomersPagination
            currentPage={1}
            pages={customerDirectoryState.paginationPages}
          />
        </div>
      </CustomersCanvas>
    </CustomersShell>
  );
}

export default Customers;
