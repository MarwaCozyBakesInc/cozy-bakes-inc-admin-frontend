import {
  revenueGrowthChart,
  revenueGrowthHighlightIndex,
  revenueGrowthPoints,
  revenueGrowthTicks,
} from "./reports-data";
import {
  buildLinePath,
  getChartPointX,
  getChartPointY,
} from "./reports-utils";

export function ReportsRevenueGrowthChart() {
  const maxValue = revenueGrowthTicks[revenueGrowthTicks.length - 1];
  const points = revenueGrowthPoints.map((point, index) => ({
    ...point,
    x: getChartPointX(
      index,
      revenueGrowthPoints.length,
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
      typeof point.forecast === "number"
        ? getChartPointY(
            point.forecast,
            maxValue,
            revenueGrowthChart.height,
            revenueGrowthChart.padding.top,
            revenueGrowthChart.padding.bottom,
          )
        : undefined,
  }));

  const highlightedPoint = points[revenueGrowthHighlightIndex];
  const actualPath = buildLinePath(points);
  const forecastPoints = points
    .filter((point) => typeof point.forecastY === "number")
    .map((point) => ({ x: point.x, y: point.forecastY as number }));
  const forecastPath = buildLinePath([
    { x: highlightedPoint.x, y: highlightedPoint.y },
    ...forecastPoints,
  ]);

  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <svg
        viewBox={`0 0 ${revenueGrowthChart.width} ${revenueGrowthChart.height}`}
        className="h-[240px] min-w-[560px] w-full sm:h-[280px] sm:min-w-[720px] md:h-[320px] md:min-w-[920px]"
        role="img"
        aria-label="Revenue growth and forecast analytics chart"
      >
        {revenueGrowthTicks.map((tick) => {
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
                x2={revenueGrowthChart.width - revenueGrowthChart.padding.right}
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
              y2={revenueGrowthChart.height - revenueGrowthChart.padding.bottom}
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

        <path
          d={forecastPath}
          fill="none"
          stroke="#F25B5B"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g transform={`translate(${highlightedPoint.x - 34} ${highlightedPoint.y - 84})`}>
          <rect width="112" height="64" rx="12" fill="#F7E6C0" />
          <text x="12" y="20" className="fill-[#615E59] text-[11px] font-bold">
            Feb 12
          </text>
          <text x="12" y="36" className="fill-[#F25B5B] text-[11px] font-semibold">
            Forecast : 9500
          </text>
          <text x="12" y="52" className="fill-[#D19628] text-[11px] font-semibold">
            Revenue : $ 1,284
          </text>
        </g>

        <g transform={`translate(${revenueGrowthChart.width / 2 - 90} ${revenueGrowthChart.height - 2})`}>
          <circle cx="0" cy="-8" r="4" fill="#F25B5B" />
          <text x="10" y="-4" className="fill-[#F25B5B] text-[11px] font-semibold">
            Forecast
          </text>
          <circle cx="84" cy="-8" r="4" fill="#D4AF37" />
          <text x="94" y="-4" className="fill-[#D4AF37] text-[11px] font-semibold">
            Revenue ($)
          </text>
        </g>
      </svg>
    </div>
  );
}
