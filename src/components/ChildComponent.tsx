import React from "react";

interface ChildProps {
    onClick: () => void;
}

const ChildComponent: React.FC<ChildProps> = ({ onClick }) => {
    console.log("ChildComponent がレンダリングされました");

    return (
        <div>
            <button onClick={onClick}>クリック</button>
        </div>
    );
};

export default React.memo(ChildComponent);
