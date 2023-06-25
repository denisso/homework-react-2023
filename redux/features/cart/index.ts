import { createSlice } from "@reduxjs/toolkit";

type TState = {
  movies: {[key: string]: number}
};

const initialState: TState = {movies: {}}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plus: (state, { payload }) => {
      console.log(state, payload)
    },
    minus: (state, { payload }) => {
      console.log(state, payload)
    },
    remove: (state, { payload }) => {
      console.log(state, payload)
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
