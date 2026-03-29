import type { ReactNode } from "react";
import type {
  CategoryActionTone,
  CategoryViewMode,
} from "@/types/main/categories";

export interface BakeryCategoryDetails {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
}

export interface BakerySubCategoryRecord {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage: string;
}

export interface CategoryHeaderProps {
  title: string;
  description: string;
}

export interface CategorySearchToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  viewMode: CategoryViewMode;
  onViewModeChange: (value: CategoryViewMode) => void;
}

export interface CategoryViewToggleOption {
  value: CategoryViewMode;
  label: string;
  icon: ReactNode;
}

export interface CategoryTableProps {
  items: BakerySubCategoryRecord[];
}

export interface SubCategoryCardGridProps {
  items: BakerySubCategoryRecord[];
}

export interface CategoryActionButtonProps {
  label: string;
  tone: CategoryActionTone;
  icon: ReactNode;
  href?: string;
}

export interface CategoriesPaginationProps {
  pages: number[];
  currentPage: number;
}
