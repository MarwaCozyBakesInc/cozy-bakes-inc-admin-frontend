import { buildDonutGradient } from "./reports-utils";

type ReportsDonutChartProps = {
  items: Array<{ value: number; color: string }>;
  innerLabel?: string;
  size?: number;
};

export function ReportsDonutChart({
  items,
  innerLabel,
  size = 152,
}: ReportsDonutChartProps) {
  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: buildDonutGradient(items),
      }}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-border/20 bg-white"
        style={{
          width: size * 0.56,
          height: size * 0.56,
          transform: "translate(-50%, -50%)",
        }}
      />
      {innerLabel ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-[#F7E6C0] px-2 py-1 text-[10px] font-semibold text-[#615E59] shadow-sm">
          {innerLabel}
        </div>
      ) : null}
    </div>
  );
}
