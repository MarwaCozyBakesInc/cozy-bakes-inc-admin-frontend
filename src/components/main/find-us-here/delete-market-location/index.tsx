"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMarketAPI } from "@/services/mutations";
import { DeleteMarketLocationButton } from "./delete-market-location-button";
import { DeleteMarketLocationModal } from "./delete-market-location-modal";

interface DeleteMarketLocationProps {
  marketSlug: string;
  marketName: string;
  marketAddress: string;
  marketSchedule: string;
}

export default function DeleteMarketLocation({
  marketSlug,
  marketName,
  marketAddress,
  marketSchedule,
}: DeleteMarketLocationProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClose = () => {
    if (isDeleting) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    const result = await deleteMarketAPI(marketSlug);

    if (result?.ok) {
      toast.success(result.message || "Market deleted successfully");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["market-list-by-day"] }),
        queryClient.invalidateQueries({
          queryKey: ["market-dashboard-stats"],
        }),
      ]);
      setOpen(false);
      setIsDeleting(false);
      return;
    }

    toast.error(result?.message);
    setIsDeleting(false);
  };

  return (
    <>
      <DeleteMarketLocationButton onClick={() => setOpen(true)} />
      <DeleteMarketLocationModal
        open={open}
        isDeleting={isDeleting}
        marketName={marketName}
        marketAddress={marketAddress}
        marketSchedule={marketSchedule}
        onClose={handleClose}
        onConfirm={handleDelete}
      />
    </>
  );
}
