import { dashboardStats } from "@/data/main/dashboard";
import { DashboardStatCard } from "./dashboard-stat-card";

export function DashboardStatsGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <DashboardStatCard key={stat.title} stat={stat} />
      ))}
    </section>
  );
}
