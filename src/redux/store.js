import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
export const store = configureStore({
  reducer: {
    cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
