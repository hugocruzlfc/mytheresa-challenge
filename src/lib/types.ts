export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
export interface MoviesByGenresResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
