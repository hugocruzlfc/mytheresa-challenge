import { env } from "@/env";
import { BACKEND_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { GenresResponse } from "@/lib/types";
import { QueryKey, useSuspenseQuery } from "@tanstack/react-query";

export function useGetGenres() {
  const queryKey: QueryKey = ["movies-genres"];
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn: () =>
      kyInstance
        .get(`${env.NEXT_PUBLIC_TMDB_BASE_URL}${BACKEND_ENDPOINTS.GENRES}`)
        .json<GenresResponse>(),
    staleTime: Infinity,
  });

  const filteredGenres = data.genres.filter((genre) =>
    [28, 12, 16].includes(genre.id),
  );

  return {
    genres: filteredGenres,
  };
}
