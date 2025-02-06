import React from "react";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ParentComponent from "./components/ParentComponent";
import WithoutUseMemo from "./components/WithoutUseMemo";
import WithUseMemo from "./components/WithUseMemo";
import AsyncComponent from "./components/AsyncComponent";
import SuspenseExample from "./components/SuspenseExample";
import TransitionExample from "./components/TransitionExample";
import DeferredExample from "./components/DeferredExample";
import SuspenseWrapper from "./components/SuspenseWrapper";
import LazyWithTransition from "./components/LazyWithTransition";

const App: React.FC = () => {
    return (
        <div>
            {/* <h1>パフォーマンス最適化（useMemo & React.memo）</h1> */}
            {/* <ExpensiveCalculation /> */}
            {/* <ParentComponent /> */}
            {/* <WithoutUseMemo /> */}
            {/* <WithUseMemo /> */}
            {/* <AsyncComponent /> */}
            {/* <SuspenseExample /> */}
            {/* <TransitionExample /> */}
            {/* <DeferredExample /> */}
            {/* <SuspenseWrapper /> */}
            <LazyWithTransition />
        </div>
    );
};

export default App;
