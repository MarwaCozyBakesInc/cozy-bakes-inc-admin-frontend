import type { PendingOrderStatusUpdate } from "@/interfaces/main/orders";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";

interface OrdersStatusChangeModalProps {
  pendingUpdate: PendingOrderStatusUpdate | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function OrdersStatusChangeModal({
  pendingUpdate,
  onClose,
  onConfirm,
}: OrdersStatusChangeModalProps) {
  return (
    <Modal
      open={Boolean(pendingUpdate)}
      onClose={onClose}
      title="Update order status"
      contentClassName="md:max-w-lg overflow-hidden rounded-[28px] border border-primary/10 bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-0 shadow-[0_28px_90px_rgba(61,44,30,0.18)] [&_[data-slot=dialog-header]]:gap-3 [&_[data-slot=dialog-header]]:border-b [&_[data-slot=dialog-header]]:border-border/10 [&_[data-slot=dialog-header]]:px-6 [&_[data-slot=dialog-header]]:pb-5 [&_[data-slot=dialog-header]]:pt-6"
      titleClassName="pr-12 text-xl md:text-3xl font-bold tracking-[-0.04em] text-chocolate"
      closeButtonClassname="right-6 top-6 size-9 border border-primary/25 bg-white text-primary shadow-[0_10px_24px_rgba(209,150,40,0.14)]"
    >
      {pendingUpdate ? (
        <div className="px-6 py-6">
          <div className="rounded-[22px] border border-primary/10 bg-bg-creamy/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
            <p className="text-base font-medium leading-7 text-dark">
              Are you sure you want to update{" "}
              <span className="font-bold text-chocolate">
                {pendingUpdate.customer}
              </span>
              {"'s order to "}
              <span className="font-bold text-primary">
                {pendingUpdate.nextStatus}
              </span>
              ?
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[18px] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(61,44,30,0.06)]">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
                Order ID
              </span>
              <span className="text-base font-bold text-chocolate">
                {pendingUpdate.orderId}
              </span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-border sm:block" />
              <span className="text-sm font-medium text-muted-text">
                New status:
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                {pendingUpdate.nextStatus}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-full border-border/20 bg-white px-6 text-sm font-semibold text-dark hover:bg-bg-creamy/50"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(209,150,40,0.28)] hover:bg-primary/90"
              onClick={onConfirm}
            >
              Update Status
            </Button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
