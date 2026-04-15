import {
  EyeOff,
  Info,
  MessageSquareText,
  Star,
  TrendingUp,
} from "lucide-react";
import type { ReviewMetricCardProps } from "@/interfaces/main/reviews";
import { cn } from "@/lib/utils";

function ReviewsMetricIcon({
  icon,
  className,
}: {
  icon: ReviewMetricCardProps["metric"]["icon"];
  className?: string;
}) {
  switch (icon) {
    case "reviews":
      return <MessageSquareText className={className} strokeWidth={2.2} />;
    case "rating":
      return <Star className={className} strokeWidth={2.2} />;
    case "pending":
      return <Info className={className} strokeWidth={2.2} />;
    case "hidden":
      return <EyeOff className={className} strokeWidth={2.2} />;
    default:
      return null;
  }
}

function ReviewsRatingStars({ value }: { value: number }) {
  const filledStars = Math.floor(value);

  return (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-4",
            index < filledStars ? "fill-current text-primary" : "text-primary/40",
          )}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export function ReviewsSummaryCard({ metric }: ReviewMetricCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/20 bg-[linear-gradient(135deg,rgba(250,248,243,0.96),rgba(250,248,243,0.7))] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-[linear-gradient(135deg,transparent,rgba(209,150,40,0.06))]" />

      <div className="relative flex min-h-[174px] flex-col">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl",
              metric.iconTone,
            )}
          >
            <ReviewsMetricIcon icon={metric.icon} className="size-7" />
          </div>

          {metric.trendLabel ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#ecfdf3] px-2.5 py-1 text-xs font-bold text-[#12b76a]">
              <TrendingUp className="size-3" strokeWidth={2.4} />
              {metric.trendLabel}
            </span>
          ) : metric.ratingValue ? (
            <ReviewsRatingStars value={metric.ratingValue} />
          ) : null}
        </div>

        <div className="mt-6 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-text">
            {metric.label}
          </p>
          <p className="text-[2rem] leading-10 font-bold tracking-[0.01em] text-dark">
            {metric.value}
          </p>
          <p className="text-xs font-medium text-gray">{metric.subtitle}</p>
        </div>
      </div>
    </article>
  );
}
