// import React, { Suspense, lazy } from "react";
import React from "react";
// import VirtualizedList from "./components/VirtualizedList";
import WithStartTransition from "./components/concurrent/WithStartTransition";
import WithUseDeferredValue from "./components/concurrent/WithUseDeferredValue";
import ProfiledComponent from "./components/ProfiledComponent";
// import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CounterContext";
// import CounterWithContext from "./components/CounterWithContext";
// import CounterControls from "./components/CounterControls";
// import FetchExample from "./components/FetchExample";
// import AxiosExample from "./components/AxiosExample";
// import AsyncExample from "./components/AsyncExample";
// import UseEffectExample from "./components/UseEffectExample";
// import UseEffectDependencyExample from "./components/UseEffectDependencyExample";
// import PostList from "./components/PostList";
// import Parent from "./components/Parent";
// import UserForm from "./components/UserForm";

// const About = lazy(() => import("./components/About"));

const App: React.FC = () => {
    // return <Greeting name="Naoto" />;
    // return (
    //     <CounterProvider>
    //         {/* <h1>React + TypeScript</h1> */}
    //         {/* <Counter /> */}
    //         {/* <UserForm /> */}
    //         <div>
    //             <CounterWithContext />
    //             <CounterControls />
    //         </div>
    //     </CounterProvider>
    // );
    return (
        <div>
            {/* <h1>API Fetch Example</h1> */}
            {/* <FetchExample />
            <AxiosExample />
            <AsyncExample />
            <UseEffectExample /> */}
            {/* <UseEffectDependencyExample /> */}
            {/* <PostList /> */}
            {/* <Parent /> */}
            {/* <h1>React App</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <About />
            </Suspense> */}
            {/* <h1>Virtualized List</h1>
            <VirtualizedList /> */}
            {/* <WithStartTransition /> */}
            {/* <WithUseDeferredValue /> */}
            <ProfiledComponent />
        </div>
    );
};

export default App;
