import {
  Crown,
  RefreshCw,
  TrendingDown,
  UserMinus,
  UserPlus,
  Users,
} from "lucide-react";
import type { CustomerOverviewMetric } from "@/interfaces/main/customers";
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

type CustomersSummaryCardProps = {
  metric: CustomerOverviewMetric;
};

export function CustomersSummaryCard({
  metric,
}: CustomersSummaryCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <article className="relative overflow-hidden rounded-2xl border border-primary/10 bg-[color-mix(in_srgb,var(--color-bg-creamy)_10%,transparent)] p-4 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--color-background)_24%,transparent)]">
      <div className="absolute inset-y-0 right-0 w-28 bg-[linear-gradient(135deg,transparent_0%,color-mix(in_srgb,var(--color-background)_5%,transparent)_100%)]" />

      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
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
            "inline-flex min-h-7 max-w-full items-center gap-1 self-start rounded-full px-2.5 py-1 text-xs font-bold break-words sm:max-w-[65%]",
            trendToneClasses[metric.trendTone],
          )}
        >
          {metric.trendTone === "negative" ? (
            <TrendingDown className="mt-0.5 size-3.5 shrink-0" strokeWidth={2.3} />
          ) : null}
          <span className="leading-4 whitespace-normal">{metric.trendLabel}</span>
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
