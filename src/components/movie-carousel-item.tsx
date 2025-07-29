import { CarouselItem } from "@/components/ui/carousel";
import { ROUTES } from "@/lib/constants";
import Link from "next/link";
import MovieTile from "./movie-tile";

interface MovieCarouselItemProps {
  title: string;
  movieId: number;
}

export default function MovieCarouselItem({
  title,
  movieId,
}: MovieCarouselItemProps) {
  return (
    <CarouselItem key={movieId} className="pl-0.5 md:basis-1/4 lg:basis-1/5">
      <div className="p-1">
        <Link href={ROUTES.MOVIE_DETAIL(movieId)}>
          <MovieTile title={title} movieId={movieId} />
        </Link>
      </div>
    </CarouselItem>
  );
}
