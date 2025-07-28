"use client";

import { useGetMoviesByGenre } from "@/hooks/get-use-movie-by-genre";

interface MoviesByGenreProps {
  genreId: number;
}

export default function MoviesByGenre({ genreId }: MoviesByGenreProps) {
  const { moviesByGenres } = useGetMoviesByGenre({ genreId });

  console.log(moviesByGenres);
  return <div>{JSON.stringify(moviesByGenres)}</div>;
}
