import { ReportsGrowthSection } from "./reports-growth-section";
import { ReportsHeader } from "./reports-header";
import { ReportsInsightsRow } from "./reports-insights-row";
import { ReportsMetricsGrid } from "./reports-metrics-grid";
import { ReportsOverviewRow } from "./reports-overview-row";
import { ReportsProductPerformanceSection } from "./reports-product-performance-section";

function ReportsScreen() {
  return (
    <section className="space-y-4 md:space-y-6">
      <ReportsHeader />

      <div className="space-y-4 md:space-y-5">
        <ReportsMetricsGrid />
        <ReportsOverviewRow />
        <ReportsGrowthSection />
        <ReportsInsightsRow />
        <ReportsProductPerformanceSection />
      </div>
    </section>
  );
}

export default ReportsScreen;
