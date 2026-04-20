import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import Modal from "@/components/ui/modal";
import type { ReviewRow } from "@/interfaces/main/reviews";

interface ReviewsDeleteModalProps {
  review: ReviewRow | null;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ReviewsDeleteModal({
  review,
  isLoading,
  onClose,
  onConfirm,
}: ReviewsDeleteModalProps) {
  return (
    <Modal
      open={Boolean(review)}
      onClose={onClose}
      title="Delete review"
      contentClassName="md:max-w-lg overflow-hidden rounded-[28px] border border-primary/10 bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-0 shadow-[0_28px_90px_rgba(61,44,30,0.18)] [&_[data-slot=dialog-header]]:gap-3 [&_[data-slot=dialog-header]]:border-b [&_[data-slot=dialog-header]]:border-border/10 [&_[data-slot=dialog-header]]:px-6 [&_[data-slot=dialog-header]]:pb-5 [&_[data-slot=dialog-header]]:pt-6"
      titleClassName="pr-12 text-xl font-bold tracking-[-0.04em] text-chocolate md:text-3xl"
    >
      {review ? (
        <div className="px-6 py-6">
          <div className="rounded-[22px] border border-[#fda29b]/30 bg-[#fff5f4] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
            <p className="text-base font-medium leading-7 text-dark">
              Are you sure you want to delete{" "}
              <span className="font-bold text-chocolate">{review.name}</span>
              {"'s review?"}
            </p>

            <div className="mt-4 rounded-[18px] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(61,44,30,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
                Review Preview
              </p>
              <p className="mt-2 line-clamp-3 text-sm font-medium leading-6 text-dark">
                {review.reviewText || "This review has no text content."}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-full border-border/20 bg-white px-6 text-sm font-semibold text-dark hover:bg-bg-creamy/50"
              disabled={isLoading}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              className="h-12 rounded-full px-6 text-sm font-semibold"
              disabled={isLoading}
              onClick={onConfirm}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader borderColor="#f04438" />
                  Deleting...
                </span>
              ) : (
                "Delete Review"
              )}
            </Button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
