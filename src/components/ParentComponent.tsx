import React, { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // useCallback で関数の再生成を防ぐ
    const handleClick = useCallback(() => {
        console.log("ボタンがクリックされました");
    }, []);

    return (
        <div>
            <h2>useMemo & useCallback の組み合わせ</h2>

            {/* 入力を受け取り、状態更新 */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="テキストを入力"
            />

            {/* 計算負荷の高い処理 */}
            <ExpensiveComponent count={count} />

            {/* useCallback を利用したボタン */}
            <ChildComponent onClick={handleClick} />

            {/* カウントを増やす */}
            <button onClick={() => setCount(count + 1)}>カウント +1</button>
        </div>
    );
};

export default ParentComponent;
