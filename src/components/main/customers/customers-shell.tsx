import type { CustomersShellProps } from "@/interfaces/main/customers";

export function CustomersShell({ children }: CustomersShellProps) {
  return <section className="flex min-h-full flex-col gap-4 md:gap-6">{children}</section>;
}
