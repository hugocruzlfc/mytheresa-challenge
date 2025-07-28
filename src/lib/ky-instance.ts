import { env } from "@/env";
import ky from "ky";

const kyInstance = ky.create({
  headers: {
    Authorization: `Bearer ${env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
});

export default kyInstance;
