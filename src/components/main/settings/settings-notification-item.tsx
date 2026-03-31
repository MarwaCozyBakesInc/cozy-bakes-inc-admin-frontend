"use client";

import type { SettingsNotificationItemProps } from "@/interfaces/main/settings";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SettingsNotificationItem({
  preference,
  enabled,
  onToggle,
}: SettingsNotificationItemProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      role="switch"
      aria-checked={enabled}
      onClick={() => onToggle(preference.id)}
      className="flex min-h-[70px] w-full items-center justify-between rounded-[14px] bg-bg-creamy px-4 py-3 text-left transition-transform hover:scale-[0.995]"
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold tracking-[-0.01em] text-dark">
          {preference.title}
        </p>
        <p className="mt-0.5 text-xs text-muted-text">{preference.description}</p>
      </div>

      <span
        className={cn(
          "relative inline-flex h-7 w-14 shrink-0 rounded-full p-0.5 transition-colors",
          enabled ? "bg-[#d4af37]" : "bg-[#e5e7eb]",
        )}
      >
        <span
          className={cn(
            "inline-block size-6 rounded-full bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-transform",
            enabled ? "translate-x-7" : "translate-x-0",
          )}
        />
      </span>
    </Button>
  );
}
