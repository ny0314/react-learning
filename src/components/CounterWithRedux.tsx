import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement, reset } from "../redux/counterSlice";

const CounterWithRedux: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Redux Toolkit Counter</h2>
            <p>カウント: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>リセット</button>
        </div>
    );
};

export default CounterWithRedux;
