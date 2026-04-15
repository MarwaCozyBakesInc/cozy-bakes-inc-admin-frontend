export type CustomersCanvasVariant = "overview";

export type CustomerMetricTrendTone = "positive" | "negative" | "neutral";

export type CustomerMetricIconTone =
  | "lavender"
  | "secondary"
  | "amber"
  | "danger"
  | "primary";

export type CustomerStatus =
  | "Registered Only"
  | "Active"
  | "Inactive"
  | "First-Time"
  | "VIP";

export type CustomerStatusTone =
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "primary";

export type CustomerSegmentFilter =
  | "all"
  | "registered-only"
  | "first-time"
  | "repeat-customers"
  | "vip"
  | "inactive"
  | "high-spenders";

export type CustomerSortOption =
  | "newest"
  | "oldest"
  | "highest_spent"
  | "most_orders"
  | "last_order";
