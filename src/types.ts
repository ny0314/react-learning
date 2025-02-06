export interface Post {
    id: number;
    title: string;
    body: string;
}

// ✅ PostForm に渡す props の型
export interface PostFormProps {
    onPostAdded: (post: Post) => void;
}

// ✅ PostList に渡す props の型
export interface PostListProps {
    newPost: Post | null;
}
