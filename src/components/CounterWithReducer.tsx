import React, { useReducer } from "react";

// 状態の型
type State = { count: number };

// アクションの型
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// reducer関数（状態の更新ロジック）
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
            <h2>useReducer の例</h2>
            <p>カウント: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
            <button onClick={() => dispatch({ type: "reset" })}>
                リセット
            </button>
        </div>
    );
};

export default CounterWithReducer;
