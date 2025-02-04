// [250201~250202]
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PostForm from "./PostForm";

// type Post = {
//     id: number;
//     title: string;
// };

// const PostList: React.FC = () => {
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
//     const [selectedPost, setSelectedPost] = useState<Post | null>(null);
//     const [searchTerm, setSearchTerm] = useState<string>("");
//     const [editingPostId, setEditingPostId] = useState<number | null>(null);
//     const [editTitle, setEditTitle] = useState<string>("");

//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => {
//                 const data = response.data.slice(0, 10);
//                 setPosts(data);
//                 setFilteredPosts(data);
//             })
//             .catch((error) => console.error("エラー:", error));
//     }, []);

//     // 検索処理
//     useEffect(() => {
//         const filtered = posts.filter((post) =>
//             post.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredPosts(filtered);
//     }, [searchTerm, posts]);

//     const handlePostAdded = (newPost: Post) => {
//         setPosts((prevPosts) => [newPost, ...prevPosts]);
//         setFilteredPosts((prevPosts) => [newPost, ...prevPosts]);
//     };

//     const handleDeletePost = async (postId: number) => {
//         try {
//             await axios.delete(
//                 `https://jsonplaceholder.typicode.com/posts/${postId}`
//             );
//             console.log(`投稿 ${postId} を削除しました`);

//             setPosts((prevPosts) =>
//                 prevPosts.filter((post) => post.id !== postId)
//             );
//             setFilteredPosts((prevPosts) =>
//                 prevPosts.filter((post) => post.id !== postId)
//             );
//         } catch (error) {
//             console.error("投稿削除失敗", error);
//         }
//     };

//     const handleUpdatePost = async (postId: number, newTitle: string) => {
//         try {
//             const response = await axios.put(
//                 `https://jsonplaceholder.typicode.com/posts/${postId}`,
//                 {
//                     title: newTitle,
//                     body: "これは更新された投稿です",
//                     userId: 1,
//                 }
//             );

//             console.log(`投稿 ${postId} を更新`, response.data);

//             // 投稿リストを更新
//             setPosts((prevPosts) =>
//                 prevPosts.map((post) =>
//                     post.id === postId ? { ...post, title: newTitle } : post
//                 )
//             );
//             setFilteredPosts((prevPosts) =>
//                 prevPosts.map((post) =>
//                     post.id === postId ? { ...post, title: newTitle } : post
//                 )
//             );

//             setEditingPostId(null);
//         } catch (error) {
//             console.error("投稿更新失敗", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Post List</h2>
//             {/* 投稿フォーム */}
//             <PostForm onPostAdded={handlePostAdded} />

//             {/* 検索フォーム */}
//             <input
//                 type="text"
//                 placeholder="投稿を検索..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <ul>
//                 {filteredPosts.map((post) => (
//                     <li key={post.id}>
//                         {editingPostId === post.id ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={editTitle}
//                                     onChange={(e) =>
//                                         setEditTitle(e.target.value)
//                                     }
//                                 />
//                                 <button
//                                     onClick={() =>
//                                         handleUpdatePost(post.id, editTitle)
//                                     }
//                                 >
//                                     保存
//                                 </button>
//                                 <button onClick={() => setEditingPostId(null)}>
//                                     キャンセル
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <span onClick={() => setSelectedPost(post)}>
//                                     {post.title}
//                                 </span>
//                                 <button
//                                     onClick={() => {
//                                         setEditingPostId(post.id);
//                                         setEditTitle(post.title);
//                                     }}
//                                 >
//                                     編集
//                                 </button>
//                                 <button
//                                     onClick={() => handleDeletePost(post.id)}
//                                 >
//                                     削除
//                                 </button>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//             {selectedPost && (
//                 <div>
//                     <h3>詳細</h3>
//                     <p>ID: {selectedPost.id}</p>
//                     <p>タイトル: {selectedPost.title}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PostList;

// [250203_250204]
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addPost, fetchPosts } from "../redux/postSlice";
// import { RootState, AppDispatch } from "../redux/store";

// const PostList: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const { posts, loading, error } = useSelector(
//         (state: RootState) => state.posts
//     );

//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");

//     // コンポーネントがマウントされたら、API を取得
//     useEffect(() => {
//         dispatch(fetchPosts()); // API を取得
//     }, [dispatch]);

//     const handleAddPost = () => {
//         if (title.trim() === "" || body.trim() === "") return;
//         dispatch(addPost({ title, body }) as any);
//         setTitle("");
//         setBody("");
//     };

//     return (
//         // <div>
//         //     <h2>Redux で管理する API データ</h2>

//         //     {/* ローディング中の表示 */}
//         //     {status === "loading" && <p>データを取得中...</p>}

//         //     {/* エラー発生時の表示 */}
//         //     {status === "failed" && (
//         //         <p style={{ color: "red" }}>エラー： {error}</p>
//         //     )}

//         //     {/* 取得したリストの表示 */}
//         //     <ul>
//         //         {posts.map((post) => (
//         //             <li key={post.id}>
//         //                 <h4>{post.title}</h4>
//         //                 <p>{post.body}</p>
//         //             </li>
//         //         ))}
//         //     </ul>
//         // </div>

//         <div>
//             <h2>投稿一覧</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>
//                         <strong>{post.title}</strong>
//                         <p>{post.body}</p>
//                     </li>
//                 ))}
//             </ul>

//             <h3>新しい投稿を追加</h3>
//             <input
//                 type="text"
//                 placeholder="タイトル"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="内容"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//             />
//             <button onClick={handleAddPost}>投稿を追加</button>
//         </div>
//     );
// };

// export default PostList;

// [250205_]
import React from "react";
import { useGetPostsQuery } from "../redux/api";

const PostList: React.FC = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery(undefined);

    return (
        <div>
            <h2>RTK Queryで取得した投稿一覧</h2>
            {isLoading && <p>読み込み中...</p>}
            {error && <p style={{ color: "red" }}>エラーが発生しました</p>}

            <ul>
                {posts?.map((post: { id: number; title: string }) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
