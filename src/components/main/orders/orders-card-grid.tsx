import {
  Check,
  CircleAlert,
  Clock3,
  Eye,
  Package,
  Trash2,
  X,
} from "lucide-react";
import type { OrdersCardGridProps } from "@/interfaces/main/orders";
import type { OrderStatus } from "@/types/main/orders";
import { Button } from "@/components/ui/button";

const cardStatusClasses: Record<OrderStatus, string> = {
  New: "bg-[#DBEAFF] text-[#1570EF]",
  Preparing: "bg-[#FFF7E6] text-[#D69618]",
  Ready: "bg-[#F4F0FF] text-[#7A5AF8]",
  Shipped: "bg-[#EEF4FF] text-[#175CD3]",
  Delivered: "bg-[#ECFDF3] text-[#12B76A]",
  Cancelled: "bg-[#FEF3F2] text-[#F04438]",
};

const workflow = ["New", "Preparing", "Ready", "Delivered"] as const;

function getProgressIndex(status: OrderStatus) {
  if (status === "Cancelled") {
    return 1;
  }

  if (status === "Shipped") {
    return 2;
  }

  return workflow.indexOf(status as (typeof workflow)[number]);
}

function getStepState(status: OrderStatus, step: (typeof workflow)[number], index: number) {
  if (status === "Cancelled") {
    if (index === 0) return "done";
    if (index === 1) return "cancelled";
    return "pending";
  }

  const progressIndex = getProgressIndex(status);

  if (index < progressIndex) return "done";
  if (index === progressIndex) return "current";
  return "pending";
}

function getStepIcon(step: (typeof workflow)[number], currentStatus: OrderStatus) {
  if (currentStatus === "Cancelled" && step === "Preparing") {
    return X;
  }

  switch (step) {
    case "New":
      return CircleAlert;
    case "Preparing":
      return Clock3;
    case "Ready":
      return Package;
    case "Delivered":
      return Check;
  }
}

export function OrdersCardGrid({ orders }: OrdersCardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {orders.map((order) => (
        <article
          key={order.id}
          className="overflow-hidden rounded-[16px] border border-border/15 bg-white shadow-[0_16px_36px_rgba(209,150,40,0.08)]"
        >
          <div className="border-b border-border/10 px-5 py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-[18px] font-bold tracking-[-0.03em] text-chocolate">
                  {order.customer}
                </h3>
                <p className="text-sm font-bold text-gray">{order.id}</p>
              </div>

              <span
                className={`inline-flex items-center rounded-[10px] px-3 py-2 text-xs font-bold ${cardStatusClasses[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-b border-border/10 px-5 py-5">
            {workflow.map((step, index) => {
              const state = getStepState(order.status, step, index);
              const Icon = getStepIcon(step, order.status);
              const active =
                state === "done" || state === "current" || state === "cancelled";
              const circleClass =
                state === "cancelled"
                  ? "bg-[#F04438] text-white"
                  : active
                    ? "bg-primary text-white"
                    : "bg-bg-creamy/60 text-border";
              const lineClass =
                state === "cancelled"
                  ? "bg-[#F04438]"
                  : state === "done" || state === "current"
                    ? "bg-primary"
                    : "bg-[#EAECF0]";
              const labelClass =
                state === "cancelled"
                  ? "text-[#F04438]"
                  : active
                    ? "text-primary"
                    : "text-muted-text";

              return (
                <div key={step} className="flex min-w-0 flex-1 items-center">
                  <div className="flex min-w-0 flex-col items-center gap-2">
                    <span
                      className={`inline-flex size-10 items-center justify-center rounded-full ${circleClass}`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className={`text-[10px] font-semibold ${labelClass}`}>
                      {state === "cancelled" && step === "Preparing" ? "Cancelled" : step}
                    </span>
                  </div>

                  {index < workflow.length - 1 ? (
                    <span className={`mx-2 h-0.5 flex-1 rounded-full ${lineClass}`} />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="space-y-4 px-5 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray">
                Order Details
              </p>
              <p className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-dark">
                {order.details}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-text">
                {order.items} items • {order.date} {order.time}
              </p>
            </div>

            <div className="flex items-center justify-between border-y border-border/10 py-3">
              <p className="text-sm font-semibold text-muted-text">Total Amount</p>
              <p className="text-[20px] font-bold tracking-[0.02em] text-primary">
                {order.total}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 pb-3">
            <Button
              type="button"
              variant="ghost"
              aria-label={`View ${order.id}`}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[8px] bg-primary px-4 text-sm font-semibold text-white"
            >
              <Eye className="size-4" />
              <span>View Details</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Delete ${order.id}`}
              className="inline-flex size-11 items-center justify-center rounded-[8px] bg-[#FEF3F2] text-[#F04438]"
            >
              <Trash2 className="size-5" />
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
