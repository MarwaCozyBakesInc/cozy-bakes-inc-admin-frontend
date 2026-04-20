import { cn } from "@/lib";
import { orderStatusStyles } from "./order-details.constants";
import { formatOrderStatus } from "./order-details.utils";
import type { ApiOrderStatus } from "@/types/main/orders";

interface OrderDetailsStatusCardProps {
  status: ApiOrderStatus;
}

export function OrderDetailsStatusCard({
  status,
}: OrderDetailsStatusCardProps) {
  return (
    <section className="rounded-[24px] border border-border/25 bg-white px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xl font-medium text-primary">Order Status</p>
        <span
          className={cn(
            "inline-flex min-w-20 items-center justify-center rounded-[10px] px-3 py-2 text-xs font-bold",
            orderStatusStyles[status],
          )}
        >
          {formatOrderStatus(status)}
        </span>
      </div>
    </section>
  );
}
