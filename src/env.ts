import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    OMDB_API_KEY: z.string().min(1),
  },

  runtimeEnv: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },
});
