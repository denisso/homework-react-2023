import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "@/types";

interface MoviesResponse {
  movies: Movie[];
}

interface MovieResponse {
  movie: Movie;
}

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, void>({ query: () => "movies" }),
    getMovie: builder.query<MovieResponse, string>({
      query: (movieId: string) => `movie?movieId=${movieId}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
