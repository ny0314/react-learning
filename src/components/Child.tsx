import React from "react";

type Props = {
    onClick: () => void;
};

const Child: React.FC<Props> = ({ onClick }) => {
    console.log("子コンポーネントが再レンダリングされました");
    return <button onClick={onClick}>子コンポーネントのボタン</button>;
};

export default React.memo(Child);
