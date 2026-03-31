import { ChevronDown, Download, Search } from "lucide-react";
import type { CustomersToolbarProps } from "@/interfaces/main/customers";
import { Button } from "@/components/ui/button";

export function CustomersToolbar({
  searchValue,
  onSearchChange,
  sortLabel,
  exportLabel,
}: CustomersToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/10 bg-bg-creamy/32 p-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
        <label className="flex h-[52px] w-full items-center gap-3 rounded-full border border-[#d0d5dd] bg-[color-mix(in_srgb,var(--color-bg-creamy)_14%,transparent)] px-6 text-sm text-gray transition-colors focus-within:border-primary/60 xl:w-[455px]">
          <Search className="size-5 text-primary" strokeWidth={2.1} />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name ..."
            className="w-full bg-transparent text-dark outline-none placeholder:text-gray"
          />
        </label>

        <Button
          type="button"
          variant="ghost"
          className="inline-flex h-[52px] items-center justify-between rounded-full border border-primary bg-bg-creamy px-6 text-sm font-medium text-dark xl:w-[176px]"
        >
          {sortLabel}
          <ChevronDown className="size-4 text-primary" strokeWidth={2.1} />
        </Button>
      </div>

      <Button
        type="button"
        variant="ghost"
        className="inline-flex h-[52px] items-center gap-2 self-start rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Download className="size-4" strokeWidth={2.2} />
        {exportLabel}
      </Button>
    </div>
  );
}
