import React from "react";
import { useCounter } from "../context/CounterContext";

const CounterWithContext: React.FC = () => {
    const { state, dispatch } = useCounter();

    return (
        <div>
            <h2>カウンター（useReducer + useContext）: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>
                リセット
            </button>
        </div>
    );
};

export default CounterWithContext;
