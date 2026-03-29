export type OrderStatus =
  | "New"
  | "Preparing"
  | "Ready"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type OrderFilterValue =
  | "all"
  | "new"
  | "preparing"
  | "ready"
  | "shipped"
  | "delivered"
  | "cancelled";

export type OrderViewMode = "table" | "card";
