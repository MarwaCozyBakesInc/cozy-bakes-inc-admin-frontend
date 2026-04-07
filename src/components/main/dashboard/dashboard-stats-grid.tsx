"use client";

import { DashboardStatCard } from "./dashboard-stat-card";
import { useSummaryDataSets } from "@/hooks/api";
import { buildDashboardStats } from "@/lib";

export function DashboardStatsGrid() {
  const { data } = useSummaryDataSets();
  const stats = buildDashboardStats(data?.data);

  return (
    <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {stats.map((stat) => (
        <DashboardStatCard key={stat.title} stat={stat} />
      ))}
    </section>
  );
}
