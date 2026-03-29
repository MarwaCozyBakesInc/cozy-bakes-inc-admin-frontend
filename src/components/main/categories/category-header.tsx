import { PencilLine, Plus, Trash2 } from "lucide-react";
import type { CategoryHeaderProps } from "@/interfaces/main/categories";

export function CategoryHeader({ title, description }: CategoryHeaderProps) {
  return (
    <header className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
      <div className="space-y-0.5">
        <h1 className="text-[28px] font-bold tracking-[-0.03em] text-dark md:text-[32px]">
          {title}
        </h1>
        <p className="text-sm font-medium text-gray md:text-base">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Plus className="size-4" strokeWidth={2.4} />
          <span>Add Sub Category</span>
        </button>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-primary/15 bg-bg-creamy/60 px-5 text-sm font-semibold text-primary transition-colors hover:bg-bg-creamy"
        >
          <PencilLine className="size-4" strokeWidth={2.2} />
          <span>Edit This Category</span>
        </button>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-primary/15 bg-bg-creamy/60 px-5 text-sm font-semibold text-primary transition-colors hover:bg-bg-creamy"
        >
          <PencilLine className="size-4" strokeWidth={2.2} />
          <span>Edit Hero Section</span>
        </button>

        <button
          type="button"
          aria-label="Delete category"
          className="inline-flex size-10 items-center justify-center rounded-full bg-danger-soft text-danger transition-colors hover:bg-danger-soft/80"
        >
          <Trash2 className="size-4" strokeWidth={2.1} />
        </button>
      </div>
    </header>
  );
}
