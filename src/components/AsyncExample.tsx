import React, { useEffect, useState } from "react";
import axios from "axios";

const AsyncExample: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                setData(null);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                setData(response.data);
            } catch {
                setError("データ取得に失敗しました");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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

export default AsyncExample;
