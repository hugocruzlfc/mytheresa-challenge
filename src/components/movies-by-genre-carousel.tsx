"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetMoviesByGenre } from "@/hooks/get-use-movie-by-genre";

import MovieCarouselItem from "./movie-carousel-item";
import { Badge } from "./ui/badge";

interface MoviesByGenreCarouselProps {
  genreId: number;
  genreName: string;
}

export default function MoviesByGenreCarousel({
  genreId,
  genreName,
}: MoviesByGenreCarouselProps) {
  const { moviesByGenres } = useGetMoviesByGenre({ genreId });

  return (
    <div className="space-y-2">
      <Badge>{genreName}</Badge>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {moviesByGenres.map((movie) => (
            <MovieCarouselItem
              key={movie.id}
              title={movie.title}
              movieId={movie.id}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
