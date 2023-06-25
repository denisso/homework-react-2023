import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";

export const store = configureStore({ reducer: { cart: cartReducer } });

export type AppDispatch = typeof store.dispatch;
