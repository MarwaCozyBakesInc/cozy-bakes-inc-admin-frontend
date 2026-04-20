import type { ApiOrderStatus, OrderPaymentMethod } from "@/types/main/orders";

export const orderStatusStyles: Record<ApiOrderStatus, string> = {
  pending: "bg-[#E0EAFF] text-[#1570EF]",
  processed: "bg-[#FFF8E8] text-[#D69618]",
  packed: "bg-[#F4F0FF] text-[#7A5AF8]",
  shipped: "bg-[#EEF4FF] text-[#175CD3]",
  completed: "bg-[#E8F8EF] text-[#12B76A]",
  cancelled: "bg-[#FFF0F0] text-[#F04438]",
};

export const paymentMethodStyles: Record<OrderPaymentMethod, string> = {
  stripe: "bg-[#F4F0FF] text-[#6627CF]",
  cod: "bg-[#EEF4FF] text-[#1A47B8]",
};
