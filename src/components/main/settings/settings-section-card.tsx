import type { SettingsSectionCardProps } from "@/interfaces/main/settings";
import { SettingsFieldGrid } from "./settings-field-grid";
import { SettingsNotificationGrid } from "./settings-notification-grid";
import { SettingsSectionHeader } from "./settings-section-header";

export function SettingsSectionCard({ section }: SettingsSectionCardProps) {
  return (
    <article className="rounded-2xl border-2 border-white/15 bg-[rgba(250,248,243,0.32)] p-4 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
      <div className="space-y-4">
        <SettingsSectionHeader
          icon={section.icon}
          title={section.title}
          description={section.description}
          action={section.action}
        />

        {section.kind === "fields" ? (
          <SettingsFieldGrid fields={section.fields} />
        ) : null}

        {section.kind === "notifications" ? (
          <SettingsNotificationGrid preferences={section.preferences} />
        ) : null}
      </div>
    </article>
  );
}
