import React, { useState, useMemo } from "react";

const ExpensiveCalculation: React.FC = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    // useMemo を適用（count が変わらない限り再計算しない）
    const calculatedValue = useMemo(() => {
        console.log("高負荷な計算を実行...");
        let total = 0;
        for (let i = 0; i < 100000000; i++) {
            total += i;
        }
        return total;
    }, [count]); // count が変わらない限り、再計算しない

    return (
        <div>
            <h2>Expensive Calculation (Optimized)</h2>
            <p>計算結果: {calculatedValue}</p> {/* count 変更時のみ再計算 */}
            <button onClick={() => setCount(count + 1)}>カウント +1</button>
            <p>カウント: {count}</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="入力してみてください"
            />
        </div>
    );
};

export default ExpensiveCalculation;
