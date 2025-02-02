import React from "react";
import { useCounter } from "../context/CounterContext";

const CounterControls: React.FC = () => {
    const { dispatch } = useCounter();

    return (
        <div>
            <h3>カウンター操作</h3>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>
                リセット
            </button>
        </div>
    );
};

export default CounterControls;
