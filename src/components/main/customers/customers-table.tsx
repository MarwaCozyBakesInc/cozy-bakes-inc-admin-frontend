import { Eye, MoreVertical } from "lucide-react";
import type { CustomersTableProps } from "@/interfaces/main/customers";
import { Button } from "@/components/ui/button";
import { Shimmer } from "@/components/ui/shimmer";
import { CustomersStatusBadge } from "./customers-status-badge";

function daysInactiveTone(value: string) {
  if (value.includes("120") || value.includes("920")) {
    return "bg-[#fef3f2] text-[#f04438]";
  }

  return "bg-bg-creamy text-dark";
}

function spentTone(value: string) {
  return value === "$0" ? "text-[#ff3b30]" : "text-dark";
}

function lastOrderTone(value: string) {
  return value === "Never" ? "text-[#ff3b30]" : "text-dark";
}

export function CustomersTable({
  rows,
  isLoading = false,
}: CustomersTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-primary/10 bg-background">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-bg-creamy">
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Customer ID
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Customer Details
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Orders
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Total Spent
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Last Order
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Days Inactive
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Status
              </th>
              <th className="px-4 py-5 text-left text-base font-semibold text-dark">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <tr
                  key={index}
                  className="bg-[color-mix(in_srgb,var(--color-bg-creamy)_22%,white)]"
                >
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-5 w-24 rounded-md" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <div className="space-y-2">
                      <Shimmer className="h-5 w-36 rounded-md" />
                      <Shimmer className="h-4 w-44 rounded-md" />
                    </div>
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-11 w-16 rounded-[10px]" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-5 w-24 rounded-md" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-5 w-36 rounded-md" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-11 w-24 rounded-[10px]" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <Shimmer className="h-10 w-[114px] rounded-[10px]" />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Shimmer className="size-11 rounded-[8px]" />
                      <Shimmer className="size-11 rounded-[8px]" />
                    </div>
                  </td>
                </tr>
              ))
            ) : rows.length === 0 ? (
              <tr className="bg-[color-mix(in_srgb,var(--color-bg-creamy)_22%,white)]">
                <td
                  colSpan={8}
                  className="border-b border-primary/10 px-4 py-16 text-center"
                >
                  <div className="mx-auto max-w-md">
                    <p className="text-lg font-semibold text-dark">
                      No customers found
                    </p>
                    <p className="mt-2 text-sm font-medium text-gray">
                      There are no customers matching the current filters or
                      search.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="bg-[color-mix(in_srgb,var(--color-bg-creamy)_22%,white)]"
                >
                  <td className="border-b border-primary/10 px-4 py-4 text-[15px] font-medium text-dark">
                    {row.id}
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <div>
                      <p className="text-[15px] font-semibold text-dark">
                        {row.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-gray">
                        {row.email}
                      </p>
                    </div>
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <span
                      className={`inline-flex min-w-12 items-center justify-center rounded-[10px] px-4 py-2.5 text-[15px] font-medium ${
                        row.orders === 0
                          ? "bg-[#fef3f2] text-[#f04438]"
                          : "bg-bg-creamy text-dark"
                      }`}
                    >
                      {row.orders}
                    </span>
                  </td>
                  <td
                    className={`border-b border-primary/10 px-4 py-4 text-[15px] font-medium ${spentTone(row.totalSpent)}`}
                  >
                    {row.totalSpent}
                  </td>
                  <td
                    className={`border-b border-primary/10 px-4 py-4 text-[15px] font-medium ${lastOrderTone(row.lastOrder)}`}
                  >
                    {row.lastOrder}
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <span
                      className={`inline-flex min-w-24 items-center justify-center rounded-[10px] px-4 py-2.5 text-[15px] font-medium ${daysInactiveTone(
                        row.daysInactive,
                      )}`}
                    >
                      {row.daysInactive}
                    </span>
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <CustomersStatusBadge status={row.status} />
                  </td>
                  <td className="border-b border-primary/10 px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="inline-flex size-11 items-center justify-center rounded-[8px] bg-[#f0f9ff] text-[#246bff]"
                        aria-label={`More actions for ${row.name}`}
                      >
                        <MoreVertical className="size-4" strokeWidth={2.2} />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="inline-flex size-11 items-center justify-center rounded-[8px] bg-primary text-white"
                        aria-label={`View ${row.name}`}
                      >
                        <Eye className="size-4" strokeWidth={2.2} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
