import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [searchParams] = useSearchParams();
    const userId = id || searchParams.get("id");

    return (
        <div>
            <h2>UserDetail</h2>
            {userId ? <p>User ID: {userId}</p> : <p>No User ID provided</p>}
        </div>
    );
};

export default UserDetail;
