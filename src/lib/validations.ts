import { z } from "zod";

export const movieSchema = z.object({
  movieId: z.coerce
    .number({
      invalid_type_error: "movieId must be a valid number",
    })
    .int({ message: "movieId must be an integer" })
    .positive({ message: "movieId must be a positive number" }),
});
