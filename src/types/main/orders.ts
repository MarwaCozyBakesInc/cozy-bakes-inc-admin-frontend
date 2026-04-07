export type OrderStatus =
  | "New"
  | "Preparing"
  | "Ready"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type ApiOrderStatus =
  | "pending"
  | "processed"
  | "packed"
  | "shipped"
  | "completed"
  | "cancelled";

export type OrderPaymentStatus = "pending" | "pending_payment";

export type OrderPaymentMethod = "cod" | "stripe";

export type OrderSort =
  | "latest"
  | "oldest"
  | "pending"
  | "processed"
  | "packed"
  | "shipped"
  | "completed"
  | "cancelled";

export type OrderFilterValue =
  | "all"
  | "new"
  | "preparing"
  | "ready"
  | "shipped"
  | "delivered"
  | "cancelled";

export type OrderViewMode = "table" | "card";
