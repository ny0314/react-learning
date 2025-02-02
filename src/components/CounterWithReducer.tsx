import React, { useReducer } from "react";

// ステートの型定義
type State = {
    count: number;
};

// アクションの型定義
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// リデューサー関数
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
};

const CounterWithReducer: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h2>カウンター（useReducer）: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>
                リセット
            </button>
        </div>
    );
};

export default CounterWithReducer;
