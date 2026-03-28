import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type DashboardSectionCardProps = {
  title: string;
  description: string;
  actionLabel?: string;
  className?: string;
  children: ReactNode;
};

export function DashboardSectionCard({
  title,
  description,
  actionLabel,
  className,
  children,
}: DashboardSectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-[24px] border border-border/30 bg-white p-4 shadow-[0_20px_45px_rgba(209,150,40,0.08)] md:p-5",
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-[20px] font-bold tracking-[-0.02em] text-dark md:text-[22px]">
            {title}
          </h2>
          <p className="mt-1 text-xs font-medium text-gray md:text-sm">{description}</p>
        </div>

        {actionLabel ? (
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-secondary md:text-sm"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="size-4" />
          </button>
        ) : null}
      </div>

      {children}
    </section>
  );
}

type DashboardProductThumbProps = {
  label: string;
  className?: string;
};

export function DashboardProductThumb({
  label,
  className,
}: DashboardProductThumbProps) {
  return (
    <div
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-primary to-border text-sm font-bold text-white shadow-[0_10px_24px_rgba(209,150,40,0.24)]",
        className,
      )}
    >
      {label.slice(0, 2).toUpperCase()}
    </div>
  );
}
