import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

    // useCallback で関数をメモ化
    const handleClick = useCallback(() => {
        console.log("ボタンがクリックされました");
    }, []);

    return (
        <div>
            <h2>Parent Component</h2>
            <p>カウント: {count}</p>
            <button onClick={() => setCount(count + 1)}>カウント +1</button>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Child onClick={handleClick} />
        </div>
    );
};

export default Parent;
