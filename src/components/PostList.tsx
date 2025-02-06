import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Post, PostListProps } from "../types";

const PostList: React.FC<PostListProps> = ({ newPost }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editTitle, setEditTitle] = useState<string>("");
    const [editingPostId, setEditingPostId] = useState<number | null>(null);

    // **📌 API から投稿を取得（GET）**
    useEffect(() => {
        axios
            .get(`${API_URL}?_limit=5`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => console.error("エラー:", error));
    }, []);

    // **📌 新規投稿が追加されたらリストを更新**
    useEffect(() => {
        if (newPost) {
            setPosts((prevPosts) => [newPost, ...prevPosts]);
        }
    }, [newPost]);

    // **📌 投稿の更新処理（PATCH）**
    const handleUpdatePost = async (postId: number) => {
        try {
            const response = await axios.patch(`${API_URL}/${postId}`, {
                id: postId,
                title: editTitle,
                body: "更新された投稿です",
            });

            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, title: response.data.title }
                        : post
                )
            );

            setEditingPostId(null);
        } catch (error) {
            console.error("投稿の更新失敗", error);
        }
    };

    // **📌 投稿の削除処理（DELETE）**
    const handleDeletePost = async (postId: number) => {
        try {
            await axios.delete(`${API_URL}/${postId}`);

            setPosts((prevPosts) =>
                prevPosts.filter((post) => post.id !== postId)
            );
        } catch (error) {
            console.error("投稿の削除失敗", error);
        }
    };

    return (
        <div>
            <h2>投稿一覧</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {editingPostId === post.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) =>
                                        setEditTitle(e.target.value)
                                    }
                                />
                                <button
                                    onClick={() => handleUpdatePost(post.id)}
                                >
                                    保存
                                </button>
                                <button onClick={() => setEditingPostId(null)}>
                                    キャンセル
                                </button>
                            </>
                        ) : (
                            <>
                                <strong>{post.title}</strong>
                                <button
                                    onClick={() => {
                                        setEditingPostId(post.id);
                                        setEditTitle(post.title);
                                    }}
                                >
                                    編集
                                </button>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                >
                                    削除
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
