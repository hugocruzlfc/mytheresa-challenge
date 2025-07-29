"use client";

import { Card, CardContent } from "@/components/ui/card";
import { env } from "@/env";
import { useGetMoviePicture } from "@/hooks/get-use-movie-picture";
import Image from "next/image";

interface MovieTileProps {
  title: string;
  movieId: number;
  className?: string;
}

export default function MovieTile({
  title,
  movieId,
  className,
}: MovieTileProps) {
  const { moviePicture } = useGetMoviePicture({ movieId });
  return (
    <Card className={className}>
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
  );
}
