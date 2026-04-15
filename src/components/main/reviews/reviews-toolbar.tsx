import { ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReviewsToolbarProps } from "@/interfaces/main/reviews";
import type { ReviewListApiSortOption } from "@/types/main/reviews";
import { Button } from "@/components/ui/button";

const sortOptions: { value: ReviewListApiSortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "rating_high", label: "Highest rating" },
  { value: "rating_low", label: "Lowest rating" },
];

export function ReviewsToolbar({
  searchValue,
  onSearchChange,
  sortValue,
  onSortChange,
}: ReviewsToolbarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!sortRef.current?.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedSortLabel =
    sortOptions.find((option) => option.value === sortValue)?.label ??
    "Sort reviews";

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[rgba(250,248,243,0.48)] p-3 md:flex-row md:items-center md:justify-between">
      <label className="relative flex min-w-0 flex-1 items-center">
        <Search
          className="pointer-events-none absolute left-4 size-4 text-primary"
          strokeWidth={2}
        />
        <input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name ..."
          className="h-12 w-full rounded-full border border-white/55 bg-transparent pl-11 pr-4 text-sm font-medium placeholder:text-gray/400 focus:border-primary focus:outline-none"
        />
      </label>

      <div ref={sortRef} className="relative self-start md:self-auto">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsSortOpen((open) => !open)}
          className="inline-flex h-11 items-center justify-between gap-3 rounded-full border-primary/20 bg-background px-4 pr-10 text-sm font-semibold text-dark shadow-sm transition-colors hover:border-primary/70"
          aria-expanded={isSortOpen}
          aria-haspopup="listbox"
        >
          <span>{selectedSortLabel}</span>
          <ChevronDown
            className={`pointer-events-none size-4 text-primary transition-transform ${
              isSortOpen ? "rotate-180" : ""
            }`}
            strokeWidth={2.2}
          />
        </Button>

        {isSortOpen ? (
          <div className="absolute right-0 z-10 mt-2 w-[220px] overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
            {sortOptions.map((option) => {
              const isSelected = option.value === sortValue;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onSortChange(option.value);
                    setIsSortOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : "text-dark hover:bg-[#f7f5ef]"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected ? (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary">
                      ✓
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
