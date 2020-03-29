import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../store/modules";
import { CounterActions } from "../store/modules/counter";

type CounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
function Counter({ count, increment, decrement }: CounterProps) {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export function CounterContainer() {
  const count = useSelector((state: RootReducerType) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Counter
      count={count}
      increment={useCallback(() => dispatch(CounterActions.increment()), [dispatch])}
      decrement={useCallback(() => dispatch(CounterActions.decrement()), [dispatch])}
    />
  );
}
