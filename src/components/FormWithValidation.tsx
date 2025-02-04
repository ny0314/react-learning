import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    password: string;
};

const FormWithValidation: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "正しいメールアドレスを入力してください",
                        },
                    })}
                />
                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
            </div>
            <div>
                <label>パスワード:</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "パスワードは必須です",
                        minLength: {
                            value: 6,
                            message: "パスワードは6文字以上で入力してください",
                        },
                    })}
                />
                {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
            </div>
            <button type="submit">送信</button>
        </form>
    );
};

export default FormWithValidation;
