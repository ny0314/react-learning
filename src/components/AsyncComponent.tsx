import React, { useState, useEffect } from "react";

const AsyncComponent: React.FC = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setData("非同期データが読み込まれました！");
        }, 3000); // 3秒後にデータをセット
    }, []);

    return <div>{data ? data : "Loading..."}</div>;
};

export default AsyncComponent;
