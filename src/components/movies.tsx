"use client";

import { useGetGenres } from "@/hooks/get-use-genres";
import MoviesByGenreCarousel from "./movies-by-genre-carousel";

export default function Movies() {
  const { genres } = useGetGenres();

  return (
    <>
      {genres.map((genre) => (
        <MoviesByGenreCarousel
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
    </>
  );
}
