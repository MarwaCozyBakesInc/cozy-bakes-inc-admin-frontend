import { Shimmer } from "@/components/ui/shimmer";
import { useReviewStatusStats } from "@/hooks/api";
import type { ReviewsFilterTabsProps } from "@/interfaces/main/reviews";
import { cn } from "@/lib/utils";

export function ReviewsFilterTabs({
  filters,
  activeFilter,
  onFilterChange,
}: ReviewsFilterTabsProps) {
  const { data, isLoading } = useReviewStatusStats();
  const reviewStatusStats = data?.data;

  const getFilterCount = (value: string, defaultCount: number) => {
    if (isLoading) {
      return <Shimmer className="h-4 w-8 rounded-full" />;
    }

    if (!reviewStatusStats) {
      return defaultCount;
    }

    switch (value) {
      case "all":
        return reviewStatusStats.all;
      case "approved":
        return reviewStatusStats.approved;
      case "pending":
        return reviewStatusStats.pending;
      case "hidden":
        return reviewStatusStats.hidden;
      default:
        return defaultCount;
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex min-w-full rounded-[28px] border bg-[rgba(250,248,243,0.32)] border-primary p-1">
        {filters.map((filter) => {
          const isActive = filter.value === activeFilter;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:text-primary",
              )}
            >
              <span>{filter.label}</span>
              <span
                className={cn(
                  "inline-flex min-w-6 items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                  isActive
                    ? "bg-background/20 text-white"
                    : "bg-[#f6edcb] text-primary",
                )}
              >
                {getFilterCount(filter.value, filter.count)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
