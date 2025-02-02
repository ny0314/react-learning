import React, { useState, startTransition } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const WithStartTransition: React.FC = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <h2>startTransition を使用</h2>
            <button
                onClick={() =>
                    startTransition(() => {
                        setCount(count + 1); // 優先度低の更新
                    })
                }
            >
                カウント +1
            </button>
            {/* <button onClick={() => setCount(count + 1)}>カウント +1</button> */}

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ExpensiveComponent count={count} />
        </div>
    );
};

export default WithStartTransition;
