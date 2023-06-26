import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  movies: Array<{ movieId: string; count: number }>;
};

const initialState: TState = { movies: [] };

type Reducer = {
  movieId: string;
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plus: (state, { payload }: PayloadAction<Reducer>) => {
      const movie = state.movies.find((e) => e.movieId === payload.movieId);
      if (movie) {
        movie.count += 1;
      } else {
        state.movies.push({ movieId: payload.movieId, count: 1 });
      }
    },
    minus: (state, { payload }: PayloadAction<Reducer>) => {
      const movie = state.movies.find((e) => e.movieId === payload.movieId);
      if (movie) {
        if (movie.count >= 1) movie.count -= 1;
      }
    },
    remove: (state, { payload }: PayloadAction<Reducer>) => {
      console.log(state, payload);
    },
  },
});

export default slice.reducer;

// получить количество билетов по ID фильма
export const selectCartMovieById =
  (movieId: string) =>
  ({ cart }: { cart: TState }) =>
    cart.movies.find((e) => e.movieId === movieId);

// получить все билеты
export const selectCartMovies = ({ cart }: { cart: TState }) => cart.movies;

export const { plus, minus, remove } = slice.actions;
