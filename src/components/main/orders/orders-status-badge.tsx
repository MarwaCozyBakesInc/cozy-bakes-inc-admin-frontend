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

export function OrdersStatusBadge({ status }: OrdersStatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-w-[104px] items-center justify-center gap-2 rounded-[12px] px-3 py-2 text-sm font-semibold ${statusStyles[status]}`}
    >
      <span>{status}</span>
      <ChevronDown className="size-4" />
    </span>
  );
}
