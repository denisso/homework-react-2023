"use client";
import { useGetMoviesQuery, useGetCinemasQuery } from "./movieApi";

const MoviesLoader = () => {
  useGetMoviesQuery();
  useGetCinemasQuery();

  return <></>;
};

export default MoviesLoader;
