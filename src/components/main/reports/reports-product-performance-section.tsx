import { productPerformanceRows } from "./reports-data";
import { ReportsSection } from "./reports-section";

export function ReportsProductPerformanceSection() {
  return (
    <ReportsSection
      title="Sales Product Performance Details"
      description="Product-level sales contribution"
    >
      <div className="overflow-x-auto rounded-[12px] border border-border/10">
        <table className="min-w-[760px] w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr className="bg-[#FFF8E8] text-[#344054]">
              <th className="px-4 py-4 text-xs font-semibold">Product Name</th>
              <th className="px-4 py-4 text-xs font-semibold">Units Sold</th>
              <th className="px-4 py-4 text-xs font-semibold">Total Revenue</th>
              <th className="px-4 py-4 text-xs font-semibold">Avg. Price</th>
              <th className="px-4 py-4 text-xs font-semibold">Performance</th>
            </tr>
          </thead>
          <tbody>
            {productPerformanceRows.map((row) => (
              <tr
                key={row.productName}
                className="border-t border-border/10 bg-white"
              >
                <td className="px-4 py-4 text-sm font-medium text-muted-text">
                  {row.productName}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-muted-text">
                  {row.unitsSold}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-muted-text">
                  {row.totalRevenue}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-muted-text">
                  {row.avgPrice}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-28 rounded-full bg-[#EAECF0]">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${row.performance}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-muted-text">
                      {row.performance}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReportsSection>
  );
}
