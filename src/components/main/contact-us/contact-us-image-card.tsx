"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ContactUsImageCardProps } from "@/interfaces/main/contact-us";

export function ContactUsImageCard({ imageField }: ContactUsImageCardProps) {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState(imageField.src);

  useEffect(() => {
    if (!selectedImageFile) {
      setPreviewSrc(imageField.src);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImageFile);
    setPreviewSrc(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [imageField.src, selectedImageFile]);

  return (
    <div className="space-y-2">
      <label className="block text-base font-medium leading-6 text-dark">
        {imageField.label}
      </label>
      <div className="space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={(event) =>
            setSelectedImageFile(event.target.files?.[0] ?? null)
          }
          className="min-h-[58px] w-full cursor-pointer rounded-lg border border-primary bg-[#fbf8eb14] px-3 py-3 text-sm leading-5 font-medium text-dark outline-none file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
        <div className="rounded-3xl border border-dashed border-primary p-[2px]">
          {previewSrc ? (
            <Image
              src={previewSrc}
              alt={imageField.alt}
              width={138}
              height={138}
              className="h-[138px] w-[138px] rounded-[22px] object-cover"
              unoptimized={selectedImageFile !== null}
            />
          ) : (
            <div className="flex h-[138px] w-[138px] items-center justify-center rounded-[22px] bg-[#FFF7E7] px-4 text-center text-xs font-medium text-[#6B5B4C]">
              No image available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
