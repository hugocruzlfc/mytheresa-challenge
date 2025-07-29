import { env } from "@/env";
import { BACKEND_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { MoviePictureResponse } from "@/lib/types";
import { QueryKey, useSuspenseQuery } from "@tanstack/react-query";

export function useGetMoviePicture({ movieId }: { movieId: number }) {
  const queryKey: QueryKey = ["movie-picture", movieId];
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn: () =>
      kyInstance
        .get(
          `${env.NEXT_PUBLIC_TMDB_BASE_URL}${BACKEND_ENDPOINTS.MOVIE_PICTURE(movieId)}`,
        )
        .json<MoviePictureResponse>(),
    staleTime: Infinity,
  });

  return {
    moviePicture: data,
  };
}
