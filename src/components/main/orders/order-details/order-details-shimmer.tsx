import { Shimmer } from "@/components/ui/shimmer";

export function OrderDetailsShimmer() {
  return (
    <div className="space-y-6 px-6 py-6 md:px-8">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)]">
        <div className="space-y-4">
          <Shimmer className="h-20 rounded-[24px]" />
          <Shimmer className="h-32 rounded-[24px]" />
          <Shimmer className="h-72 rounded-[24px]" />
        </div>
        <Shimmer className="h-[560px] rounded-[24px]" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <Shimmer className="h-14 w-full rounded-[8px] md:w-[202px]" />
        <div className="flex flex-col gap-4 md:flex-row">
          <Shimmer className="h-14 w-full rounded-[8px] md:w-[202px]" />
          <Shimmer className="h-14 w-full rounded-[8px] md:w-[202px]" />
        </div>
      </div>
    </div>
  );
}
