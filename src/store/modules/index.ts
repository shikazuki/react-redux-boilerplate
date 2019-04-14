import { combineReducers } from "redux";
import { CounterStateType } from "./counter/reducer";

export interface ApplicationState {
  counter: CounterStateType;
}

import { CounterReducer } from "./counter/ducks";

export const rootReducer = combineReducers({
  counter: CounterReducer,
});
