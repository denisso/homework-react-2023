"use client";
import { useGetMoviesQuery } from "./movieApi";

const MoviesLoader = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    console.log("Loading...");
    return <></>;
  }

  if (!data || error) {
    console.log("Not found");
    return <></>;
  }

  console.log("loaded")
  return <></>;
};

export default MoviesLoader;
