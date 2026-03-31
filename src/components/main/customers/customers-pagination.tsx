import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CustomersPaginationProps } from "@/interfaces/main/customers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomersPagination({
  pages,
  currentPage,
}: CustomersPaginationProps) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-[15px] border border-border/10 bg-bg-creamy/32 px-3 py-3 sm:gap-4 sm:px-5 sm:py-3.5">
      <Button type="button" variant="ghost" size="icon-sm" className="text-primary hover:bg-transparent">
        <ChevronLeft className="size-4" strokeWidth={2.2} />
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
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-medium text-dark sm:size-8",
                isActive && "bg-primary text-white",
              )}
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button type="button" variant="ghost" size="icon-sm" className="text-primary hover:bg-transparent">
        <ChevronRight className="size-4" strokeWidth={2.2} />
      </Button>
    </div>
  );
}
