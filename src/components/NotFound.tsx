import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>お探しのページは存在しません。</p>
            <Link to="/">ホームへ戻る</Link>
        </div>
    );
};

export default NotFound;
