"use client";

import { useMemo, useState } from "react";
import {
  bakeryCategoryDetails,
  bakerySubCategories,
  categoryPagination,
  getBakerySubCategoryBySlug,
} from "@/data/main/categories";
import type { CategoryViewMode } from "@/types/main/categories";
import { CategoriesPagination } from "./categories-pagination";
import { CategoryHeader } from "./category-header";
import { CategorySearchToolbar } from "./category-search-toolbar";
import { CategoryTable } from "./category-table";
import { SubCategoryCardGrid } from "./subcategory-card-grid";

type CategoriesProps = {
  activeSlug?: string;
};

function Categories({ activeSlug }: CategoriesProps) {
  const [searchValue, setSearchValue] = useState("");
  const [viewMode, setViewMode] = useState<CategoryViewMode>("table");
  const selectedCategory = activeSlug
    ? getBakerySubCategoryBySlug(activeSlug)
    : undefined;

  const visibleItems = useMemo(() => {
    if (selectedCategory) {
      return [selectedCategory];
    }

    const normalizedSearch = searchValue.trim().toLowerCase();

    if (!normalizedSearch) {
      return bakerySubCategories;
    }

    return bakerySubCategories.filter((item) => {
      return (
        item.id.toLowerCase().includes(normalizedSearch) ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [searchValue, selectedCategory]);

  const title = selectedCategory?.name ?? bakeryCategoryDetails.title;
  const description =
    selectedCategory?.description ?? bakeryCategoryDetails.description;

  return (
    <section className="space-y-4 md:space-y-6">
      <CategoryHeader title={title} description={description} />

      {!selectedCategory ? (
        <CategorySearchToolbar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      ) : null}

      {viewMode === "table" ? (
        <CategoryTable items={visibleItems} />
      ) : (
        <SubCategoryCardGrid items={visibleItems} />
      )}

      {!selectedCategory ? (
        <div className="flex justify-center pt-2">
          <CategoriesPagination currentPage={1} pages={categoryPagination} />
        </div>
      ) : null}
    </section>
  );
}

export default Categories;
