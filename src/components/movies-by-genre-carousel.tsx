"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { env } from "@/env";
import { useGetMoviesByGenre } from "@/hooks/get-use-movie-by-genre";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface MoviesByGenreCarouselProps {
  genreId: number;
  genreName: string; // Optional, if you want to display the genre name
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
            <CarouselItem
              key={movie.id}
              className="pl-0.5 md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-[2/3] items-center justify-center p-2">
                    <span className="text-lg font-semibold">{movie.title}</span>
                    <Image
                      src={`${env.NEXT_PUBLIC_TMDB_IMAGES_URL!}${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                      height={300}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
