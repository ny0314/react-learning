import React from "react";

// Props の型を定義
type UserProps = {
    name: string;
    age: number;
};

// 子コンポーネントで Props を受け取る
const UserCard: React.FC<UserProps> = ({ name, age }) => {
    return (
        <div>
            <h3>ユーザー情報</h3>
            <p>名前: {name}</p>
            <p>年齢: {age} 歳</p>
        </div>
    );
};

export default UserCard;
