"use client";

import { useState } from "react";
import type {
  SettingsNotificationGridProps,
  SettingsNotificationPreference,
} from "@/interfaces/main/settings";
import type { SettingsNotificationPreferenceId } from "@/types/main/settings";
import { SettingsNotificationItem } from "./settings-notification-item";

function buildInitialState(
  preferences: readonly SettingsNotificationPreference[],
) {
  return preferences.reduce<Record<SettingsNotificationPreferenceId, boolean>>(
    (accumulator, preference) => {
      accumulator[preference.id] = preference.enabled;
      return accumulator;
    },
    {
      "new-orders": false,
      "customer-messages": false,
      "low-stock-alerts": false,
      "weekly-reports": false,
    },
  );
}

export function SettingsNotificationGrid({
  preferences,
}: SettingsNotificationGridProps) {
  const [state, setState] = useState(() => buildInitialState(preferences));

  function handleToggle(id: SettingsNotificationPreferenceId) {
    setState((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {preferences.map((preference) => (
        <SettingsNotificationItem
          key={preference.id}
          preference={preference}
          enabled={state[preference.id]}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
