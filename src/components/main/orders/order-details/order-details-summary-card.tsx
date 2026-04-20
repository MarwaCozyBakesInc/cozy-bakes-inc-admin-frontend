import { ShoppingCart } from "lucide-react";
import type { SingleOrderData } from "@/interfaces/main/orders";
import { paymentMethodStyles } from "./order-details.constants";
import { formatPaymentMethod, getOrderLineTotal } from "./order-details.utils";
import { formatCurrency } from "@/lib/utils/dashboard";
import { cn } from "@/lib";

interface OrderDetailsSummaryCardProps {
  order: SingleOrderData;
}

export function OrderDetailsSummaryCard({
  order,
}: OrderDetailsSummaryCardProps) {
  const paymentLabel = formatPaymentMethod(
    order.payment_method,
    order.cod_payment_method,
  );

  return (
    <section className="rounded-[24px] bg-bg-creamy px-6 py-7">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="size-5 text-primary" />
          <p className="text-xl font-medium text-primary">Order DETAILS</p>
        </div>

        <div className="rounded-[10px] bg-white px-8 py-4">
          <div className="space-y-1">
            {order.items.map((item) => (
              <div
                key={`${item.product_id}-${item.product_name}`}
                className="flex items-center justify-between border-b border-[#E8DCC8] py-3"
              >
                <p className="pr-4 text-base font-medium text-muted-text">
                  {item.product_name} * {item.quantity}
                </p>
                <p className="text-lg font-semibold text-dark">
                  {getOrderLineTotal(item.price, item.quantity, item.subtotal)}
                </p>
              </div>
            ))}

            <div className="flex items-center justify-between border-b border-[#E8DCC8] py-3">
              <p className="text-base font-medium text-dark">Shipping Fee</p>
              <p className="text-lg font-semibold text-primary">
                {formatCurrency(Number(order.pricing.delivery_fee))}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-[#E8DCC8] py-3">
              <p className="text-base font-medium text-dark">
                Payment Method Used
              </p>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
                  paymentMethodStyles[order.payment_method],
                )}
              >
                {paymentLabel}
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <p className="text-[20px] font-semibold tracking-[0.03em] text-dark">
                Total
              </p>
              <p className="text-[20px] font-semibold text-primary">
                {formatCurrency(Number(order.pricing.total_amount))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
