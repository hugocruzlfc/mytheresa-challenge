"use client";

import { useGetGenres } from "@/hooks/get-use-genres";
import MoviesByGenreCarousel from "./movies-by-genre-carousel";

export default function Movies() {
  const { genres } = useGetGenres();

  return (
    <div className="mx-auto flex w-full max-w-7xl grow flex-col gap-5 p-5">
      {genres.map((genre) => (
        <MoviesByGenreCarousel
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
    </div>
  );
}
