import { cn } from "@/lib";

interface CustomerDetailsPillFieldProps {
  label: string;
  value: string;
  pillClassName?: string;
}

export function CustomerDetailsPillField({
  label,
  value,
  pillClassName,
}: CustomerDetailsPillFieldProps) {
  return (
    <div className="space-y-2">
      <p className="text-base font-medium text-dark">{label}</p>
      <div className="flex h-[58px] items-center">
        <span
          className={cn(
            "inline-flex min-h-10 items-center justify-center rounded-[10px] bg-bg-creamy px-8 text-sm font-semibold text-dark",
            pillClassName,
          )}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
