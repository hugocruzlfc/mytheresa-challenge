export const BACKEND_ENDPOINTS = {
  GENRES: "/genre/movie/list" as const,
  MOVIES_BY_GENRE: (genreId: number) =>
    `/discover/movie?with_genres=${genreId}` as const,
  MOVIE_PICTURE: (movieId: number) => `/movie/${movieId}/images` as const,
};
