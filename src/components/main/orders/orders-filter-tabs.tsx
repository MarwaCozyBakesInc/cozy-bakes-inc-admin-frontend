import type { OrdersFilterTabsProps } from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";
import { Shimmer } from "@/components/ui/shimmer";
import { cn } from "@/lib";
import { Swiper, SwiperSlide } from "swiper/react";
import { useOrderStatusCount } from "@/hooks/api/orders";

export function OrdersFilterTabs({
  filters,
  activeFilter,
  onFilterChange,
}: OrdersFilterTabsProps) {
  const { data, isLoading } = useOrderStatusCount();
  const counts = data?.data;

  function getFilterCount(
    filterValue: OrdersFilterTabsProps["filters"][number]["value"],
    fallbackCount: number,
  ) {
    if (!counts) {
      return fallbackCount;
    }

    const countMap = {
      all: counts.total_orders,
      new: Number(counts.pending),
      preparing: Number(counts.processed),
      ready: Number(counts.packed),
      shipped: Number(counts.shipped),
      delivered: Number(counts.completed),
      cancelled: Number(counts.cancelled),
    } as const;

    return countMap[filterValue] ?? fallbackCount;
  }

  function renderCountBadge(isActive: boolean, count: number) {
    if (isLoading) {
      return (
        <Shimmer
          className={cn(
            "h-5 w-8 rounded-full",
            isActive ? "bg-white/20" : "bg-[#F6EDCB]",
          )}
        />
      );
    }

    return (
      <span
        className={cn(
          "inline-flex size-5 min-w-5 items-center justify-center rounded-full px-1 text-xs font-bold",
          isActive
            ? "bg-white/20 text-white"
            : "bg-[#F6EDCB] text-primary",
        )}
      >
        {count}
      </span>
    );
  }

  return (
    <div className="rounded-[30px] border border-primary bg-transparent p-1.5">
      <div className="hidden gap-2 xl:grid xl:grid-cols-7">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          const count = getFilterCount(filter.value, filter.count);

          return (
            <Button
              key={filter.value}
              type="button"
              variant="ghost"
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                "inline-flex min-h-12.5 items-center justify-center gap-2 rounded-[999px] px-5 py-3 text-base font-medium tracking-[-0.02em] transition-colors",
                isActive
                  ? "bg-primary text-white shadow-[0_10px_24px_rgba(209,150,40,0.22)]"
                  : "bg-bg-creamy/30 text-dark hover:bg-bg-creamy",
              )}
            >
              <span>{filter.label}</span>
              {renderCountBadge(isActive, count)}
            </Button>
          );
        })}
      </div>

      <div className="xl:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            const count = getFilterCount(filter.value, filter.count);

            return (
              <SwiperSlide key={filter.value}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onFilterChange(filter.value)}
                  className={cn(
                    "inline-flex min-h-12.5 w-full items-center justify-center gap-2 rounded-[999px] px-5 py-3 text-base font-medium tracking-[-0.02em] transition-colors",
                    isActive
                      ? "bg-primary text-white shadow-[0_10px_24px_rgba(209,150,40,0.22)]"
                      : "bg-bg-creamy/30 text-dark hover:bg-bg-creamy",
                  )}
                >
                  <span>{filter.label}</span>
                  {renderCountBadge(isActive, count)}
                </Button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
