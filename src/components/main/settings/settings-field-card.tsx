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
      <label htmlFor={field.id} className="text-base font-medium text-dark">
        {field.label}
      </label>
      {field.multiline ? (
        <textarea
          id={field.id}
          defaultValue={field.value}
          placeholder={`Enter ${field.label.toLowerCase()}`}
          className={cn(
            "min-h-[99px] w-full rounded-lg border border-primary bg-[#fbf8eb]/8 px-3 py-3 text-dark outline-none placeholder:text-[#98A2B3] focus:border-primary/70",
            field.valueTone === "md"
              ? "text-base font-medium"
              : "text-sm font-medium",
          )}
        />
      ) : (
        <input
          id={field.id}
          defaultValue={field.value}
          placeholder={`Enter ${field.label.toLowerCase()}`}
          className={cn(
            "min-h-[58px] w-full rounded-lg border border-primary bg-[#fbf8eb]/8 px-3 py-2 text-dark outline-none placeholder:text-[#98A2B3] focus:border-primary/70",
            field.valueTone === "md"
              ? "text-base font-medium"
              : "text-sm font-medium",
          )}
        />
      )}
    </div>
  );
}
