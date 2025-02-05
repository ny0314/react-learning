import React, { useState, useEffect } from "react";

const NameForm: React.FC = () => {
    // 初期値を localStorage から取得
    const [name, setName] = useState<string>(() => {
        return localStorage.getItem("userName") || "";
    });

    // 名前が変更されるたびに localStorage に保存
    useEffect(() => {
        localStorage.setItem("userName", name);
    }, [name]);

    return (
        <div>
            <h2>名前を入力</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>保存された名前: {name}</p>
        </div>
    );
};

export default NameForm;
