import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart";
import { movieApi } from "./apiQuery/movieApi";

export const store = configureStore({
  reducer: { [movieApi.reducerPath]: movieApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat([movieApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
