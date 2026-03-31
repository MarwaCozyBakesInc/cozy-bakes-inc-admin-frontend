import type { ComponentType } from "react";
import type { ReportsMetricCardProps } from "@/interfaces/main/reports";
import type { ReportMetricIcon } from "@/types/main/reports";
import { cn } from "@/lib/utils";
import {
  Activity,
  Package,
  ShoppingBasket,
  Wallet,
} from "lucide-react";

const metricIconMap: Record<
  ReportMetricIcon,
  {
    icon: ComponentType<{ className?: string }>;
    className: string;
  }
> = {
  revenue: {
    icon: Wallet,
    className: "bg-primary/12 text-primary",
  },
  "average-order": {
    icon: ShoppingBasket,
    className: "bg-secondary/12 text-secondary",
  },
  products: {
    icon: Package,
    className: "bg-[#F59E0B]/12 text-[#F59E0B]",
  },
  conversion: {
    icon: Activity,
    className: "bg-[#10B981]/12 text-[#10B981]",
  },
};

export function ReportsMetricCard({ metric }: ReportsMetricCardProps) {
  const Icon = metricIconMap[metric.icon].icon;
  const trendClasses =
    metric.tone === "negative"
      ? "bg-danger-soft text-danger"
      : metric.tone === "neutral"
        ? "bg-white/10 text-white"
        : "bg-[#ECFDF3] text-[#12B76A]";

  return (
    <article className="relative overflow-hidden rounded-[16px] border border-border/20 bg-white p-4 shadow-[0_18px_40px_rgba(209,150,40,0.08)]">
      <div className="absolute -right-3 -bottom-3 size-24 rounded-full border-[18px] border-primary/5" />
      <div className="relative flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex size-14 items-center justify-center rounded-[16px]",
            metricIconMap[metric.icon].className,
          )}
        >
          <Icon className="size-6" />
        </div>
        <span className={cn("rounded-full px-3 py-1 text-xs font-bold", trendClasses)}>
          {metric.trend}
        </span>
      </div>

      <div className="relative mt-6 space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93A4BC]">
          {metric.label}
        </p>
        <p className="text-[32px] font-bold leading-none tracking-[-0.03em] text-[#2D4F7E]">
          {metric.value}
        </p>
        <p className="text-xs font-medium text-[#98A2B3]">{metric.note}</p>
      </div>
    </article>
  );
}
