import type { CustomersSegmentTabsProps } from "@/interfaces/main/customers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";

export function CustomersSegmentTabs({
  filters,
  activeFilter,
  onFilterChange,
}: CustomersSegmentTabsProps) {
  return (
    <div className="rounded-[999px] border border-primary bg-transparent p-1.5">
      <div className="hidden items-center gap-1 xl:flex">
        {filters.map((filter) => {
          const isActive = filter.value === activeFilter;

          return (
            <Button
              key={filter.value}
              type="button"
              variant="ghost"
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                "inline-flex h-12 items-center gap-2 rounded-[18px] px-4 text-sm font-medium whitespace-nowrap transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "bg-bg-creamy/32 text-dark hover:bg-bg-creamy/50",
              )}
            >
              {filter.label}
              <span
                className={cn(
                  "inline-flex min-w-5 items-center justify-center rounded-[10px] px-1.5 py-0.5 text-xs font-bold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#f6edcb] text-primary",
                )}
              >
                {filter.count}
              </span>
            </Button>
          );
        })}
      </div>

      <div className="xl:hidden">
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1.6,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 2.6,
            },
          }}
        >
          {filters.map((filter) => {
            const isActive = filter.value === activeFilter;

            return (
              <SwiperSlide key={filter.value}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onFilterChange(filter.value)}
                  className={cn(
                    "inline-flex h-12 w-full items-center justify-center gap-2 rounded-[18px] px-4 text-sm font-medium whitespace-nowrap transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-bg-creamy/32 text-dark hover:bg-bg-creamy/50",
                  )}
                >
                  {filter.label}
                  <span
                    className={cn(
                      "inline-flex min-w-5 items-center justify-center rounded-[10px] px-1.5 py-0.5 text-xs font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#f6edcb] text-primary",
                    )}
                  >
                    {filter.count}
                  </span>
                </Button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
