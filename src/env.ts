import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TMDB_TOKEN: z.string().min(1),
    TMDB_BASE_URL: z.string().url(),
  },
  client: {},

  runtimeEnv: {
    TMDB_TOKEN: process.env.TMDB_TOKEN,
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
  },
});
