import {
  CalendarDays,
  Clock3,
  Store,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import type { FindUsHereSummaryCardProps } from "@/interfaces/main/find-us-here";
import type { FindUsHereSummaryMetricIcon } from "@/types/main/find-us-here";

const iconMap: Record<FindUsHereSummaryMetricIcon, LucideIcon> = {
  store: Store,
  calendar: CalendarDays,
  clock: Clock3,
  trend: TrendingDown,
};

export function FindUsHereSummaryCard({
  metric,
}: FindUsHereSummaryCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <article className="rounded-2xl border border-primary/15 bg-gradient-to-b from-[#fbf8eb] to-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2">
        <div className="flex size-10 items-center justify-center rounded-[10px] bg-white text-primary shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Icon className="size-5" strokeWidth={1.9} />
        </div>
        <p className="text-sm font-semibold tracking-[0.015em] text-muted-text">
          {metric.label}
        </p>
      </div>

      <p className="mt-2 text-[24px] font-bold leading-8 tracking-[0.015em] text-dark">
        {metric.value}{" "}
        <span className="text-[15px] font-medium text-muted-text">
          {metric.suffix}
        </span>
      </p>
    </article>
  );
}
