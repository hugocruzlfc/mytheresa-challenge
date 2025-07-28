import { env } from "@/env";
import { BACKEND_ENDPOINTS } from "@/lib/constants";
import kyInstance from "@/lib/ky-instance";
import { Genre } from "@/lib/types";
import { authHeader } from "@/lib/utils";

export async function GET(req: Request) {
  try {
    const backendUrl = `${env.TMDB_BASE_URL}${BACKEND_ENDPOINTS.GENRES}`;

    const genreResponse = await kyInstance
      .get(backendUrl, {
        headers: authHeader(),
      })
      .json<Genre[]>();

    console.log(genreResponse);

    return Response.json(genreResponse, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching genre data", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch genre data" }),
      { status: 500 },
    );
  }
}
