import { salesByCategory } from "./dashboard-data";
import { DashboardSectionCard } from "./dashboard-shared";

const toneClassMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  light: "text-light-chocolate",
  taupe: "text-taupe-brown",
} as const;

const segmentColors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  light: "var(--color-light-chocolate)",
  taupe: "var(--color-taupe-brown)",
} as const;

export function DashboardCategoryChart() {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  return (
    <DashboardSectionCard
      title="Sales by Category"
      description="This month&apos;s distribution"
      className="min-h-[430px]"
    >
      <div className="relative mx-auto mt-2 flex w-full max-w-[290px] justify-center">
        <svg viewBox="0 0 180 180" className="size-[220px]" role="img" aria-label="Sales by category chart">
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="var(--color-bg-creamy)"
            strokeWidth="22"
          />

          <g transform="rotate(-90 90 90)">
            {salesByCategory.map((segment) => {
              const dash = (segment.value / 100) * circumference;
              const strokeDasharray = `${dash} ${circumference - dash}`;
              const element = (
                <circle
                  key={segment.name}
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke={segmentColors[segment.tone]}
                  strokeWidth="22"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={-cumulativeOffset}
                  strokeLinecap="butt"
                />
              );
              cumulativeOffset += dash;
              return element;
            })}
          </g>

          <circle cx="90" cy="90" r="38" className="fill-white" />
        </svg>

        <div className="absolute top-4 right-0 rounded-[16px] bg-bg-creamy px-3 py-2 text-xs shadow-[0_10px_24px_rgba(209,150,40,0.12)]">
          <p className="text-[11px] font-bold text-dark md:text-xs">Breads</p>
          <p className="mt-0.5 text-[11px] font-semibold text-primary md:text-xs">Sales: 35%</p>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {salesByCategory.map((segment) => (
          <div key={segment.name} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className={`size-2.5 rounded-full ${toneClassMap[segment.tone]} bg-current`} />
              <span className="text-xs font-medium text-taupe-brown md:text-sm">
                {segment.name}
              </span>
            </div>

            <span className="text-xs font-semibold text-gray md:text-sm">{segment.value}%</span>
          </div>
        ))}
      </div>
    </DashboardSectionCard>
  );
}
