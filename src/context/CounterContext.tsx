// [250201]
// import React, { createContext, useReducer, useContext } from "react";

// // Contextを作成
// const CounterContext = createContext({} as CounterContextType);

// // 状態の型定義
// interface State {
//     count: number;
// }

// interface CounterContextType {
//     state: State;
//     dispatch: React.Dispatch<Action>;
// }

// type Action = { type: "increment" | "decrement" };

// // useReducer を定義
// const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };
//         case "decrement":
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// };

// // Provider作成
// export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
//     children,
// }) => {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });

//     return (
//         <CounterContext.Provider value={{ state, dispatch }}>
//             {children}
//         </CounterContext.Provider>
//     );
// };

// // useCounter フックを作成して、どこでも useContextで使えるようにする
// export const useCounter = () => useContext(CounterContext);

// [250202]
import React, { createContext, useReducer, useContext } from "react";

interface State {
    count: number;
}

type Action = { type: "increment" | "decrement" | "reset" };

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

const CounterContext = createContext<
    { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

// `useCounter` カスタムフック（Contextの取得を簡単にする）
export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};
