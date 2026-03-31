import type { SettingsShellProps } from "@/interfaces/main/settings";

export function SettingsShell({ children }: SettingsShellProps) {
  return <section className="flex min-h-full flex-col gap-4 md:gap-6">{children}</section>;
}
