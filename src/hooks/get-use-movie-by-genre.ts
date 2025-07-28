import { env } from "@/env";
import { BACKEND_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { MoviesByGenresResponse } from "@/lib/types";
import { QueryKey, useSuspenseQuery } from "@tanstack/react-query";

export function useGetMoviesByGenre({ genreId }: { genreId: number }) {
  const queryKey: QueryKey = ["movies-by-genre", genreId];
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn: () =>
      kyInstance
        .get(
          `${env.NEXT_PUBLIC_TMDB_BASE_URL}${BACKEND_ENDPOINTS.MOVIES_BY_GENRE(genreId)}`,
        )
        .json<MoviesByGenresResponse>(),
    staleTime: Infinity,
  });

  return {
    moviesByGenres: data.results,
  };
}
