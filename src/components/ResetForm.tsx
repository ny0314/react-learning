import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    age: number;
};

const ResetForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: "山田太郎",
            email: "example@example.com",
            age: 25,
        },
    });

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
        reset(); // 送信後にフォームをリセット
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>リセットフォーム</h2>
            <div>
                <label>名前:</label>
                <input {...register("name", { required: "名前は必須です" })} />
                {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
            </div>
            <div>
                <label>メールアドレス:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "メールアドレスは必須です",
                    })}
                />
                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
            </div>
            <div>
                <label>年齢:</label>
                <input
                    type="number"
                    {...register("age", {
                        required: "年齢は必須です",
                        min: {
                            value: 18,
                            message: "18歳以上である必要があります",
                        },
                    })}
                />
                {errors.age && (
                    <p style={{ color: "red" }}>{errors.age.message}</p>
                )}
            </div>
            <button type="submit">送信</button>
            <button type="button" onClick={() => reset()}>
                リセット
            </button>
            <button
                type="button"
                onClick={() =>
                    reset({
                        name: "田中一郎",
                        email: "tanaka@example.com",
                        age: 30,
                    })
                }
            >
                デフォルト変更
            </button>
        </form>
    );
};

export default ResetForm;
