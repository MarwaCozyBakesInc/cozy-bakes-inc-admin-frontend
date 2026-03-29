import type { CategoriesPaginationProps } from "@/interfaces/main/categories";
import { cn } from "@/lib";

export function CategoriesPagination({
  pages,
  currentPage,
}: CategoriesPaginationProps) {
  return (
    <div className="mx-auto inline-flex items-center gap-5 rounded-[15px] border border-border/10 bg-bg-creamy/40 px-5 py-3.5">
      <button
        type="button"
        aria-label="Previous page"
        className="text-primary transition-transform hover:-translate-x-0.5"
      >
        <span className="text-xl leading-none">&#8249;</span>
      </button>

      <div className="flex items-center gap-4 md:gap-6">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              className={cn(
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-medium transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-dark hover:bg-primary/10",
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
        <span className="text-xl leading-none">&#8250;</span>
      </button>
    </div>
  );
}
