import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../store/modules";
import { counterActions } from "../store/modules/counter/ducks";

interface StateProps {
  count: number;
}

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
}

type CounterProps = StateProps & DispatchProps;
const Counter = ({ count, decrement, increment }: CounterProps) => {
  return (
    <div>
      <h3>Counter : {count}</h3>
      <span>
        <button onClick={increment}>increment</button>
      </span>
      <span>
        <button onClick={decrement}>decrement</button>
      </span>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { count: state.counter.count };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
