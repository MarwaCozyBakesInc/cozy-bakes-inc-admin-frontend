import type { DashboardStatCardProps } from "@/interfaces/main/dashboard";
import type { DashboardStatTone } from "@/types/main/dashboard";
import { cn } from "@/lib/utils";

const toneClasses: Record<
  DashboardStatTone,
  {
    iconWrap: string;
    trend: string;
  }
> = {
  primary: {
    iconWrap: "bg-primary/12 text-primary",
    trend: "bg-primary/10 text-primary",
  },
  secondary: {
    iconWrap: "bg-secondary/12 text-secondary",
    trend: "bg-primary/10 text-primary",
  },
  light: {
    iconWrap: "bg-light-chocolate/12 text-light-chocolate",
    trend: "bg-secondary/10 text-secondary",
  },
  gray: {
    iconWrap: "bg-gray/12 text-muted-text",
    trend: "bg-primary/10 text-primary",
  },
};

export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  const Icon = stat.icon;
  const tone = toneClasses[stat.tone];

  return (
    <article className="relative overflow-hidden rounded-[16px] border border-border/20 bg-white p-4 shadow-[0_18px_40px_rgba(209,150,40,0.08)]">
      <div className="absolute -right-3 -bottom-3 size-24 rounded-full border-[18px] border-primary/5" />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex size-14 items-center justify-center rounded-[16px]",
            tone.iconWrap,
          )}
        >
          <Icon className="size-6" />
        </div>

        <div
          className={cn("inline-flex rounded-full px-3 py-1 text-xs font-bold", tone.trend)}
        >
          {stat.trend}
        </div>
      </div>

      <div className="relative mt-6 space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93A4BC]">
          {stat.title}
        </p>
        <p className="text-[32px] font-bold leading-none tracking-[-0.03em] text-[#2D4F7E]">
          {stat.value}
        </p>
        <p className="text-xs font-medium text-[#98A2B3]">{stat.note}</p>
      </div>
    </article>
  );
}
