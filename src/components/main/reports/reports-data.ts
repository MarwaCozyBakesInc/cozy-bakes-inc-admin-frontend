import type {
  ReportCategoryShare,
  ReportCustomerSegment,
  ReportFunnelStage,
  ReportMetric,
  ReportProductPerformance,
  ReportRevenuePoint,
  ReportSalesPoint,
} from "@/interfaces/main/reports";
import type { ReportCategoryTone } from "@/types/main/reports";

export const reportMetrics: ReportMetric[] = [
  {
    label: "Total Revenue",
    value: "$109,300",
    note: "last update today",
    trend: "+12.5%",
    tone: "positive",
    icon: "revenue",
  },
  {
    label: "Average Order Value",
    value: "$32.50",
    note: "last update today",
    trend: "+8.2%",
    tone: "positive",
    icon: "average-order",
  },
  {
    label: "Total Products Sold",
    value: "7,024",
    note: "last update today",
    trend: "-3.1%",
    tone: "negative",
    icon: "products",
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    note: "last update today",
    trend: "+5.3%",
    tone: "positive",
    icon: "conversion",
  },
];

export const salesOverviewPoints: ReportSalesPoint[] = [
  { label: "Mon", value: 2500 },
  { label: "Tue", value: 1500 },
  { label: "Wed", value: 3200 },
  { label: "Thu", value: 2850 },
  { label: "Fri", value: 5100 },
  { label: "Sat", value: 5600 },
  { label: "Sun", value: 4700 },
];

export const categoryShares: ReportCategoryShare[] = [
  { label: "Breads", value: 35, tone: "breads" },
  { label: "Pastries", value: 28, tone: "pastries" },
  { label: "Cakes", value: 22, tone: "cakes" },
  { label: "Others", value: 15, tone: "others" },
];

export const revenueGrowthPoints: ReportRevenuePoint[] = [
  { label: "Jan 1", revenue: 3400 },
  { label: "Jan 5", revenue: 4100 },
  { label: "Jan 10", revenue: 3850 },
  { label: "Jan 15", revenue: 5200 },
  { label: "Jan 20", revenue: 5900 },
  { label: "Jan 25", revenue: 5600 },
  { label: "Jan 30", revenue: 6900 },
  { label: "Feb 5", revenue: 6200 },
  { label: "Feb 10", revenue: 6900 },
  { label: "Feb 15", revenue: 7100, forecast: 9500 },
  { label: "Feb 20", revenue: 7600, forecast: 9900 },
  { label: "Feb 24", revenue: 7950, forecast: 10400 },
];

export const customerSegments: ReportCustomerSegment[] = [
  { label: "New Customers", users: 432, tone: "breads" },
  { label: "Returning", users: 856, tone: "pastries" },
  { label: "VIP", users: 124, tone: "others" },
  { label: "Inactive", users: 234, tone: "cakes" },
];

export const conversionFunnel: ReportFunnelStage[] = [
  {
    label: "Visitors",
    value: 12450,
    dropoff: "+0.5% growth",
    progress: 100,
    tone: "breads",
  },
  {
    label: "Add to Cart",
    value: 3850,
    dropoff: "69.1% drop-off",
    progress: 63,
    tone: "pastries",
  },
  {
    label: "Checkout",
    value: 2120,
    dropoff: "44.9% drop-off",
    progress: 47,
    tone: "others",
  },
  {
    label: "Purchase",
    value: 1646,
    dropoff: "22.4% drop-off",
    progress: 42,
    tone: "cakes",
  },
];

export const productPerformanceRows: ReportProductPerformance[] = [
  {
    productName: "Sourdough",
    unitsSold: "1245 units",
    totalRevenue: "$10,583",
    avgPrice: "$190",
    performance: 100,
  },
  {
    productName: "Croissant",
    unitsSold: "1132 units",
    totalRevenue: "$5,094",
    avgPrice: "$25",
    performance: 91,
  },
  {
    productName: "Baguette",
    unitsSold: "1245 units",
    totalRevenue: "$4,935",
    avgPrice: "$50",
    performance: 79,
  },
  {
    productName: "Whole Grain",
    unitsSold: "1245 units",
    totalRevenue: "$6,570",
    avgPrice: "$100",
    performance: 70,
  },
  {
    productName: "Rye Bread",
    unitsSold: "1245 units",
    totalRevenue: "$6,120",
    avgPrice: "$145",
    performance: 61,
  },
  {
    productName: "Ciabatta",
    unitsSold: "1245 units",
    totalRevenue: "$4,251",
    avgPrice: "$25.50",
    performance: 53,
  },
];

export const salesOverviewTicks = [0, 1500, 3000, 4500, 6000];
export const revenueGrowthTicks = [0, 3000, 6000, 9000, 12000];
export const salesOverviewHighlightIndex = 2;
export const revenueGrowthHighlightIndex = 9;

export const salesOverviewChart = {
  width: 560,
  height: 286,
  padding: { top: 18, right: 18, bottom: 38, left: 38 },
};

export const revenueGrowthChart = {
  width: 1100,
  height: 300,
  padding: { top: 24, right: 22, bottom: 34, left: 42 },
};

export const segmentToneMeta: Record<
  ReportCategoryTone,
  {
    color: string;
    bulletClassName: string;
  }
> = {
  breads: {
    color: "#D19628",
    bulletClassName: "bg-primary",
  },
  pastries: {
    color: "#3B82F6",
    bulletClassName: "bg-[#3B82F6]",
  },
  cakes: {
    color: "#EF4444",
    bulletClassName: "bg-[#EF4444]",
  },
  others: {
    color: "#10B981",
    bulletClassName: "bg-[#F59E0B]",
  },
};
