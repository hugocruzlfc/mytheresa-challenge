// import { API_ENDPOINTS } from "@/lib/constants";
// import kyInstance from "@/lib/ky-instance";
// import { normalizeDashboardFilters } from "@/lib/utils";
// import { DashboardAogsByAircraft } from "@/types/backend";
// import { QueryKey, useSuspenseQuery } from "@tanstack/react-query";

// export function useGetMovies() {
//   const queryKey: QueryKey = ["movies"];
//   const { data } = useSuspenseQuery({
//     queryKey,
//     queryFn: () =>
//       kyInstance
//         .post(API_ENDPOINTS.DASHBOARD.AOGS_BY_AIRCRAFT, {
//           json: {
//             ...normalizeDashboardFilters(filters),
//           },
//         })
//         .json<DashboardAogsByAircraft[]>(),
//     staleTime: Infinity,
//   });

//   return {
//     aogsByAircraftData: data,
//   };
// }
