import type { OrdersHeaderProps } from "@/interfaces/main/orders";

export function OrdersHeader({ title, description }: OrdersHeaderProps) {
  return (
    <header className="space-y-0.5">
      <h1 className="text-[28px] font-bold tracking-[-0.03em] text-dark md:text-[32px]">
        {title}
      </h1>
      <p className="text-sm font-medium text-gray md:text-base">{description}</p>
    </header>
  );
}
