import type { ReactNode } from "react";

interface OrderDetailsInfoFieldProps {
  label: string;
  value: string;
  prefix?: ReactNode;
}

export function OrderDetailsInfoField({
  label,
  value,
  prefix,
}: OrderDetailsInfoFieldProps) {
  return (
    <div className="space-y-2">
      <p className="text-base font-medium text-dark">{label}</p>
      <div className="flex h-14 items-center gap-3 rounded-[10px] border border-primary/75 bg-primary/5 px-3">
        {prefix ? <div className="shrink-0">{prefix}</div> : null}
        <p className="min-w-0 truncate text-sm font-medium text-dark">{value}</p>
      </div>
    </div>
  );
}
