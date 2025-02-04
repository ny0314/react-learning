import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const FormWithLiveValidation: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
    };

    // 入力中のパスワードを監視
    const password = watch("password");

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
            <div>
                <label>確認用パスワード:</label>
                <input
                    type="password"
                    {...register("confirmPassword", {
                        required: password
                            ? "確認用パスワードを入力してください"
                            : false,
                        validate: (value) =>
                            !password ||
                            value === password ||
                            "パスワードが一致しません",
                    })}
                />
                {errors.confirmPassword && (
                    <p style={{ color: "red" }}>
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>
            <button type="submit">送信</button>
        </form>
    );
};

export default FormWithLiveValidation;
