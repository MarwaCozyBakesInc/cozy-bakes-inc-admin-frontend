import type { ContactUsActionButtonProps } from "@/interfaces/main/contact-us";
import { Button } from "@/components/ui/button";

export function ContactUsActionButton({
  children,
}: ContactUsActionButtonProps) {
  return (
    <Button
      variant="outline"
      className="h-10 rounded-full border-primary/15 bg-[#fbf8eb80] px-5 text-sm font-semibold text-primary hover:bg-[#fbf8eb] hover:text-primary"
    >
      {children}
    </Button>
  );
}
