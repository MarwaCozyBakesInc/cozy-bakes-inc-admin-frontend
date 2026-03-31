import type { OrdersFilterTabsProps } from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import { Swiper, SwiperSlide } from "swiper/react";

export function OrdersFilterTabs({
  filters,
  activeFilter,
  onFilterChange,
}: OrdersFilterTabsProps) {
  return (
    <div className="rounded-[30px] border border-primary bg-transparent p-1.5">
      <div className="hidden gap-2 xl:grid xl:grid-cols-7">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <Button
              key={filter.value}
              type="button"
              variant="ghost"
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                "inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[999px] px-5 py-3 text-base font-medium tracking-[-0.02em] transition-colors",
                isActive
                  ? "bg-primary text-white shadow-[0_10px_24px_rgba(209,150,40,0.22)]"
                  : "bg-bg-creamy/30 text-dark hover:bg-bg-creamy",
              )}
            >
              <span>{filter.label}</span>
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full text-xs font-bold",
                  isActive ? "bg-white/20 text-white" : "bg-[#F6EDCB] text-primary",
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

            return (
              <SwiperSlide key={filter.value}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onFilterChange(filter.value)}
                  className={cn(
                    "inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[999px] px-5 py-3 text-base font-medium tracking-[-0.02em] transition-colors",
                    isActive
                      ? "bg-primary text-white shadow-[0_10px_24px_rgba(209,150,40,0.22)]"
                      : "bg-bg-creamy/30 text-dark hover:bg-bg-creamy",
                  )}
                >
                  <span>{filter.label}</span>
                  <span
                    className={cn(
                      "inline-flex size-5 items-center justify-center rounded-full text-xs font-bold",
                      isActive ? "bg-white/20 text-white" : "bg-[#F6EDCB] text-primary",
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
