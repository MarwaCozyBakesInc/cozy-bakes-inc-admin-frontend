import type { SettingsFieldGridProps } from "@/interfaces/main/settings";
import { SettingsFieldCard } from "./settings-field-card";

export function SettingsFieldGrid({ fields }: SettingsFieldGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {fields.map((field) => (
        <SettingsFieldCard key={field.id} field={field} />
      ))}
    </div>
  );
}
