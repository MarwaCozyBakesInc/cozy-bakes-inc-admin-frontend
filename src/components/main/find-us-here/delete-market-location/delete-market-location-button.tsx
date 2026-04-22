"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteMarketLocationButtonProps {
  onClick: () => void;
}

export function DeleteMarketLocationButton({
  onClick,
}: DeleteMarketLocationButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      className="inline-flex h-10 items-center gap-2 rounded-full bg-danger-soft px-4 text-sm font-semibold text-danger transition-colors hover:bg-danger-soft/80"
      onClick={onClick}
    >
      <Trash2 className="size-4" strokeWidth={2} />
    </Button>
  );
}
