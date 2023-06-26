import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = Record<"TITLE" | "GENRE" | "CINEMA", string>;

type TState = { filter: Filter };

const initialState: TState = {
  filter: {
    TITLE: "",
    GENRE: "",
    CINEMA: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<Filter>) => {
      state.filter = payload;
    },
  },
});

export default slice.reducer;

export const selectFilter = ({ filter }: { filter: TState }) => {
  return filter;
};
export const { setFilter } = slice.actions;
