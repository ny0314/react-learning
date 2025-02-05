import React from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";

const App: React.FC = () => {
    return (
        <div>
            <h2>React の基本機能</h2>
            <UserCard name="Taro" age={25} />
            <Counter />
            <NameForm />
        </div>
    );
};

export default App;
