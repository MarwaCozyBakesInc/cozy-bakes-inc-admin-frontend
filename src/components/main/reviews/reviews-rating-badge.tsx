import { Star } from "lucide-react";
import type { ReviewsRatingBadgeProps } from "@/interfaces/main/reviews";

export function ReviewsRatingBadge({ rating }: ReviewsRatingBadgeProps) {
  return (
    <span className="inline-flex min-w-[52px] items-center justify-center gap-1 rounded-[10px] bg-background px-3 py-2 text-sm font-semibold text-dark shadow-[0_1px_2px_rgba(16,24,40,0.08)]">
      <Star className="size-3.5 fill-current text-primary" strokeWidth={2} />
      {rating.toFixed(1)}
    </span>
  );
}
