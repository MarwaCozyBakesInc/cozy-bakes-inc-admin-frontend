"use client";

import { stockAlert } from "@/data/main/dashboard";
import { DashboardProductThumb } from "./dashboard-shared";
import { useLowStockProducts } from "@/hooks/api";
import { useMemo } from "react";
import { DashboardLowStockProduct } from "@/interfaces/main/dashboard";
import { Shimmer } from "@/components/ui/shimmer";

export function DashboardLowStockAlert() {
  const Icon = stockAlert.icon;
  const { data, isLoading } = useLowStockProducts();
  const lowStockProducts: DashboardLowStockProduct[] = useMemo(
    () => data?.pages?.flatMap((page) => page?.data?.data ?? []) ?? [],
    [data],
  );

  if (isLoading) {
    return (
      <section className="rounded-[20px] bg-bg-creamy p-3.5 shadow-[0_18px_40px_rgba(209,150,40,0.08)] md:rounded-[24px] md:p-5">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
            <Icon className="size-5" />
          </div>

          <div>
            <h2 className="text-base font-bold tracking-[-0.02em] text-dark md:text-lg">
              {stockAlert.title}
            </h2>
            <p className="text-xs font-medium text-primary md:text-sm">
              Loading low stock products...
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Shimmer key={index} className="h-[120px] rounded-[18px] bg-white" />
          ))}
        </div>
      </section>
    );
  }

  if (!Array.isArray(lowStockProducts) || lowStockProducts.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[20px] bg-bg-creamy p-3.5 shadow-[0_18px_40px_rgba(209,150,40,0.08)] md:rounded-[24px] md:p-5">
      <div className="flex items-start gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
          <Icon className="size-5" />
        </div>

        <div>
          <h2 className="text-base font-bold tracking-[-0.02em] text-dark md:text-lg">
            {stockAlert.title}
          </h2>
          <p className="text-xs font-medium text-primary md:text-sm">
            {lowStockProducts.length} products need restocking
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {lowStockProducts.map((product) => {
          const firstSubCategory = product.sub_categories?.[0];

          return (
            <article
              key={product.slug}
              className="rounded-[18px] bg-white p-3 shadow-[0_12px_24px_rgba(209,150,40,0.08)]"
            >
              <div className="flex items-start gap-3">
                <DashboardProductThumb label={product.title} className="size-12" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-dark md:text-sm">
                    {product.title}
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-primary md:text-xs">
                    Qty: {product.quantity}
                  </p>

                  <p className="mt-1 truncate text-[11px] font-medium text-gray md:text-xs">
                    {firstSubCategory
                      ? `${firstSubCategory.category} / ${firstSubCategory.title}`
                      : "No sub category"}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-secondary">
                  {product.stock_status}
                </span>
                <span className="text-sm font-bold text-dark">
                  EGP {product.final_price}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
