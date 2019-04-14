export interface CounterStateType {
  count: number;
}

export const getInitialState = () => {
  return { count: 0 };
};

export const Handlers = {
  increment(state: CounterStateType) {
    return { ...state, count: state.count + 1 };
  },
  decrement(state: CounterStateType) {
    return { ...state, count: state.count - 1 };
  },
};
