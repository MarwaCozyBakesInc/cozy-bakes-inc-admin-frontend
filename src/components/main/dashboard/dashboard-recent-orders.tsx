import { recentOrders } from "./dashboard-data";
import { DashboardSectionCard } from "./dashboard-shared";

const statusClasses = {
  Delivered: "bg-primary/10 text-primary",
  Preparing: "bg-bg-creamy text-heading-2",
  Ready: "bg-secondary/10 text-secondary",
  "New Order": "bg-gray/15 text-muted-text",
} as const;

export function DashboardRecentOrders() {
  return (
    <DashboardSectionCard
      title="Recent Orders"
      description="Latest customer transactions"
      actionLabel="View All"
    >
      <div className="space-y-3">
        {recentOrders.map((order) => (
          <article
            key={order.id}
            className="flex items-start justify-between gap-4 rounded-[18px] border border-border/20 bg-white px-4 py-3 shadow-[0_10px_22px_rgba(209,150,40,0.06)]"
          >
            <div className="min-w-0">
              <p className="text-xs font-bold text-primary md:text-sm">{order.id}</p>
              <p className="mt-1 truncate text-xs font-medium text-dark md:text-sm">
                {order.customer}
              </p>
              <p className="mt-1 text-[11px] font-medium text-gray md:text-xs">
                {order.items} items
                <span className="px-1.5 text-border">•</span>
                {order.timeAgo}
              </p>
            </div>

            <div className="text-right">
              <p className="text-base font-bold tracking-[-0.02em] text-dark md:text-lg">
                {order.amount}
              </p>
              <span
                className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${statusClasses[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </DashboardSectionCard>
  );
}
