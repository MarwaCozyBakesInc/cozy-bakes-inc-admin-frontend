import { weeklySales } from "./dashboard-data";
import { DashboardSectionCard } from "./dashboard-shared";

const chartHeight = 280;
const chartWidth = 560;
const padding = { top: 22, right: 18, bottom: 42, left: 44 };
const maxValue = 6000;
const highlightedIndex = 2;
const yTicks = [0, 1500, 3000, 4500, 6000];

function getPointX(index: number) {
  const usableWidth = chartWidth - padding.left - padding.right;
  return padding.left + (usableWidth / (weeklySales.length - 1)) * index;
}

function getPointY(value: number) {
  const usableHeight = chartHeight - padding.top - padding.bottom;
  return padding.top + usableHeight - (value / maxValue) * usableHeight;
}

const chartPoints = weeklySales.map((item, index) => ({
  ...item,
  x: getPointX(index),
  y: getPointY(item.value),
}));

const chartPath = chartPoints
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
  .join(" ");

export function DashboardSalesOverview() {
  const highlightedPoint = chartPoints[highlightedIndex];

  return (
    <DashboardSectionCard
      title="Sales Overview"
      description="Daily performance this week"
      className="min-h-[430px]"
    >
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 rounded-full bg-bg-creamy px-3 py-1.5 text-xs font-semibold text-chocolate">
          <span className="size-2 rounded-full bg-primary" />
          Revenue
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="h-[300px] min-w-[520px] w-full"
          role="img"
          aria-label="Weekly sales overview chart"
        >
          {yTicks.map((tick) => {
            const y = getPointY(tick);
            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  className="stroke-border/60"
                  strokeDasharray="4 5"
                />
                <text
                  x={padding.left - 14}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-gray text-[11px] font-semibold"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          <line
            x1={highlightedPoint.x}
            y1={highlightedPoint.y}
            x2={highlightedPoint.x}
            y2={chartHeight - padding.bottom}
            className="stroke-primary/60"
            strokeDasharray="4 5"
          />

          <path
            d={chartPath}
            fill="none"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {chartPoints.map((point) => (
            <g key={point.day}>
              <circle
                cx={point.x}
                cy={point.y}
                r="5.5"
                className="fill-primary stroke-white"
                strokeWidth="3"
              />
              <text
                x={point.x}
                y={chartHeight - 12}
                textAnchor="middle"
                className="fill-gray text-[11px] font-semibold"
              >
                {point.day}
              </text>
            </g>
          ))}

          <g transform={`translate(${highlightedPoint.x - 58} ${highlightedPoint.y - 66})`}>
            <rect
              width="116"
              height="48"
              rx="14"
              className="fill-bg-creamy stroke-primary/15"
              strokeWidth="1"
            />
            <text x="12" y="20" className="fill-dark text-[11px] font-bold">
              Wednesday
            </text>
            <text x="12" y="36" className="fill-primary text-[11px] font-semibold">
              Revenue: $1,284
            </text>
          </g>
        </svg>
      </div>
    </DashboardSectionCard>
  );
}
