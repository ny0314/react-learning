// import React, { useState } from "react";

// const Counter: React.FC = () => {
//     const [count, setCount] = useState<number>(0);

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={() => setCount(count - 1)}>-</button>
//         </div>
//     );
// };

// import React, { useReducer, useEffect } from "react";
// import { useCounter } from "../context/CounterContext";
// const initialState = { count: Number(localStorage.getItem("count") || 0) };

// const reducer = (state: typeof initialState, action: { type: string }) => {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };
//         case "decrement":
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// };

// const Counter: React.FC = () => {
//     const { state, dispatch } = useCounter();

//     useEffect(() => {
//         localStorage.setItem("count", String(state.count));
//     }, [state.count]);

//     return (
//         <div>
//             <h2>Count: {state.count}</h2>
//             <button onClick={() => dispatch({ type: "increment" })}>+</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         </div>
//     );
// };

// export default Counter;

import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>カウンター: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default Counter;
