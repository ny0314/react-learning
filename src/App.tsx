import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
    return (
        <div>
            <Greeting name="Taro" />
            <Counter />
        </div>
    );
};

export default App;
