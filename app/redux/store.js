"use client";
import { configureStore } from "@reduxjs/toolkit";
import cart_slice from "./slices/cart_slice";
import user_slice  from "./slices/user_slice";

export const store = configureStore({
  reducer: {
    "cart": cart_slice,
    "user_slice": user_slice,
  },
});