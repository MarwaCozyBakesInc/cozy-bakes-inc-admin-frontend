import { MapPin } from "lucide-react";
import type { SingleOrderData } from "@/interfaces/main/orders";
import {
  getShippingPrimaryText,
  getShippingSecondaryText,
  getShippingTitle,
} from "./order-details.utils";

interface OrderDetailsShippingCardProps {
  order: SingleOrderData;
}

export function OrderDetailsShippingCard({
  order,
}: OrderDetailsShippingCardProps) {
  return (
    <section className="rounded-[24px] border border-border/25 bg-white px-5 py-4">
      <div className="space-y-3">
        <p className="text-xl font-medium text-primary">Shipping Address</p>

        <div className="rounded-[16px] border border-border/25 bg-bg-creamy px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-[58px] items-center justify-center rounded-[12px] bg-white">
              <MapPin className="size-6 text-primary" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-primary">
                {getShippingTitle(order)}
              </p>
              <p className="truncate text-base font-semibold text-dark">
                {getShippingPrimaryText(order)}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-text">
                {getShippingSecondaryText(order)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
