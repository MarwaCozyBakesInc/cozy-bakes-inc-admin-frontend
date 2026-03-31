import type { ReactNode } from "react";
import type { FindUsHereSummaryMetricIcon } from "@/types/main/find-us-here";

export interface FindUsHereWorkspaceConfig {
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export interface FindUsHereSummaryMetric {
  label: string;
  value: string;
  suffix: string;
  icon: FindUsHereSummaryMetricIcon;
}

export interface FindUsHereMarketLocation {
  id: string;
  title: string;
  badge: string;
  description: string;
  schedule: string;
  address: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FindUsHereMarketDay {
  id: string;
  label: string;
  scheduledSummary: string;
  defaultExpanded?: boolean;
  locations: FindUsHereMarketLocation[];
}

export interface FindUsHereHeaderProps {
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export interface FindUsHereSummaryGridProps {
  metrics: FindUsHereSummaryMetric[];
}

export interface FindUsHereSummaryCardProps {
  metric: FindUsHereSummaryMetric;
}

export interface FindUsHereDaySectionProps {
  day: FindUsHereMarketDay;
  expanded: boolean;
  onToggle: (dayId: string) => void;
}

export interface FindUsHereMarketCardProps {
  location: FindUsHereMarketLocation;
}

export interface FindUsHereActionButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}
