"use client";

import { useGetGenres } from "@/hooks/get-use-genres";

export default function Movies() {
  const { moviesGenres } = useGetGenres();

  console.log(moviesGenres);

  return <div>{JSON.stringify(moviesGenres, null, 2)}</div>;
}
