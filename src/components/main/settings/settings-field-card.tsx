import type { SettingsFieldCardProps } from "@/interfaces/main/settings";
import { cn } from "@/lib/utils";

export function SettingsFieldCard({ field }: SettingsFieldCardProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        field.layout === "full" ? "md:col-span-2" : "md:col-span-1",
      )}
    >
      <p className="text-base font-medium text-dark">{field.label}</p>
      <div
        className={cn(
          "rounded-lg border border-primary bg-[#fbf8eb]/8 px-3 text-dark",
          field.multiline
            ? "min-h-[99px] py-3"
            : "flex min-h-[58px] items-center py-2",
          field.valueTone === "md" ? "text-base font-medium" : "text-sm font-medium",
        )}
      >
        <p>{field.value}</p>
      </div>
    </div>
  );
}
