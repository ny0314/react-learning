import React, { useState } from "react";
import axios from "axios";

type Props = {
    onPostAdded: (newPost: { id: number; title: string }) => void;
};

const PostForm: React.FC<Props> = ({ onPostAdded }) => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() === "") return;

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title,
                    body: "これはサンプルの投稿です",
                    userId: 1,
                }
            );
            console.log("投稿成功:", response.data);

            const newPost = {
                id: Date.now(),
                title: title,
            };

            onPostAdded(newPost);
            setTitle("");
        } catch (error) {
            console.error("投稿失敗", error);
        }
    };

    return (
        <div>
            <h2>新しい投稿を追加</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="投稿のタイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">投稿する</button>
            </form>
        </div>
    );
};

export default PostForm;
