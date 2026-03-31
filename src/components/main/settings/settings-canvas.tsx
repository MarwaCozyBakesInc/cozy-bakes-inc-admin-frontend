import type { SettingsCanvasProps } from "@/interfaces/main/settings";
import { SettingsSectionCard } from "./settings-section-card";

export function SettingsCanvas({ ariaLabel, sections }: SettingsCanvasProps) {
  return (
    <section aria-label={ariaLabel} className="space-y-4">
      {sections.map((section) => (
        <SettingsSectionCard key={section.id} section={section} />
      ))}
    </section>
  );
}
