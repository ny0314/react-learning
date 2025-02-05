import React from "react";

type Props = {
    name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
    return <h1>こんにちは, {name} さん！</h1>;
};

export default Greeting;
