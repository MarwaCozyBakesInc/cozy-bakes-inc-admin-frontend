import type { ReportRange } from "@/types/main/reports";
import type { RevenueGrowthChartData } from "@/interfaces/main/reports";
import { Shimmer } from "@/components/ui/shimmer";
import {
  revenueGrowthChart,
  revenueGrowthHighlightIndex,
  revenueGrowthPoints,
  revenueGrowthTicks,
} from "./reports-data";
import { buildLinePath, getChartPointX, getChartPointY } from "./reports-utils";

interface ReportsRevenueGrowthChartProps {
  period?: ReportRange;
  chartData?: RevenueGrowthChartData;
  isLoading?: boolean;
}

function getChartTicks(maxValue: number) {
  if (maxValue <= 0) {
    return [0, 1, 2, 3, 4];
  }

  const step = Math.ceil(maxValue / 4 / 1000) * 1000 || Math.ceil(maxValue / 4);
  return [0, step, step * 2, step * 3, step * 4];
}

export function ReportsRevenueGrowthChart({
  period = "daily",
  chartData,
  isLoading = false,
}: ReportsRevenueGrowthChartProps) {
  if (isLoading) {
    return (
      <Shimmer className="h-[240px] w-full rounded-2xl sm:h-[280px] md:h-[320px]" />
    );
  }

  const hasChartData =
    chartData !== undefined &&
    chartData.labels.length > 0 &&
    chartData.labels.length === chartData.datasets.revenue.length &&
    chartData.labels.length === chartData.datasets.forecast.length &&
    chartData.labels.length === chartData.datasets.orders.length;

  const resolvedPoints = hasChartData
    ? chartData.labels.map((label, index) => ({
        label,
        revenue: chartData.datasets.revenue[index] ?? 0,
        forecast:
          chartData.datasets.forecast[index] !== undefined
            ? chartData.datasets.forecast[index]
            : undefined,
      }))
    : revenueGrowthPoints;

  const hasNonZeroValues = resolvedPoints.some(
    (point) =>
      point.revenue > 0 ||
      (typeof point.forecast === "number" && point.forecast > 0),
  );

  if (!hasChartData || !hasNonZeroValues) {
    return (
      <div className="flex h-[240px] w-full items-center justify-center rounded-2xl border border-dashed border-[#D4AF37]/25 bg-[#FFF7E7] px-4 text-center text-sm text-[#6B5B4C] sm:h-[280px] md:h-[320px]">
        <div className="max-w-sm space-y-2">
          <p className="text-base font-semibold text-[#2C4B7A]">
            No revenue data available for this period.
          </p>
          <p className="text-xs text-[#6B5B4C] opacity-80">
            Try a different time range or check back later when sales have been
            recorded.
          </p>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(
    revenueGrowthTicks[revenueGrowthTicks.length - 1],
    ...resolvedPoints.map((point) => point.revenue),
    ...resolvedPoints.map((point) => point.forecast ?? 0),
  );
  const chartTicks = getChartTicks(maxValue);

  const points = resolvedPoints.map((point, index) => ({
    ...point,
    x: getChartPointX(
      index,
      resolvedPoints.length,
      revenueGrowthChart.width,
      revenueGrowthChart.padding.left,
      revenueGrowthChart.padding.right,
    ),
    y: getChartPointY(
      point.revenue,
      maxValue,
      revenueGrowthChart.height,
      revenueGrowthChart.padding.top,
      revenueGrowthChart.padding.bottom,
    ),
    forecastY:
      typeof point.forecast === "number" && point.forecast > 0
        ? getChartPointY(
            point.forecast,
            maxValue,
            revenueGrowthChart.height,
            revenueGrowthChart.padding.top,
            revenueGrowthChart.padding.bottom,
          )
        : undefined,
  }));

  const highlightedPoint =
    points[Math.min(revenueGrowthHighlightIndex, points.length - 1)];
  const actualPath = buildLinePath(points);
  const forecastPoints = points
    .filter((point) => typeof point.forecastY === "number")
    .map((point) => ({ x: point.x, y: point.forecastY as number }));
  const forecastPath = buildLinePath([
    { x: highlightedPoint.x, y: highlightedPoint.y },
    ...forecastPoints,
  ]);
  const tooltipX = Math.min(
    Math.max(highlightedPoint.x - 34, 0),
    revenueGrowthChart.width - 112,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${revenueGrowthChart.width} ${revenueGrowthChart.height}`}
          className="h-[240px] w-full sm:h-[280px] md:h-[320px]"
          role="img"
          aria-label={`Revenue growth and forecast analytics chart for ${period}`}
        >
          {chartTicks.map((tick) => {
            const y = getChartPointY(
              tick,
              maxValue,
              revenueGrowthChart.height,
              revenueGrowthChart.padding.top,
              revenueGrowthChart.padding.bottom,
            );

            return (
              <g key={tick}>
                <line
                  x1={revenueGrowthChart.padding.left}
                  y1={y}
                  x2={
                    revenueGrowthChart.width - revenueGrowthChart.padding.right
                  }
                  y2={y}
                  stroke="rgba(152,162,179,0.3)"
                  strokeDasharray="4 5"
                />
                <text
                  x={revenueGrowthChart.padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-[#98A2B3] text-[11px] font-semibold"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {points.map((point) => (
            <g key={point.label}>
              <line
                x1={point.x}
                y1={revenueGrowthChart.padding.top}
                x2={point.x}
                y2={
                  revenueGrowthChart.height - revenueGrowthChart.padding.bottom
                }
                stroke="rgba(152,162,179,0.22)"
                strokeDasharray="4 5"
              />
              <text
                x={point.x}
                y={revenueGrowthChart.height - 12}
                textAnchor="middle"
                className="fill-[#98A2B3] text-[11px] font-medium"
              >
                {point.label}
              </text>
            </g>
          ))}

          <line
            x1={highlightedPoint.x}
            y1={revenueGrowthChart.padding.top}
            x2={highlightedPoint.x}
            y2={revenueGrowthChart.height - revenueGrowthChart.padding.bottom}
            stroke="rgba(209,150,40,0.72)"
            strokeDasharray="4 4"
          />

          <path
            d={actualPath}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {forecastPoints.length > 0 ? (
            <path
              d={forecastPath}
              fill="none"
              stroke="#F25B5B"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}

          <g transform={`translate(${tooltipX} ${highlightedPoint.y - 84})`}>
            <rect width="112" height="64" rx="12" fill="#F7E6C0" />
            <text
              x="12"
              y="20"
              className="fill-[#615E59] text-[11px] font-bold"
            >
              {highlightedPoint.label}
            </text>
            <text
              x="12"
              y="36"
              className="fill-[#F25B5B] text-[11px] font-semibold"
            >
              Forecast : {highlightedPoint.forecast ?? "-"}
            </text>
            <text
              x="12"
              y="52"
              className="fill-[#D19628] text-[11px] font-semibold"
            >
              Revenue : $ {highlightedPoint.revenue}
            </text>
          </g>
        </svg>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-[#2C4B7A] sm:justify-start">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E7] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F25B5B]" />
          <span>Forecast</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F8F2D8] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
          <span>Revenue ($)</span>
        </div>
      </div>
    </div>
  );
}
