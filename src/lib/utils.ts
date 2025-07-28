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
