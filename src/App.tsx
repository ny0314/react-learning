import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { Post } from "./types"; // Post 型をインポート

const App: React.FC = () => {
    const [newPost, setNewPost] = useState<Post | null>(null);

    return (
        <div>
            <h1>API 連携の学習</h1>
            <PostForm onPostAdded={(post) => setNewPost(post)} />
            <PostList newPost={newPost} />
        </div>
    );
};

export default App;
