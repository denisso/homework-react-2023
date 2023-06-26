"use client";
import { useGetMoviesQuery } from "./movieApi";

const MoviesLoader = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {

    return <></>;
  }

  if (!data || error) {

    return <></>;
  }

  return <></>;
};

export default MoviesLoader;
