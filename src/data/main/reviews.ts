import type {
  ReviewFilterOption,
  ReviewMetric,
  ReviewModerationControl,
  ReviewRow,
  ReviewStatusMeta,
  ReviewsWorkspaceConfig,
} from "@/interfaces/main/reviews";

export const reviewsWorkspace: ReviewsWorkspaceConfig = {
  ariaLabel: "Customer reviews workspace",
  title: "Customer Reviews Management",
  description: "Monitor, moderate, and control public customer feedback",
  primaryActionLabel: "Add New Review",
};

export const reviewSummaryMetrics: ReviewMetric[] = [
  {
    label: "Total Reviews",
    value: "150",
    subtitle: "last update today",
    icon: "reviews",
    iconTone: "bg-primary/10 text-primary",
    trendLabel: "+12.5%",
    trendTone: "positive",
  },
  {
    label: "Average Rating",
    value: "4.2",
    subtitle: "last update today",
    icon: "rating",
    iconTone: "bg-secondary/10 text-secondary",
    ratingValue: 4.2,
  },
  {
    label: "Pending Approval",
    value: "15",
    subtitle: "last update today",
    icon: "pending",
    iconTone: "bg-primary/10 text-primary",
  },
  {
    label: "Hidden Reviews",
    value: "2",
    subtitle: "last update today",
    icon: "hidden",
    iconTone: "bg-danger-soft text-danger",
  },
];

export const reviewModerationControls: ReviewModerationControl[] = [
  {
    id: "auto-approve",
    title: "Auto-approve new reviews",
    description: "New reviews will be published immediately",
    type: "toggle",
    enabled: false,
  },
  {
    id: "website-section",
    title: "Enable reviews section on website",
    description: "Show/hide entire reviews section",
    type: "toggle",
    enabled: true,
  },
  {
    id: "homepage-five-star",
    title: "Show only 5-star reviews on homepage",
    description: "Display best reviews to visitors",
    type: "toggle",
    enabled: false,
  },
  {
    id: "minimum-rating",
    title: "Minimum rating allowed publicly",
    description: "Display best minimum rating allowed publicly",
    type: "select",
    value: "5 star",
  },
];

export const reviewFilterOptions: ReviewFilterOption[] = [
  { label: "All Reviews", value: "all", count: 155 },
  { label: "Approval Reviews", value: "approved", count: 80 },
  { label: "Pending Approval", value: "pending", count: 100 },
  { label: "Hidden Reviews", value: "hidden", count: 20 },
];

export const reviewRows: ReviewRow[] = [
  {
    id: "review-1",
    slug: "review-1",
    name: "Sarah Johnson",
    email: "sophie.t@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "01-10-2025",
    status: "Approved",
  },
  {
    id: "review-2",
    slug: "review-2",
    name: "Michael Chen",
    email: "michael.c@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "16-10-2025",
    status: "Hidden",
  },
  {
    id: "review-3",
    slug: "review-3",
    name: "Emma Davis",
    email: "Emma.avis@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "01-11-2025",
    status: "Approved",
  },
  {
    id: "review-4",
    slug: "review-4",
    name: "James Wilson",
    email: "james.b@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "01-11-2025",
    status: "Pending",
  },
  {
    id: "review-5",
    slug: "review-5",
    name: "Olivia Brown",
    email: "Olivia.m@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "15-12-2025",
    status: "Pending",
  },
  {
    id: "review-6",
    slug: "review-6",
    name: "Robert Taylor",
    email: "Robert.w@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "05-10-2025",
    status: "Hidden",
  },
  {
    id: "review-7",
    slug: "review-7",
    name: "Sophia Martinez",
    email: "Sophia.w@email.com",
    rating: 4.5,
    reviewText:
      '"Marwa, the owner of Cozy Bakes is wonderful. I cannot say enough good things not only about her but also her bread and baked goods. They are worth every penny."',
    date: "01-11-2025",
    status: "Pending",
  },
];

export const reviewStatusMeta: Record<string, ReviewStatusMeta> = {
  Approved: { tone: "success" },
  Pending: { tone: "warning" },
  Hidden: { tone: "danger" },
};
