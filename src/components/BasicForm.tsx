import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
};

const BasicForm: React.FC = () => {
    const {
        register, // フォームのフィールドを登録
        handleSubmit, // フォーム送信時の処理
        formState: { errors }, // バリデーションエラーを取得
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("フォーム送信データ:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>名前:</label>
                <input {...register("name")} />
                {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
            </div>
            <div>
                <label>メールアドレス:</label>
                <input type="email" {...register("email")} />
            </div>
            <button type="submit">送信</button>
        </form>
    );
};

export default BasicForm;
