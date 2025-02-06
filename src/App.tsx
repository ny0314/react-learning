import React from "react";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ParentComponent from "./components/ParentComponent";
import WithoutUseMemo from "./components/WithoutUseMemo";
import WithUseMemo from "./components/WithUseMemo";

const App: React.FC = () => {
    return (
        <div>
            <h1>パフォーマンス最適化（useMemo & React.memo）</h1>
            {/* <ExpensiveCalculation /> */}
            <ParentComponent />
            {/* <WithoutUseMemo /> */}
            {/* <WithUseMemo /> */}
        </div>
    );
};

export default App;
