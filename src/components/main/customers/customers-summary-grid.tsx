import {
  Crown,
  RefreshCw,
  TrendingDown,
  UserMinus,
  UserPlus,
  Users,
} from "lucide-react";
import type {
  CustomerOverviewMetric,
  CustomersSummaryGridProps,
} from "@/interfaces/main/customers";
import { cn } from "@/lib/utils";

const iconMap = {
  customers: Users,
  registered: UserPlus,
  repeat: RefreshCw,
  inactive: UserMinus,
  vip: Crown,
} as const;

const iconToneClasses = {
  lavender: "bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] text-primary",
  secondary:
    "bg-[color-mix(in_srgb,var(--color-secondary)_10%,transparent)] text-secondary",
  amber: "bg-[color-mix(in_srgb,var(--color-card)_20%,transparent)] text-primary",
  danger:
    "bg-[color-mix(in_srgb,var(--color-danger)_10%,white)] text-[var(--color-danger)]",
  primary: "bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] text-primary",
} as const;

const trendToneClasses = {
  positive: "bg-[#ecfdf3] text-[#12b76a]",
  negative: "bg-[#fffaeb] text-[#f79009]",
  neutral: "bg-[#fef3f2] text-[#f04438]",
} as const;

function CustomersSummaryCard({ metric }: { metric: CustomerOverviewMetric }) {
  const Icon = iconMap[metric.icon];

  return (
    <article className="relative overflow-hidden rounded-2xl border border-primary/10 bg-[color-mix(in_srgb,var(--color-bg-creamy)_10%,transparent)] p-4 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--color-background)_24%,transparent)]">
      <div className="absolute inset-y-0 right-0 w-28 bg-[linear-gradient(135deg,transparent_0%,color-mix(in_srgb,var(--color-background)_5%,transparent)_100%)]" />

      <div className="relative flex items-start justify-between">
        <div
          className={cn(
            "flex size-14 items-center justify-center rounded-2xl",
            iconToneClasses[metric.iconTone],
          )}
        >
          <Icon className="size-7" strokeWidth={2.1} />
        </div>

        <div
          className={cn(
            "inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-bold",
            trendToneClasses[metric.trendTone],
          )}
        >
          {metric.trendTone === "negative" ? (
            <TrendingDown className="size-3.5" strokeWidth={2.3} />
          ) : null}
          {metric.trendLabel}
        </div>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
        {metric.label}
      </p>
      <p className="mt-2 text-[32px] font-bold leading-none tracking-[0.015em] text-dark">
        {metric.value}
      </p>
      <p className="mt-2 text-xs font-medium text-gray">{metric.subtitle}</p>
    </article>
  );
}

export function CustomersSummaryGrid({
  metrics,
}: CustomersSummaryGridProps) {
  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric) => (
        <CustomersSummaryCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
