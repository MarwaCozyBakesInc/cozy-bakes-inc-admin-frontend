import { ChevronDown, SlidersHorizontal } from "lucide-react";
import type {
  ReviewSettings,
  ReviewsModerationPanelProps,
} from "@/interfaces/main/reviews";
import { cn } from "@/lib/utils";
import { Shimmer } from "@/components/ui/shimmer";
import { useReviewSettings } from "@/hooks/api";

function ReviewsModerationToggle({ enabled }: { enabled: boolean }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-7 w-14 shrink-0 rounded-full p-0.5 transition-colors duration-300",
        enabled ? "bg-primary" : "bg-[#dfe5ef]",
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "inline-block h-6 w-6 rounded-full bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out",
          enabled ? "translate-x-7" : "translate-x-0",
        )}
      />
    </span>
  );
}

function buildReviewSettingsControls(
  controls: ReviewsModerationPanelProps["controls"],
  settings: ReviewSettings,
) {
  const isEnabled = (value: string | number) => String(value) === "1";

  return controls.map((control) => {
    if (control.type === "toggle") {
      if (control.id === "auto-approve") {
        return { ...control, enabled: isEnabled(settings.auto_approve) };
      }

      if (control.id === "website-section") {
        return { ...control, enabled: isEnabled(settings.enable_reviews) };
      }

      if (control.id === "homepage-five-star") {
        return { ...control, enabled: isEnabled(settings.show_only_5_star) };
      }
    }

    if (control.type === "select") {
      return {
        ...control,
        value: `${String(settings.minimum_rating)} star`,
      };
    }

    return control;
  });
}

export function ReviewsModerationPanel({
  controls,
}: ReviewsModerationPanelProps) {
  const { data, isLoading } = useReviewSettings();
  const reviewSettings = data?.data?.settings;

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-border/15 bg-background/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-6">
        <div className="mb-5 flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <Shimmer className="size-5 rounded-xl" />
          </div>

          <div className="flex-1 space-y-3">
            <Shimmer className="h-5 w-52 rounded-md" />
            <Shimmer className="h-4 w-72 rounded-md" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {controls.map((control) => (
            <article
              key={control.id}
              className="rounded-[24px] border border-border/10 bg-white/80 px-4 py-4 shadow-sm"
            >
              <div className="space-y-2">
                <Shimmer className="h-4 w-32 rounded-md" />
                <Shimmer className="h-3 w-56 rounded-md" />
              </div>
              <div className="mt-4 flex justify-end">
                <Shimmer className="h-9 w-16 rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (!reviewSettings) {
    return (
      <section className="rounded-3xl border border-border/15 bg-background/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-6">
        <div className="mb-5 flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <SlidersHorizontal className="size-5" strokeWidth={2.1} />
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-[0.015em] text-gray-700">
              Reviews Moderation Settings
            </h2>
            <p className="mt-1 text-sm font-medium text-gray-400">
              No moderation settings are available right now.
            </p>
          </div>
        </div>

        <div className="rounded-[24px] border border-border/10 bg-white/80 px-4 py-10 text-center text-sm font-medium text-gray shadow-sm">
          Review moderation settings could not be loaded. Please try again
          later.
        </div>
      </section>
    );
  }

  const settingsControls = buildReviewSettingsControls(
    controls,
    reviewSettings,
  );

  return (
    <section className="rounded-3xl border border-border/15 bg-background/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
          <SlidersHorizontal className="size-5" strokeWidth={2.1} />
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-[0.015em] text-gray-700">
            Reviews Moderation Settings
          </h2>
          <p className="mt-1 text-sm font-medium text-gray-400">
            Monitor, moderate, and control customer feedback
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {settingsControls.map((control) => (
          <article
            key={control.id}
            className="flex items-center justify-between gap-4 rounded-[24px] border border-border/10 bg-white/90 px-4 py-4 shadow-sm"
          >
            <div>
              <h3 className="text-sm font-semibold text-dark">
                {control.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-gray">
                {control.description}
              </p>
            </div>

            {control.type === "toggle" ? (
              <ReviewsModerationToggle enabled={Boolean(control.enabled)} />
            ) : (
              <button
                type="button"
                className="inline-flex min-w-27 items-center justify-center gap-2 rounded-full border border-primary/30 bg-background px-3 py-2 text-xs font-medium text-dark transition-colors hover:bg-primary/5"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-[10px] leading-none">★</span>
                </span>
                {control.value}
                <ChevronDown
                  className="size-3.5 text-primary"
                  strokeWidth={2}
                />
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
