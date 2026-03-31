import {
  salesOverviewChart,
  salesOverviewHighlightIndex,
  salesOverviewPoints,
  salesOverviewTicks,
} from "./reports-data";
import {
  buildLinePath,
  getChartPointX,
  getChartPointY,
} from "./reports-utils";

export function ReportsSalesOverviewChart() {
  const points = salesOverviewPoints.map((point, index) => ({
    ...point,
    x: getChartPointX(
      index,
      salesOverviewPoints.length,
      salesOverviewChart.width,
      salesOverviewChart.padding.left,
      salesOverviewChart.padding.right,
    ),
    y: getChartPointY(
      point.value,
      salesOverviewTicks[salesOverviewTicks.length - 1],
      salesOverviewChart.height,
      salesOverviewChart.padding.top,
      salesOverviewChart.padding.bottom,
    ),
  }));

  const highlightedPoint = points[salesOverviewHighlightIndex];
  const path = buildLinePath(points);

  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <svg
        viewBox={`0 0 ${salesOverviewChart.width} ${salesOverviewChart.height}`}
        className="h-[220px] min-w-[360px] w-full sm:h-[250px] sm:min-w-[420px] md:h-[280px] md:min-w-[520px]"
        role="img"
        aria-label="Sales overview chart"
      >
        {salesOverviewTicks.map((tick) => {
          const y = getChartPointY(
            tick,
            salesOverviewTicks[salesOverviewTicks.length - 1],
            salesOverviewChart.height,
            salesOverviewChart.padding.top,
            salesOverviewChart.padding.bottom,
          );

          return (
            <g key={tick}>
              <line
                x1={salesOverviewChart.padding.left}
                y1={y}
                x2={salesOverviewChart.width - salesOverviewChart.padding.right}
                y2={y}
                stroke="rgba(152,162,179,0.35)"
                strokeDasharray="4 5"
              />
              <text
                x={salesOverviewChart.padding.left - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-[#98A2B3] text-[11px] font-semibold"
              >
                {tick}
              </text>
            </g>
          );
        })}

        <line
          x1={highlightedPoint.x}
          y1={salesOverviewChart.padding.top}
          x2={highlightedPoint.x}
          y2={salesOverviewChart.height - salesOverviewChart.padding.bottom}
          stroke="rgba(209,150,40,0.72)"
          strokeDasharray="4 5"
        />

        <path
          d={path}
          fill="none"
          stroke="#D19628"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="4.5" fill="#615E59" />
            <circle
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="#D19628"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <text
              x={point.x}
              y={salesOverviewChart.height - 10}
              textAnchor="middle"
              className="fill-[#98A2B3] text-[11px] font-semibold"
            >
              {point.label}
            </text>
          </g>
        ))}

        <g transform={`translate(${highlightedPoint.x - 58} ${highlightedPoint.y - 70})`}>
          <rect width="118" height="48" rx="12" fill="#F7E6C0" />
          <text x="12" y="20" className="fill-[#615E59] text-[11px] font-bold">
            Wednesday
          </text>
          <text x="12" y="36" className="fill-[#D19628] text-[11px] font-semibold">
            Revenue : $ 5,124
          </text>
        </g>
      </svg>
    </div>
  );
}
