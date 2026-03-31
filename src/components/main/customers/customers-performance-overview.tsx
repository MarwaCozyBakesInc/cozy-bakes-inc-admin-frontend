import {
  BarChart3,
  ChartColumn,
  HandCoins,
  ShoppingBasket,
} from "lucide-react";
import type {
  CustomerPerformanceMetric,
  CustomersPerformanceOverviewProps,
} from "@/interfaces/main/customers";

const iconMap = {
  ltv: HandCoins,
  frequency: ShoppingBasket,
  revenue: ChartColumn,
  conversion: BarChart3,
} as const;

function CustomersPerformanceCard({
  metric,
}: {
  metric: CustomerPerformanceMetric;
}) {
  const Icon = iconMap[metric.icon];

  return (
    <article className="rounded-[18px] bg-[linear-gradient(135deg,var(--color-background)_0%,color-mix(in_srgb,var(--color-bg-creamy)_88%,white)_100%)] p-4 shadow-[0_12px_28px_color-mix(in_srgb,var(--color-primary)_8%,transparent)]">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] text-primary">
          <Icon className="size-4.5" strokeWidth={2.1} />
        </div>
        <div>
          <p className="text-sm font-semibold text-muted-text">{metric.label}</p>
          <p className="mt-3 text-[18px] font-bold tracking-[0.01em] text-chocolate md:text-[20px]">
            {metric.value}
          </p>
        </div>
      </div>
    </article>
  );
}

export function CustomersPerformanceOverview({
  metrics,
}: CustomersPerformanceOverviewProps) {
  return (
    <section className="rounded-[18px] border border-primary/10 bg-bg-creamy/40 p-3 md:p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
          <ChartColumn className="size-4" strokeWidth={2.2} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-dark md:text-xl">
            Performance Overview
          </h2>
          <p className="text-sm font-medium text-gray">
            Track key metrics for products and customers
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <CustomersPerformanceCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}
