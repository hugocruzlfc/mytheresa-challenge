import { AddToWishListButton } from "@/components/add-to-wish-list-button";
import MovieTile from "@/components/movie-tile";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { env } from "@/env";
import { API_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { Movie } from "@/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: Promise<{ movieId: string }>;
}

const getMovie = cache(async (movieId: number) => {
  const movie = await kyInstance(
    `${env.PROJECT_BASE_URL}${API_ENDPOINTS.MOVIE_DETAIL(movieId)}`,
  ).json<Movie>();

  if (!movie) notFound();

  return movie;
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { movieId } = await params;

  const movie = await getMovie(Number(movieId));

  return {
    title: `${movie.title} - Details`,
  };
}

export default async function Page({ params }: PageProps) {
  const { movieId } = await params;

  const movie = await getMovie(Number(movieId));

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-3/5">
          <MovieTile
            title={movie.title}
            movieId={movie.id}
            className="border-none shadow-none"
          />
        </div>
        <div className="flex w-full flex-col items-end space-y-4 p-2 md:w-2/5 md:py-8">
          <TypographyP>{movie.overview}</TypographyP>
          <AddToWishListButton movieId={movie.id} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <TypographyP>Release Date: {movie.release_date}</TypographyP>
        <TypographyP>Rating: {movie.vote_average}</TypographyP>
        <TypographyP>Budget: ${movie.budget}</TypographyP>
        <TypographyP>Revenue: ${movie.revenue}</TypographyP>
      </CardFooter>
    </Card>
  );
}
