import Image from "next/image";
import type { SingleOrderData } from "@/interfaces/main/orders";
import { OrderDetailsInfoField } from "./order-details-info-field";
import { formatOrderDateTime } from "./order-details.utils";

interface OrderDetailsReceiverCardProps {
  order: SingleOrderData;
}

function getPhoneParts(phone: string | null) {
  if (!phone) {
    return { number: "N/A" };
  }

  const digits = phone.replace(/\D/g, "");
  const hasUsCountryCode = digits.length >= 11 && digits.startsWith("1");
  const usLocalNumber = hasUsCountryCode ? digits.slice(1) : digits;

  if (usLocalNumber.length === 10) {
    return {
      number: `(${usLocalNumber.slice(0, 3)}) ${usLocalNumber.slice(3, 6)}-${usLocalNumber.slice(6)}`,
    };
  }

  return {
    number: hasUsCountryCode ? usLocalNumber : phone.trim(),
  };
}

function PhonePrefix() {
  return (
    <div className="flex h-11 min-w-[79px] items-center justify-center rounded-[8px] bg-bg-creamy/90 p-[5px]">
      <div className="flex items-center gap-2">
        <Image
          src="/images/flag.png"
          alt="US flag"
          width={28}
          height={20}
          className="h-5 w-7 rounded-[2px] object-contain"
        />
        <span className="text-lg font-medium leading-[30px] text-dark">+1</span>
      </div>
    </div>
  );
}

export function OrderDetailsReceiverCard({
  order,
}: OrderDetailsReceiverCardProps) {
  const phone = getPhoneParts(order.customer.phone);

  return (
    <section className="rounded-[24px] border border-border/25 bg-white px-5 py-4">
      <div className="space-y-4">
        <p className="text-xl font-medium text-primary">Receiver Details</p>

        <div className="grid gap-4 md:grid-cols-2">
          <OrderDetailsInfoField label="Name" value={order.customer.name} />
          <OrderDetailsInfoField
            label="Order Time"
            value={formatOrderDateTime(order.created_at)}
          />
          <OrderDetailsInfoField label="Email" value={order.customer.email} />
          <div className="space-y-2">
            <p className="text-base font-medium text-dark">Phone Number</p>
            <div className="flex h-14 items-center gap-3 rounded-[10px] border border-primary/75 bg-primary/5 px-3">
              <PhonePrefix />
              <p className="min-w-0 flex-1 truncate text-sm font-medium leading-5 text-dark">
                {phone.number}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
