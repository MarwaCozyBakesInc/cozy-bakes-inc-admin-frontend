import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import type { FindUsHereDaySectionProps } from "@/interfaces/main/find-us-here";
import { Button } from "@/components/ui/button";
import { FindUsHereMarketCard } from "./find-us-here-market-card";

export function FindUsHereDaySection({
  day,
  expanded,
  onToggle,
}: FindUsHereDaySectionProps) {
  return (
    <section className="rounded-2xl border border-primary/15 bg-[#fbf8eb4d] p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <Button
        type="button"
        variant="ghost"
        onClick={() => onToggle(day.id)}
        className="flex w-full items-center justify-between gap-4 rounded-xl text-left"
        aria-expanded={expanded}
        aria-controls={`${day.id}-content`}
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-[14px] bg-gradient-to-b from-[#c9a55a] to-[#d4af37] text-white shadow-[0_1px_2px_rgba(16,24,40,0.12)]">
            <CalendarDays className="size-6" strokeWidth={1.9} />
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#2b5876]">
              {day.label}
            </h2>
            <p className="mt-1 text-sm text-muted-text">
              {day.scheduledSummary}
            </p>
          </div>
        </div>

        <div className="flex size-9 items-center justify-center rounded-[10px] bg-primary text-white">
          {expanded ? (
            <ChevronUp className="size-5" strokeWidth={2.2} />
          ) : (
            <ChevronDown className="size-5" strokeWidth={2.2} />
          )}
        </div>
      </Button>

      {expanded ? (
        <div id={`${day.id}-content`} className="mt-6 space-y-6">
          {day.locations.map((location) => (
            <FindUsHereMarketCard key={location.id} location={location} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
