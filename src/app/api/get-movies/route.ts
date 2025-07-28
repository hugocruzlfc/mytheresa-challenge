// import { env } from "@/env";
// import kyInstance from "@/lib/ky-instance";
// import { DashboardKpi } from "@/types/backend";

// export async function GET(req: Request) {
//   try {
//     const backendUrl = `${env.OMDB_API_URL}`;

//     const kpisResponse = await kyInstance
//       .get(backendUrl)
//       .json<DashboardKpi[]>();

//     return Response.json(kpisResponse, {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error fetching kpis metrics", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch kpis metrics" }),
//       { status: 500 },
//     );
//   }
// }
