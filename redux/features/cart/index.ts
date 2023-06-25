import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  movies: { [key: string]: number };
};

const initialState: TState = { movies: {} };

type Reducer = {
  movieId: string;
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plus: (state, { payload }: PayloadAction<Reducer>) => {
      state.movies[payload.movieId] = (state.movies[payload.movieId] ?? 0) + 1;
    },
    minus: (state, { payload }: PayloadAction<Reducer>) => {
      state.movies[payload.movieId] = (state.movies[payload.movieId] ?? 0) - 1;
    },
    remove: (state, { payload }: PayloadAction<Reducer>) => {
      console.log(state, payload);
    },
  },
});

export default slice.reducer;
export const selectCount = (movieId: string) => ({cart}: {cart: TState}) => {
  return {count: cart.movies?.[movieId] || 0};
};
export const { plus, minus, remove } = slice.actions;
