import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};
const initialState: CounterState = {
  value: 0,
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState): CounterState => {
      return { ...state, value: state.value + 1 };
    },
    decrement: (state: CounterState): CounterState => {
      return { ...state, value: state.value - 1 };
    },
  },
});

export const CounterActions = slice.actions;
export const CounterReducers = slice.reducer;
