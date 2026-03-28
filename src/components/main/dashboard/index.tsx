import { DashboardCategoryChart } from "./dashboard-category-chart";
import { DashboardHeader } from "./dashboard-header";
import { DashboardLowStockAlert } from "./dashboard-low-stock-alert";
import { DashboardRecentOrders } from "./dashboard-recent-orders";
import { DashboardSalesOverview } from "./dashboard-sales-overview";
import { DashboardStatsGrid } from "./dashboard-stats-grid";
import { DashboardTopProducts } from "./dashboard-top-products";

function Dashboard() {
  return (
    <div className="space-y-6 xl:space-y-7">
      <DashboardHeader />
      <DashboardStatsGrid />
      <DashboardLowStockAlert />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
        <DashboardSalesOverview />
        <DashboardCategoryChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DashboardRecentOrders />
        <DashboardTopProducts />
      </div>
    </div>
  );
}

export default Dashboard;
