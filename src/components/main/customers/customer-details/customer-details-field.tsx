interface CustomerDetailsFieldProps {
  label: string;
  value: string;
}

export function CustomerDetailsField({
  label,
  value,
}: CustomerDetailsFieldProps) {
  return (
    <div className="space-y-2">
      <p className="text-base font-medium text-dark">{label}</p>
      <div className="flex h-[58px] items-center rounded-[8px] border border-primary bg-primary/5 px-3">
        <p className="truncate text-sm font-medium text-dark">{value}</p>
      </div>
    </div>
  );
}
