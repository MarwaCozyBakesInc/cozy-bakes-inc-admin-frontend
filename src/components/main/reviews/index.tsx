"use client";

import { useCallback, useMemo, useState } from "react";
import {
  reviewFilterOptions,
  reviewModerationControls,
  reviewSummaryMetrics,
  reviewsWorkspace,
} from "@/data/main/reviews";
import type {
  ReviewFilter,
  ReviewStatus,
  ReviewListApiStatus,
  ReviewListApiSortOption,
} from "@/types/main/reviews";
import { ReviewsFilterTabs } from "./reviews-filter-tabs";
import { ReviewsHeader } from "./reviews-header";
import { ReviewsModerationPanel } from "./reviews-moderation-panel";
import { ReviewsShell } from "./reviews-shell";
import { ReviewsSummaryGrid } from "./reviews-summary-grid";
import { ReviewsTable } from "./reviews-table";
import { ReviewsToolbar } from "./reviews-toolbar";
import { useReviewList } from "@/hooks/api";

function Reviews() {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>("all");
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState<ReviewListApiSortOption>("newest");
  const statusFilter: ReviewListApiStatus | undefined =
    activeFilter === "all"
      ? undefined
      : activeFilter === "hidden"
        ? "rejected"
        : activeFilter;
  const { data, isLoading } = useReviewList(sortValue, statusFilter);

  const apiRows = useMemo(
    () => data?.pages?.flatMap((page) => page?.data?.data ?? []) ?? [],
    [data],
  );
  console.log(apiRows);
  const mappedRows = useMemo(
    () =>
      apiRows.map((row) => {
        const status: ReviewStatus =
          row.status === "approved"
            ? "Approved"
            : row.status === "pending"
              ? "Pending"
              : "Hidden";
        const parsedRating = Number(row.rating);

        return {
          id: String(row.id),
          name: row.customer_name,
          email: row.customer_email,
          rating: Number.isFinite(parsedRating) ? parsedRating : 0,
          reviewText: row.review_text ?? "",
          date: row.date ?? "",
          status,
        };
      }),
    [apiRows],
  );

  const visibleRows = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    if (normalizedSearch.length === 0) {
      return mappedRows;
    }

    return mappedRows.filter((row) =>
      [row.name, row.email, row.reviewText]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch),
    );
  }, [mappedRows, searchValue]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleSortChange = useCallback((value: ReviewListApiSortOption) => {
    setSortValue(value);
  }, []);

  return (
    <ReviewsShell>
      <ReviewsHeader
        title={reviewsWorkspace.title}
        description={reviewsWorkspace.description}
        actionLabel={reviewsWorkspace.primaryActionLabel}
      />

      <ReviewsSummaryGrid metrics={reviewSummaryMetrics} />

      <ReviewsModerationPanel controls={reviewModerationControls} />

      <div className="space-y-4">
        <ReviewsFilterTabs
          filters={reviewFilterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ReviewsToolbar
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          sortValue={sortValue}
          onSortChange={handleSortChange}
        />

        <ReviewsTable rows={visibleRows} isLoading={isLoading} />
      </div>
    </ReviewsShell>
  );
}

export default Reviews;
