import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Post, PostFormProps } from "../types";

const PostForm: React.FC<PostFormProps> = ({ onPostAdded }) => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    // **📌 投稿を追加（POST）**
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;

        try {
            const response = await axios.post(API_URL, { title, body });

            onPostAdded(response.data);
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("投稿の追加失敗", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="タイトル"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="内容"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">投稿を追加</button>
        </form>
    );
};

export default PostForm;
