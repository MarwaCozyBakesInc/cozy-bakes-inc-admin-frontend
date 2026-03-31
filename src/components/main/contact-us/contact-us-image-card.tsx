import Image from "next/image";
import type { ContactUsImageCardProps } from "@/interfaces/main/contact-us";

export function ContactUsImageCard({ imageField }: ContactUsImageCardProps) {
  return (
    <div className="space-y-2">
      <p className="text-base font-medium leading-6 text-dark">
        {imageField.label}
      </p>
      <div className="rounded-3xl border border-dashed border-primary p-[2px]">
        <Image
          src={imageField.src}
          alt={imageField.alt}
          width={138}
          height={138}
          className="h-[138px] w-[138px] rounded-[22px] object-cover"
        />
      </div>
    </div>
  );
}
