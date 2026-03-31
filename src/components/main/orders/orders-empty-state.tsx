import { PackageSearch, RefreshCcw, SearchX } from "lucide-react";
import type { OrdersEmptyStateProps } from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";

export function OrdersEmptyState({
  hasSearch,
  hasFilteredStatus,
  viewMode,
  onResetFilters,
  onClearSearch,
}: OrdersEmptyStateProps) {
  const title =
    hasSearch || hasFilteredStatus
      ? "No orders match your current view"
      : "Your orders space is ready";

  const description =
    hasSearch || hasFilteredStatus
      ? "Try a different status, remove the search term, or jump back to all orders."
      : "New customer orders will appear here once they start coming in.";

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-border/15 bg-[linear-gradient(180deg,#fffdf8_0%,#faf8f3_100%)] px-6 py-10 shadow-[0_22px_48px_rgba(209,150,40,0.08)] md:px-10 md:py-14">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(209,150,40,0.18),transparent_68%)]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute size-36 rounded-full bg-primary/8 blur-2xl" />
          <div className="relative flex size-24 items-center justify-center rounded-[28px] border border-primary/15 bg-white shadow-[0_18px_36px_rgba(209,150,40,0.12)]">
            <PackageSearch className="size-11 text-primary" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {viewMode === "card" ? "Card View" : "Table View"}
          </span>
          <h2 className="text-[26px] font-bold tracking-[-0.04em] text-dark md:text-[32px]">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-sm font-medium leading-6 text-muted-text md:text-base">
            {description}
          </p>
        </div>

        <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
          <div className="rounded-[22px] border border-border/10 bg-white/90 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray">
              What you can do
            </p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-dark">
              Adjust the current results
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-text">
              Use the status tabs and search bar to narrow the list, or reset them to
              bring all orders back into view.
            </p>
          </div>

          <div className="rounded-[22px] border border-dashed border-primary/25 bg-primary/5 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Empty states matter
            </p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-dark">
              Keep the page feeling finished
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-text">
              This state stays visually balanced even when a filter like Shipped has no
              matching orders yet.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          {hasSearch ? (
            <Button
              type="button"
              variant="ghost"
              onClick={onClearSearch}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[999px] bg-primary px-6 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(209,150,40,0.22)] transition-transform hover:-translate-y-0.5"
            >
              <SearchX className="size-4" />
              <span>Clear Search</span>
            </Button>
          ) : null}

          {(hasFilteredStatus || hasSearch) ? (
            <Button
              type="button"
              variant="ghost"
              onClick={onResetFilters}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[999px] border border-primary/20 bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              <RefreshCcw className="size-4" />
              <span>Show All Orders</span>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
