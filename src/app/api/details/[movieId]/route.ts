import { env } from "@/env";
import { BACKEND_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { Movie } from "@/lib/types";
import { movieSchema } from "@/lib/validations";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ movieId: string }> },
) {
  try {
    const paramValue = await params;
    const validationResult = movieSchema.safeParse(paramValue);

    if (!validationResult.success) {
      console.error("Validation errors:", validationResult.error);
      return new Response(
        JSON.stringify({
          error: "Invalid source parameter",
          details: validationResult.error,
        }),
        { status: 400 },
      );
    }

    const { movieId } = validationResult.data;

    const backendUrl = `${env.NEXT_PUBLIC_TMDB_BASE_URL}${BACKEND_ENDPOINTS.MOVIE_DETAIL(movieId)}`;

    const movieDetailsResponse = await kyInstance.get(backendUrl).json<Movie>();

    return Response.json(movieDetailsResponse, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching movie details", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch movie details" }),
      { status: 500 },
    );
  }
}
