import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

type SettingsSectionActionProps = {
  label: string;
};

export function SettingsSectionAction({ label }: SettingsSectionActionProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary/15 bg-[#fbf8eb]/70 px-5 text-sm font-semibold tracking-[-0.01em] text-primary transition-colors hover:bg-[#fbf8eb]"
    >
      <PencilLine className="size-4" strokeWidth={2} />
      <span>{label}</span>
    </Button>
  );
}
