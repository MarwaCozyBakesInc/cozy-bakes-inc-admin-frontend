import Image from "next/image";
import { sidebarCompany } from "@/data";
import { cn } from "@/lib/utils";

type SidebarBrandProps = {
  compact?: boolean;
};

export function SidebarBrand({ compact = false }: SidebarBrandProps) {
  return (
    <div
      className={cn(
        "flex h-[70px] items-center border-b border-primary/15",
        compact ? "justify-center px-4" : "px-6",
      )}
    >
      <div className="flex items-center gap-2">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={sidebarCompany.logoSrc}
            alt={sidebarCompany.name}
            fill
            className="object-cover"
          />
        </div>

        <div className={cn("min-w-0", compact ? "hidden" : "block")}>
          <p className="truncate text-[15px] font-bold text-light-chocolate">
            {sidebarCompany.name}
          </p>
          <p className="text-xs font-medium italic text-[#bb4d00]">
            {sidebarCompany.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
