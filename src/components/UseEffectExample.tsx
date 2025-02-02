import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectExample: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("初回レンダリング時にAPI実行");
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => setData(response))
            .catch((error) => console.error("エラー:", error));
    }, []);

    return (
        <div>
            <h2>useEffect Example</h2>
            {data && <p>{data.title}</p>}
            <button onClick={() => setCount(count + 1)}>
                カウント: {count}
            </button>
        </div>
    );
};

export default UseEffectExample;
