import type { CustomersCanvasProps } from "@/interfaces/main/customers";
import { cn } from "@/lib/utils";

const canvasVariantClasses = {
  overview: "bg-transparent border-primary/10",
} as const;

export function CustomersCanvas({
  ariaLabel,
  variant = "overview",
  children,
}: CustomersCanvasProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "flex flex-col gap-4 rounded-[24px] p-0 shadow-none md:gap-5",
        canvasVariantClasses[variant],
      )}
    >
      {children}
    </div>
  );
}
