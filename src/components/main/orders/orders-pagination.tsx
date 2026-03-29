import { ChevronLeft, ChevronRight } from "lucide-react";
import type { OrdersPaginationProps } from "@/interfaces/main/orders";
import { cn } from "@/lib";

export function OrdersPagination({
  pages,
  currentPage,
}: OrdersPaginationProps) {
  return (
    <div className="mx-auto inline-flex items-center gap-3 rounded-[15px] border border-border/10 bg-bg-creamy/40 px-6 py-4">
      <button
        type="button"
        aria-label="Previous page"
        className="text-primary transition-transform hover:-translate-x-0.5"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="flex items-center gap-6">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              className={cn(
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-medium text-dark transition-colors",
                isActive ? "bg-primary text-white" : "hover:bg-primary/10",
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Next page"
        className="text-primary transition-transform hover:translate-x-0.5"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
