import React from "react";

type Props = {
    text?: string;
    count?: number;
};

const ExpensiveComponent: React.FC<Props> = ({ text = "", count = 0 }) => {
    console.log("ExpensiveComponent が再レンダリングされました");

    const items = Array.from({ length: 20000 }, (_, i) => (
        <div key={i}>
            Item {i} - {text || count}
        </div>
    ));
    return <div>{items}</div>;
};

export default ExpensiveComponent;
