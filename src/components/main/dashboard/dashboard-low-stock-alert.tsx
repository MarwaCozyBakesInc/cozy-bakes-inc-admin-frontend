import { ArrowRight } from "lucide-react";
import { lowStockProducts, stockAlert } from "./dashboard-data";
import { DashboardProductThumb } from "./dashboard-shared";

export function DashboardLowStockAlert() {
  const Icon = stockAlert.icon;

  return (
    <section className="rounded-[24px] bg-bg-creamy p-4 shadow-[0_18px_40px_rgba(209,150,40,0.08)] md:p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
            <Icon className="size-5" />
          </div>

          <div>
            <h2 className="text-base font-bold tracking-[-0.02em] text-dark md:text-lg">
              {stockAlert.title}
            </h2>
            <p className="text-xs font-medium text-primary md:text-sm">
              {stockAlert.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 self-start rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-[0_12px_24px_rgba(209,150,40,0.12)] transition-colors hover:bg-primary/10 md:text-sm"
        >
          <span>Manage Stock</span>
          <ArrowRight className="size-4" />
        </button>
      </div>

      <div className="mt-4 grid gap-3 xl:grid-cols-4">
        {lowStockProducts.map((product) => (
          <article
            key={product.name}
            className="flex items-center gap-3 rounded-[18px] bg-white p-3 shadow-[0_12px_24px_rgba(209,150,40,0.08)]"
          >
            <DashboardProductThumb label={product.name} className="size-12" />

            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-dark md:text-sm">{product.name}</p>
              <p className="mt-1 text-[11px] font-semibold text-primary md:text-xs">
                {product.stock} Pace
                <span className="px-1 text-gray">/</span>
                {product.threshold}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
