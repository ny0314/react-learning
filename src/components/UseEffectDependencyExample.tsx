import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectDependencyExample: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [postId, setPostId] = useState<number>(1);

    useEffect(() => {
        console.log(`postId が ${postId} に変更されたので API実行`);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error("エラー:", error));
    }, [postId]);

    return (
        <div>
            <h2>useEffect Example</h2>
            {data && <p>{data.title}</p>}
            <button onClick={() => setPostId(postId + 1)}>
                次の投稿を取得: （{postId}）
            </button>
        </div>
    );
};

export default UseEffectDependencyExample;
