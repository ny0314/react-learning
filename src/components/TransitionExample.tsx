// 📂 /src/components/TransitionExample.tsx
import React, { useState, useTransition } from "react";

const TransitionExample: React.FC = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        // ✅ カウントは即時更新（高優先度）
        setCount((prev) => prev + 1);

        // ✅ リストの更新は低優先度の更新として `startTransition` 内で処理
        startTransition(() => {
            const newItems = Array.from(
                { length: 2000 },
                (_, i) => `Item ${i}`
            );
            setItems(newItems);
        });
    };

    return (
        <div>
            <h2>startTransition の例</h2>
            <p>カウント: {count}</p>
            <button onClick={handleClick}>更新</button>

            {isPending && <p>リストを更新中...</p>}

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransitionExample;
