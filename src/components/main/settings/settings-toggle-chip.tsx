import { PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";

type SettingsToggleChipProps = {
  ariaLabel: string;
};

export function SettingsToggleChip({ ariaLabel }: SettingsToggleChipProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={ariaLabel}
      className="pointer-events-none absolute right-0 top-0 inline-flex size-8 items-center justify-center rounded-lg border border-primary bg-[#fbf8eb] text-primary shadow-[0_4px_14px_rgba(209,150,40,0.14)]"
    >
      <PanelLeftClose className="size-4" strokeWidth={2.2} />
    </Button>
  );
}
