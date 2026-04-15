export type ReviewMetricIcon = "reviews" | "rating" | "pending" | "hidden";

export type ReviewMetricTrendTone = "positive" | "neutral";

export type ReviewStatus = "Approved" | "Pending" | "Hidden";

export type ReviewStatusTone = "success" | "warning" | "danger";

export type ReviewFilter = "all" | "approved" | "pending" | "hidden";

export type ReviewSortOption = "newest" | "oldest" | "highest-rating";

export type ReviewModerationControlType = "toggle" | "select";

export type ReviewListApiStatus = "all" | "approved" | "pending" | "rejected";

export type ReviewListApiSortOption =
  | "newest"
  | "oldest"
  | "rating_high"
  | "rating_low";
