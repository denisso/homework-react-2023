import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";
import type { TMovie, TCinema, TReview } from "@/types";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<TMovie[], void>({ query: () => "movies" }),
    getMoviesByCinema: builder.query<TMovie[], string>({
      query: (cinemaId: string) => `movies?cinemaId=${cinemaId}`,
      // для запросов по кинотеатру на сервер время жизни 60 сек
      keepUnusedDataFor: 60,
    }),
    getMovie: builder.query<TMovie[], string>({
      query: (movieId: string) => `movie?movieId=${movieId}`,
    }),
    getCinemas: builder.query<TCinema[], void>({ query: () => "cinemas" }),
    getReviewByMovie: builder.query<TReview[], string>({
      query: (movieId: string) => `reviews?movieId=${movieId}`,
    }),
  }),
  keepUnusedDataFor: Infinity, // Время жизни кеша установлено на бесконечность для все endpoint
});

export const {
  useGetMoviesQuery,
  useGetMoviesByCinemaQuery,
  useGetMovieQuery,
  useGetCinemasQuery,
  useGetReviewByMovieQuery,
} = movieApi;

export const selectAllMoviesResult = movieApi.endpoints.getMovies.select();

const emptyMovies: TMovie[] = [];

export const selectAllMovies = createSelector(
  selectAllMoviesResult,
  (usersResult) => usersResult?.data ?? emptyMovies
);

export const selectMovieById = (movieId: string) =>
  createSelector(selectAllMovies, (movies) =>
    movies.find((movie: TMovie) => movie.id === movieId)
  );

export const Genres: { [key: string]: string } = {
  horror: "Ужасы",
  fantasy: "Фэнтези",
  action: "Боевик",
  comedy: "Комедия",
};
