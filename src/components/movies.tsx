"use client";

import { useGetGenres } from "@/hooks/get-use-genres";
import MoviesByGenre from "./movies-by-genre";

export default function Movies() {
  const { genres } = useGetGenres();

  return (
    <div>
      {genres.map((genre) => (
        <MoviesByGenre key={genre.id} genreId={genre.id} />
      ))}
    </div>
  );
}
