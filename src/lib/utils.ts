import { clsx, type ClassValue } from "clsx";
import { env } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function authHeader() {
  return {
    Authorization: `Bearer ${env.TMDB_TOKEN}`,
  };
}

export function getGenreStyles(genreId: number | undefined): {
  className: string;
} {
  switch (genreId) {
    case 28:
      return {
        className: "bg-red-500 hover:bg-red-600 font-light",
      };
    case 12:
      return {
        className: "bg-green-500 hover:bg-green-600 font-medium",
      };
    case 16:
      return {
        className: "bg-blue-500 hover:bg-blue-600 font-semibold",
      };
    default:
      return {
        className: "",
      };
  }
}
