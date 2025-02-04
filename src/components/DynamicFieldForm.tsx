import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormData = {
    items: { value: string }[];
};

const DynamicFieldForm: React.FC = () => {
    const { register, control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            items: [{ value: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items",
    });

    const onSubmit = (data: FormData) => {
        console.log("送信データ:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>動的フィールドフォーム</h2>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input
                        {...register(`items.${index}.value`, {
                            required: "必須です",
                        })}
                        placeholder={`項目 ${index + 1}`}
                    />
                    <button type="button" onClick={() => remove(index)}>
                        削除
                    </button>
                </div>
            ))}

            <button type="button" onClick={() => append({ value: "" })}>
                追加
            </button>
            <button type="submit">送信</button>
        </form>
    );
};

export default DynamicFieldForm;
