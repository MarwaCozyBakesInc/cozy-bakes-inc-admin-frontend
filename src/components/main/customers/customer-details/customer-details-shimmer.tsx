import { Shimmer } from "@/components/ui/shimmer";

export function CustomerDetailsShimmer() {
  return (
    <div className="px-6 pb-6 md:px-8">
      <div className="rounded-[24px] border border-border/25 bg-white px-6 py-5">
        <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Shimmer className="h-6 w-32 rounded-lg" />
              <Shimmer className="h-[58px] w-full rounded-[8px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
