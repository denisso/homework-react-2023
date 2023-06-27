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
    setTitle: (state, { payload }: PayloadAction<Filter["TITLE"]>) => {
      state.filter["TITLE"] = payload;
    },
    setGenre: (state, { payload }: PayloadAction<Filter["GENRE"]>) => {
      state.filter["GENRE"] = payload;
    },
    setCinema: (state, { payload }: PayloadAction<Filter["CINEMA"]>) => {
      state.filter["CINEMA"] = payload;
    },
  },
});

export default slice.reducer;

export const selectFilter = ({ filter }: { filter: TState }) => {
  return filter;
};
export const { setTitle, setGenre, setCinema } = slice.actions;
