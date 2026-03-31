import { ChevronLeft, ChevronRight } from "lucide-react";
import type { OrdersPaginationProps } from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";

export function OrdersPagination({
  pages,
  currentPage,
}: OrdersPaginationProps) {
  return (
    <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-[15px] border border-border/10 bg-bg-creamy/40 px-3 py-3 sm:gap-3 sm:px-6 sm:py-4">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Previous page"
        className="text-primary transition-transform hover:bg-transparent hover:-translate-x-0.5"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <Button
              key={page}
              type="button"
              variant="ghost"
              size="icon-sm"
              className={cn(
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-medium text-dark transition-colors sm:size-8",
                isActive ? "bg-primary text-white" : "hover:bg-primary/10",
              )}
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Next page"
        className="text-primary transition-transform hover:bg-transparent hover:translate-x-0.5"
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
}
