import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// **APIのURL（定数として管理）**
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// **投稿一覧を取得（非同期）**
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const response = await axios.get(`${API_URL}?_limit=5`);
        return response.data; // JSONデータを返す
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "データ取得に失敗しました"
        );
    }
});

// **新しい投稿を追加（非同期）**
export const addPost = createAsyncThunk(
    "posts/addPost",
    async (newPost: Omit<Post, "id">) => {
        try {
            const response = await axios.post(API_URL, newPost, {
                headers: { "Content-Type": "application/json" },
            });
            return response.data; // サーバーから返された投稿データ
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "投稿の追加に失敗しました"
            );
        }
    }
);

// **投稿を削除（非同期）**
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (postId: number) => {
        try {
            await axios.delete(`${API_URL}/${postId}`);
            return postId; // 成功時に削除された投稿のIDを返す
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "投稿の削除に失敗しました"
            );
        }
    }
);

// **Post型の定義**
interface Post {
    id: number;
    title: string;
    body: string;
}

// **Stateの型定義**
interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

// **初期状態**
const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
};

// **Redux Toolkit の Slice 作成**
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}, // すべて非同期処理なので、reducers は不要
    extraReducers: (builder) => {
        builder
            // **投稿取得処理**
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null; // エラーをリセット
            })
            .addCase(
                fetchPosts.fulfilled,
                (state, action: PayloadAction<Post[]>) => {
                    state.loading = false;
                    state.posts = action.payload;
                }
            )
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ?? "データ取得に失敗しました";
            })
            // **投稿追加処理**
            .addCase(
                addPost.fulfilled,
                (state, action: PayloadAction<Post>) => {
                    state.posts.unshift(action.payload); // 新しい投稿をリストの先頭に追加
                }
            )
            .addCase(addPost.rejected, (state, action) => {
                state.error =
                    action.error.message ?? "投稿の追加に失敗しました";
            })
            // **投稿削除処理**
            .addCase(
                deletePost.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.posts = state.posts.filter(
                        (post) => post.id !== action.payload
                    );
                }
            )
            .addCase(deletePost.rejected, (state, action) => {
                state.error =
                    action.error.message ?? "投稿の削除に失敗しました";
            });
    },
});

export default postSlice.reducer;
