import type { ReviewsStatusBadgeProps } from "@/interfaces/main/reviews";
import { reviewStatusMeta } from "@/data/main/reviews";
import { cn } from "@/lib/utils";

const toneClasses = {
  success: "bg-[#e9f8ef] text-[#12b76a]",
  warning: "bg-[#f8efc8] text-primary",
  danger: "bg-[#fff7f6] text-[#f04438]",
};

export function ReviewsStatusBadge({ status }: ReviewsStatusBadgeProps) {
  const tone = reviewStatusMeta[status].tone;

  return (
    <span
      className={cn(
        "inline-flex min-w-[100px] items-center justify-center rounded-xl px-4 py-2.5 text-xs font-semibold",
        toneClasses[tone],
      )}
    >
      {status}
    </span>
  );
}
