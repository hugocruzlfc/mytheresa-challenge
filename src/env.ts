import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_TMDB_TOKEN: z.string().min(1),
    NEXT_PUBLIC_TMDB_BASE_URL: z.string().url(),
    NEXT_PUBLIC_TMDB_IMAGES_URL: z.string().url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_TMDB_TOKEN: process.env.NEXT_PUBLIC_TMDB_TOKEN,
    NEXT_PUBLIC_TMDB_BASE_URL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    NEXT_PUBLIC_TMDB_IMAGES_URL: process.env.NEXT_PUBLIC_TMDB_IMAGES_URL,
  },
});
