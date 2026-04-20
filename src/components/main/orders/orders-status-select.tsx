import { ChevronDown } from "lucide-react";
import type { OrdersStatusBadgeProps } from "@/interfaces/main/orders";
import type { OrderStatus } from "@/types/main/orders";

const statusStyles: Record<OrderStatus, string> = {
  New: "bg-[#E0EAFF] text-[#1570EF]",
  Preparing: "bg-[#FFF8E8] text-[#D69618]",
  Ready: "bg-[#F4F0FF] text-[#7A5AF8]",
  Shipped: "bg-[#EEF4FF] text-[#175CD3]",
  Delivered: "bg-[#E8F8EF] text-[#12B76A]",
  Cancelled: "bg-[#FFF0F0] text-[#F04438]",
};

const editableStatuses: OrderStatus[] = [
  "New",
  "Preparing",
  "Ready",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export function OrdersStatusSelect({
  status,
  onChangeRequest,
  disabled = false,
}: OrdersStatusBadgeProps) {
  return (
    <label
      className={`relative inline-flex min-w-[122px] items-center rounded-[14px] border border-white/70 px-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] ${statusStyles[status]} ${disabled ? "cursor-not-allowed opacity-75" : ""}`}
    >
      <select
        aria-label={`Update order status to ${status}`}
        className={`h-10 w-full appearance-none bg-transparent pl-3 pr-8 text-sm font-semibold outline-none ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        value={status}
        disabled={disabled}
        onChange={(event) => onChangeRequest(event.target.value as OrderStatus)}
      >
        {editableStatuses.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {!disabled ? (
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 opacity-80" />
      ) : null}
    </label>
  );
}
