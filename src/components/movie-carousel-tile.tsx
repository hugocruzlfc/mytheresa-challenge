"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { env } from "@/env";
import { useGetMoviePicture } from "@/hooks/get-use-movie-picture";
import Image from "next/image";

interface MovieCarouselTileProps {
  title: string;
  movieId: number;
}

export default function MovieCarouselTile({
  title,
  movieId,
}: MovieCarouselTileProps) {
  const { moviePicture } = useGetMoviePicture({ movieId });

  return (
    <CarouselItem key={movieId} className="pl-0.5 md:basis-1/4 lg:basis-1/5">
      <div className="p-1">
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2 p-2">
            <span className="text-lg font-semibold">{title}</span>
            <Image
              src={`${env.NEXT_PUBLIC_TMDB_IMAGES_URL}/${moviePicture.posters[0].file_path}`}
              alt={title}
              width={200}
              height={300}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 20vw"
              className="object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
