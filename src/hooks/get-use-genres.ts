import { API_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { Genre } from "@/lib/types";
import { QueryKey, useSuspenseQuery } from "@tanstack/react-query";

export function useGetGenres() {
  const queryKey: QueryKey = ["movies-genres"];
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn: () => kyInstance.get(API_ENDPOINTS.GENRES).json<Genre[]>(),
    staleTime: Infinity,
  });

  return {
    moviesGenres: data,
  };
}
