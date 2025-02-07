import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from "../../../store/reducers/counterReducer";

interface RootState {
   counter: {
     count: number
    }
}

const Counter = () => {

  const count = useSelector((state : RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
