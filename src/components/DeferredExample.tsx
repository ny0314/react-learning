// 📂 /src/components/DeferredExample.tsx
import React, { useState, useDeferredValue } from "react";

const DeferredExample: React.FC = () => {
    const [query, setQuery] = useState(""); // ユーザーの入力
    const deferredQuery = useDeferredValue(query); // 遅延処理

    // 検索結果を模擬的に生成（入力に応じたリスト）
    const filteredItems = Array.from(
        { length: 2000 },
        (_, i) => `Item ${i}`
    ).filter((item) => item.includes(deferredQuery));

    return (
        <div>
            <h2>useDeferredValue の例</h2>
            <input
                type="text"
                placeholder="検索キーワードを入力..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* 検索中の状態を表示（deferredQuery が変更されるまでの遅延あり） */}
            {query !== deferredQuery && <p>検索中...</p>}

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DeferredExample;
