"use client";

import { useState } from "react";
import {
  findUsHereMarketDays,
  findUsHereSummaryMetrics,
  findUsHereWorkspace,
} from "@/data/main/find-us-here";
import { FindUsHereDaySection } from "./find-us-here-day-section";
import { FindUsHereHeader } from "./find-us-here-header";
import { FindUsHereSummaryGrid } from "./find-us-here-summary-grid";

function FindUsHere() {
  const [expandedDayIds, setExpandedDayIds] = useState<string[]>(
    () =>
      findUsHereMarketDays
        .filter((day) => day.defaultExpanded)
        .map((day) => day.id),
  );

  const handleToggleDay = (dayId: string) => {
    setExpandedDayIds((currentDayIds) =>
      currentDayIds.includes(dayId)
        ? currentDayIds.filter((currentDayId) => currentDayId !== dayId)
        : [...currentDayIds, dayId],
    );
  };

  return (
    <section className="space-y-4 md:space-y-6">
      <FindUsHereHeader
        title={findUsHereWorkspace.title}
        description={findUsHereWorkspace.description}
        primaryActionLabel={findUsHereWorkspace.primaryActionLabel}
        secondaryActionLabel={findUsHereWorkspace.secondaryActionLabel}
      />

      <FindUsHereSummaryGrid metrics={findUsHereSummaryMetrics} />

      <div className="space-y-4">
        {findUsHereMarketDays.map((day) => (
          <FindUsHereDaySection
            key={day.id}
            day={day}
            expanded={expandedDayIds.includes(day.id)}
            onToggle={handleToggleDay}
          />
        ))}
      </div>
    </section>
  );
}

export default FindUsHere;
