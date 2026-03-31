import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReportsHeader() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-[24px] font-bold tracking-[0.016em] text-dark">
          Reports &amp; Analytics
        </h1>
        <p className="mt-1 text-sm font-medium text-gray">
          Track your bakery&apos;s performance and insights
        </p>
      </div>

      <Button
        type="button"
        variant="ghost"
        className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-full bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-secondary"
      >
        <Download className="size-4" strokeWidth={2.2} />
        Export Report
      </Button>
    </header>
  );
}
