import { ArrowUpRight } from "lucide-react";
import { topProducts } from "./dashboard-data";
import { DashboardSectionCard } from "./dashboard-shared";

export function DashboardTopProducts() {
  return (
    <DashboardSectionCard
      title="Top Products"
      description="Best performers this week"
      actionLabel="View All"
    >
      <div className="space-y-3">
        {topProducts.map((product) => (
          <article
            key={`${product.rank}-${product.name}`}
            className="flex items-center gap-4 rounded-[18px] border border-border/20 bg-white px-4 py-3 shadow-[0_10px_22px_rgba(209,150,40,0.06)]"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-primary/12 text-sm font-bold text-primary">
              #{product.rank}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-dark md:text-sm">{product.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray md:text-xs">
                <span>{product.sold} sold</span>
                <span className="text-border">•</span>
                <span className="inline-flex items-center gap-1 font-bold text-primary">
                  <ArrowUpRight className="size-3" />
                  {product.growth}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[18px] font-bold tracking-[-0.03em] text-primary md:text-[20px]">
                {product.revenue}
              </p>
              <p className="text-[11px] font-medium text-gray md:text-xs">revenue</p>
            </div>
          </article>
        ))}
      </div>
    </DashboardSectionCard>
  );
}
