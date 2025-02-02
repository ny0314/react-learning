import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("データ取得に失敗しました");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Axios API Example</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {data && <p>{data.title}</p>}
        </div>
    );
};

export default AxiosExample;
