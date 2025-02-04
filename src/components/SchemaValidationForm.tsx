import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// バリデーションスキーマの定義
const schema = yup.object().shape({
    name: yup.string().required("名前は必須です"),
    email: yup
        .string()
        .email("正しいメールアドレスを入力してください")
        .required("メールアドレスは必須です"),
    age: yup
        .number()
        .positive()
        .integer()
        .required("年齢は必須です")
        .min(18, "18歳以上である必要があります"),
    password: yup
        .string()
        .min(6, "パスワードは6文字以上である必要があります")
        .required("パスワードは必須です"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "パスワードが一致しません")
        .required("確認用パスワードは必須です"),
});

type FormData = {
    name: string;
    email: string;
    age: number;
    password: string;
    confirmPassword: string;
};

const SchemaValidationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("送信されたデータ:", data);
    };

    return (
        <div>
            <h2>スキーマベースのバリデーション</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>名前:</label>
                    <input {...register("name")} />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                </div>

                <div>
                    <label>メールアドレス:</label>
                    <input type="email" {...register("email")} />
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>

                <div>
                    <label>年齢:</label>
                    <input type="number" {...register("age")} />
                    <p style={{ color: "red" }}>{errors.age?.message}</p>
                </div>

                <div>
                    <label>パスワード:</label>
                    <input type="password" {...register("password")} />
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>

                <div>
                    <label>確認用パスワード:</label>
                    <input type="password" {...register("confirmPassword")} />
                    <p style={{ color: "red" }}>
                        {errors.confirmPassword?.message}
                    </p>
                </div>

                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default SchemaValidationForm;
