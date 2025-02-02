import React, { useEffect, useState } from "react";

const FetchExample: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Fetch API Example</h2>
            {data ? <p>{data.title}</p> : <p>Loading...</p>}
        </div>
    );
};

export default FetchExample;
