import type { ReviewsShellProps } from "@/interfaces/main/reviews";

export function ReviewsShell({ children }: ReviewsShellProps) {
  return <section className="flex min-h-full flex-col gap-4 md:gap-6">{children}</section>;
}
