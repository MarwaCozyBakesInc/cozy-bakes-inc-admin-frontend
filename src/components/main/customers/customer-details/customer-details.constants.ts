import type { CustomerStatus } from "@/types/main/customers";

export const customerStatusStyles: Record<CustomerStatus, string> = {
  "Registered Only": "bg-[rgba(158,78,2,0.03)] text-[#9e4e02]",
  Active: "bg-[#E8F8EF] text-[#12B76A]",
  Inactive: "bg-[#FFF0F0] text-[#F04438]",
  "First-Time": "bg-[#EEF4FF] text-[#175CD3]",
  VIP: "bg-[#F4F0FF] text-[#7A5AF8]",
};
