import { actionCreatorFactory } from "typescript-fsa";

// Actions
const actionCreator = actionCreatorFactory("counter");

const increment = actionCreator("increment");
const decrement = actionCreator("decrement");

export const counterActions = {
  increment,
  decrement,
};

// Reducers
import { CounterStateType, getInitialState, Handlers } from "./reducer";

import { reducerWithInitialState } from "typescript-fsa-reducers";

export const CounterReducer = reducerWithInitialState<CounterStateType>(getInitialState())
  .case(increment, (state) => Handlers.increment(state))
  .case(decrement, (state) => Handlers.decrement(state));

export default CounterReducer;
