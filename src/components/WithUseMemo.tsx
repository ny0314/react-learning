import React, { useState, useMemo } from "react";

const expensiveCalculation = (num: number) => {
    console.log("計算中...");
    return num * 1000;
};

const WithUseMemo: React.FC = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    // ✅ `number` が変更されたときだけ再計算
    const result = useMemo(() => expensiveCalculation(number), [number]);

    return (
        <div>
            <h2>With useMemo</h2>
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

export default WithUseMemo;
