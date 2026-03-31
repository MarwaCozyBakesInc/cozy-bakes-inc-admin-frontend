import { settingsScreen, settingsSections } from "@/data/main/settings";
import { SettingsCanvas } from "./settings-canvas";
import { SettingsHeader } from "./settings-header";
import { SettingsShell } from "./settings-shell";

function Settings() {
  return (
    <SettingsShell>
      <SettingsHeader
        title={settingsScreen.title}
        description={settingsScreen.description}
      />
      <SettingsCanvas
        ariaLabel={settingsScreen.ariaLabel}
        sections={settingsSections}
      />
    </SettingsShell>
  );
}

export default Settings;
