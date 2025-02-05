import React, { useState } from "react";

const Counter: React.FC = () => {
    // count という状態を管理（初期値 0）
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>カウント: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};

export default Counter;
