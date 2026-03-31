export function getChartPointX(
  index: number,
  total: number,
  width: number,
  left: number,
  right: number,
) {
  const usableWidth = width - left - right;
  return left + (usableWidth / (total - 1)) * index;
}

export function getChartPointY(
  value: number,
  maxValue: number,
  height: number,
  top: number,
  bottom: number,
) {
  const usableHeight = height - top - bottom;
  return top + usableHeight - (value / maxValue) * usableHeight;
}

export function buildLinePath(points: Array<{ x: number; y: number }>) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

export function buildDonutGradient(items: Array<{ value: number; color: string }>) {
  let current = 0;

  return `conic-gradient(${items
    .map((item) => {
      const start = current;
      const end = current + item.value;
      current = end;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(", ")})`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
