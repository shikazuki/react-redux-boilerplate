import { combineReducers } from "@reduxjs/toolkit";
import { CounterReducers } from "./counter";

export const RootReducer = combineReducers({
  counter: CounterReducers,
});

export type RootReducerType = ReturnType<typeof RootReducer>;
