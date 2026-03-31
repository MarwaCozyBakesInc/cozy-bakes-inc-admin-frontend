import type { ContactUsFieldCardProps } from "@/interfaces/main/contact-us";

export function ContactUsFieldCard({ field }: ContactUsFieldCardProps) {
  return (
    <div className="space-y-2">
      <p className="text-base font-medium leading-6 text-dark">{field.label}</p>
      <div
        className={[
          "rounded-lg border border-primary bg-[#fbf8eb14] px-3 text-dark",
          field.multiline
            ? "min-h-[94px] py-3 text-base leading-6"
            : "flex min-h-[58px] items-center py-2.5 text-sm leading-5",
        ].join(" ")}
      >
        <p className={field.multiline ? "text-base font-medium" : "font-medium"}>
          {field.value}
        </p>
      </div>
    </div>
  );
}
