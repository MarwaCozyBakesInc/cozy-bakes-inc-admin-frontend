import type { ReportsSectionProps } from "@/interfaces/main/reports";
import { cn } from "@/lib/utils";

export function ReportsSection({
  title,
  description,
  actions,
  className,
  children,
}: ReportsSectionProps) {
  return (
    <section
      className={cn(
        "rounded-[16px] border border-border/20 bg-white p-3.5 shadow-[0_18px_40px_rgba(209,150,40,0.08)] md:p-5",
        className,
      )}
    >
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#2C4B7A] md:text-lg">{title}</h2>
          <p className="mt-1 text-xs font-medium text-[#98A2B3]">{description}</p>
        </div>
        {actions ? <div className="self-start">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}
