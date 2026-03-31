import { customerStatusMeta } from "@/data/main/customers";
import type { CustomersStatusBadgeProps } from "@/interfaces/main/customers";
import { cn } from "@/lib/utils";

const toneClasses = {
  secondary:
    "bg-[color-mix(in_srgb,var(--color-secondary)_3%,transparent)] text-secondary",
  success: "bg-[#ecfdf3] text-[#12b76a]",
  danger: "bg-[#fffbfa] text-[#f04438]",
  info: "bg-[#dbeafe] text-[#0369a1]",
  primary: "bg-[#f6edcb] text-primary",
} as const;

export function CustomersStatusBadge({ status }: CustomersStatusBadgeProps) {
  const tone = customerStatusMeta[status].tone;

  return (
    <span
      className={cn(
        "inline-flex min-h-10 min-w-[114px] items-center justify-center rounded-[10px] px-3 py-2 text-xs font-semibold",
        toneClasses[tone],
      )}
    >
      {status}
    </span>
  );
}
