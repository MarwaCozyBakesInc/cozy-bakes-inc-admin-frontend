interface OrderDetailsHeaderProps {
  orderNumber?: string | null;
}

export function OrderDetailsHeader({ orderNumber }: OrderDetailsHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-[26px] font-bold tracking-[-0.03em] text-dark">
        Order Details
      </h2>
      <p className="text-lg font-bold text-primary">#{orderNumber ?? "--"}</p>
    </div>
  );
}
