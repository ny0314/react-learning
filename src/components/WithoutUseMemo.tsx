import React, { useState } from "react";

const expensiveCalculation = (num: number) => {
    console.log("計算中...");
    return num * 1000;
};

const WithoutUseMemo: React.FC = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    // ✅ 毎回 `expensiveCalculation` が実行される
    const result = expensiveCalculation(number);

    return (
        <div>
            <h2>Without useMemo</h2>
            <p>計算結果: {result}</p>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={() => setCount(count + 1)}>カウント +1</button>
            <p>カウント: {count}</p>
        </div>
    );
};

export default WithoutUseMemo;
