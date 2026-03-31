import { ArrowRight } from "lucide-react";
import type {
  DashboardProductThumbProps,
  DashboardSectionCardProps,
} from "@/interfaces/main/dashboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        "rounded-[20px] border border-border/30 bg-white p-3.5 shadow-[0_20px_45px_rgba(209,150,40,0.08)] md:rounded-[24px] md:p-5",
        className,
      )}
    >
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-[18px] font-bold tracking-[-0.02em] text-dark md:text-[22px]">
            {title}
          </h2>
          <p className="mt-1 text-xs font-medium text-gray md:text-sm">{description}</p>
        </div>

        {actionLabel ? (
          <Button
            type="button"
            variant="ghost"
            className="inline-flex items-center gap-1 self-start text-xs font-semibold text-primary transition-colors hover:text-secondary md:text-sm"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="size-4" />
          </Button>
        ) : null}
      </div>

      {children}
    </section>
  );
}

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
