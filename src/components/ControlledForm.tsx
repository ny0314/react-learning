import React, { useState } from "react";

const ControlledForm: React.FC = () => {
    // useState を使ってフォームの状態を管理
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // フォーム送信時の処理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("送信されたデータ:", { name, email });

        // 送信後にフォームをクリア
        setName("");
        setEmail("");
    };

    return (
        <div>
            <h2>制御コンポーネントのフォーム</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>名前:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>メールアドレス:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default ControlledForm;
