import { Button } from "@/components/ui/button";

type OrdersShowMoreButtonProps = {
  isFetchingNextPage: boolean;
  onClick: () => void;
};

export function OrdersShowMoreButton({
  isFetchingNextPage,
  onClick,
}: OrdersShowMoreButtonProps) {
  return (
    <div className="flex justify-center pt-2">
      <Button
        type="button"
        onClick={onClick}
        disabled={isFetchingNextPage}
        className="rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90"
      >
        {isFetchingNextPage ? "Loading orders..." : "Show More"}
      </Button>
    </div>
  );
}
