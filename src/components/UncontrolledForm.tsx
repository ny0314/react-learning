import React, { useRef } from "react";

const UncontrolledForm: React.FC = () => {
    // useRef を使ってフォームの要素を参照
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    // フォーム送信時の処理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("送信されたデータ:", {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
        });

        // 送信後にフォームをリセット
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
    };

    return (
        <div>
            <h2>非制御コンポーネントのフォーム</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>名前:</label>
                    <input type="text" ref={nameRef} />
                </div>
                <div>
                    <label>メールアドレス:</label>
                    <input type="email" ref={emailRef} />
                </div>
                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default UncontrolledForm;
