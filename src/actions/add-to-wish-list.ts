"use server";

export async function addToWishListAction(formData: FormData) {
  const id = Number(formData.get("movieId"));
  if (isNaN(id)) {
    throw new Error("Invalid movie ID");
  }
  return { success: true, message: `Movie with ID ${id} added to wish list` };
}
