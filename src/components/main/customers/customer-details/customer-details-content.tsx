import type { CustomerDetailsData } from "@/interfaces/main/customers";
import { customerStatusStyles } from "./customer-details.constants";
import { CustomerDetailsField } from "./customer-details-field";
import { CustomerDetailsPillField } from "./customer-details-pill-field";
import { buildCustomerDetailsViewModel } from "./customer-details.utils";

export function CustomerDetailsContent({
  customer,
}: {
  customer: CustomerDetailsData;
}) {
  const details = buildCustomerDetailsViewModel(customer);

  return (
    <div className="px-6 pb-6 md:px-8">
      <section className="rounded-[24px] border border-border/25 bg-white px-6 py-5">
        <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
          <CustomerDetailsField label="Customer ID" value={details.id} />
          <CustomerDetailsField label="Customer Name" value={details.name} />
          <CustomerDetailsField
            label="Customer Email"
            value={details.email}
          />
          <CustomerDetailsPillField
            label="Orders Number"
            value={details.ordersNumber}
          />
          <CustomerDetailsField label="Total Spent" value={details.totalSpent} />
          <CustomerDetailsField label="Last Order" value={details.lastOrder} />
          <CustomerDetailsPillField
            label="Days Inactive"
            value={details.daysInactive}
          />
          <CustomerDetailsPillField
            label="Status"
            value={details.status}
            pillClassName={customerStatusStyles[details.status]}
          />
        </div>
      </section>
    </div>
  );
}
