import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./modules";

export const Store = configureStore({
  reducer: RootReducer,
});
