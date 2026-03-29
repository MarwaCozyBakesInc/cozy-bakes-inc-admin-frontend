import type { DashboardStatCardProps } from "@/interfaces/main/dashboard";
import type { DashboardStatTone } from "@/types/main/dashboard";

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
    <article className="relative overflow-hidden rounded-[24px] border border-border/25 bg-white p-5 shadow-[0_18px_40px_rgba(209,150,40,0.08)]">
      <div className="absolute -right-8 -bottom-8 size-28 rounded-full border-[20px] border-primary/5" />

      <div className="relative flex items-start justify-between gap-4">
        <div className={`flex size-14 items-center justify-center rounded-[18px] ${tone.iconWrap}`}>
          <Icon className="size-7" />
        </div>

        <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${tone.trend}`}>
          {stat.trend}
        </div>
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray">
          {stat.title}
        </p>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-[-0.03em] text-dark md:text-[32px]">
          {stat.value}
        </p>
        <p className="mt-2 text-xs font-medium text-gray md:text-sm">{stat.note}</p>
      </div>
    </article>
  );
}
