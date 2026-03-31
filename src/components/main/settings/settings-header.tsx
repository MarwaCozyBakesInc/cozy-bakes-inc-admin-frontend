import type { SettingsHeaderProps } from "@/interfaces/main/settings";

export function SettingsHeader({ title, description }: SettingsHeaderProps) {
  return (
    <header>
      <h1 className="text-[24px] font-bold tracking-[0.016em] text-dark">
        {title}
      </h1>
      <p className="mt-0.5 text-sm font-medium text-gray">{description}</p>
    </header>
  );
}
