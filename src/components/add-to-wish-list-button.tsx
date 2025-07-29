"use client";

import { addToWishListAction } from "@/app/actions/add-to-wish-list";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface AddToWishListButtonProps {
  movieId: number;
}

export function AddToWishListButton({ movieId }: AddToWishListButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await addToWishListAction(formData);
        if (result.success) {
          toast.success(result.message, {
            description: "You can view your wish list in your profile",
          });
        }
      } catch (error) {
        toast.error("Failed to add movie to wish list");
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <input type="hidden" name="movieId" value={movieId} />
      <Button variant="outline" type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add to wish list"}
      </Button>
    </form>
  );
}
