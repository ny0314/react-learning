import React, { useState, useDeferredValue } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const WithUseDeferredValue: React.FC = () => {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text); // ✅ 遅延処理

    return (
        <div>
            <h2>useDeferredValue を使用</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ExpensiveComponent text={deferredText} />
            {/* <ExpensiveComponent text={text} /> */}
        </div>
    );
};

export default WithUseDeferredValue;
