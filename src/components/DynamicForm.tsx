import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    username: string;
    email: string;
    showDetails: boolean;
    details?: string;
};

const DynamicForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const [showDetails, setShowDetails] = useState(false);

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>ユーザー名:</label>
                <input
                    {...register("username", {
                        required: "ユーザー名は必須です",
                    })}
                />
                {errors.username && (
                    <p style={{ color: "red" }}>{errors.username.message}</p>
                )}
            </div>

            <div>
                <label>メールアドレス:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "メールアドレスは必須です",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "有効なメールアドレスを入力してください",
                        },
                    })}
                />
                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        {...register("showDetails")}
                        onChange={() => setShowDetails((prev) => !prev)}
                    />
                    追加情報を入力する
                </label>
            </div>

            {showDetails && (
                <div>
                    <label>追加情報:</label>
                    <input
                        {...register("details", {
                            required: "追加情報は必須です",
                        })}
                    />
                    {errors.details && (
                        <p style={{ color: "red" }}>{errors.details.message}</p>
                    )}
                </div>
            )}

            <button type="submit">送信</button>
        </form>
    );
};

export default DynamicForm;
