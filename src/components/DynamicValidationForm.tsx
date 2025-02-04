import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    age: string;
    parentConsent?: string;
};

const DynamicValidationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<FormData>();

    const age = watch("age");
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        if (age && Number(age) < 18) {
            setShowConsent(true);
            setError("parentConsent", {
                type: "required",
                message: "18歳未満は親の同意が必要です",
            });
        } else {
            setShowConsent(false);
            clearErrors("parentConsent");
        }
    }, [age, setError, clearErrors]);

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>動的バリデーションフォーム</h2>
            <div>
                <label>年齢:</label>
                <input
                    type="number"
                    {...register("age", { required: "年齢は必須です" })}
                />
                {errors.age && (
                    <p style={{ color: "red" }}>{errors.age.message}</p>
                )}
            </div>
            {showConsent && (
                <div>
                    <label>親の同意:</label>
                    <input
                        {...register("parentConsent", {
                            required: "同意が必要です",
                        })}
                    />
                    {errors.parentConsent && (
                        <p style={{ color: "red" }}>
                            {errors.parentConsent.message}
                        </p>
                    )}
                </div>
            )}

            <button type="submit">送信</button>
        </form>
    );
};

export default DynamicValidationForm;
