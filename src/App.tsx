import React from "react";
// import CounterWithRedux from "./components/CounterWithRedux";
import PostList from "./components/PostList";
// import DynamicValidationForm from "./components/DynamicValidationForm";
// import SchemaValidationForm from "./components/SchemaValidationForm";
// import DynamicForm from "./components/DynamicForm";
// import DynamicFieldForm from "./components/DynamicFieldForm";
// import ResetForm from "./components/ResetForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/router/Home";
// import About from "./pages/router/About";
// import Contact from "./pages/router/Contact";
// import UserDetail from "./pages/router/UserDetail";
// import DashBoard from "./pages/router/Dashboard";
// import Profile from "./pages/router/Profile";
// import Settings from "./pages/router/Settings";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";
// import LoginPage from "./pages/router/LoginPage";
// import NotFound from "./components/NotFound";
// import BasicForm from "./components/BasicForm";
// import FormWithValidation from "./components/FormWithValidation";
// import FormWithLiveValidation from "./components/FormWithLiveValidation";
// import React, { Suspense, lazy } from "react";
// import VirtualizedList from "./components/VirtualizedList";
// import WithStartTransition from "./components/concurrent/WithStartTransition";
// import WithUseDeferredValue from "./components/concurrent/WithUseDeferredValue";
// import ProfiledComponent from "./components/ProfiledComponent";
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
        // <div>
        //     {/* <h1>API Fetch Example</h1> */}
        //     {/* <FetchExample />
        //     <AxiosExample />
        //     <AsyncExample />
        //     <UseEffectExample /> */}
        //     {/* <UseEffectDependencyExample /> */}
        //     {/* <PostList /> */}
        //     {/* <Parent /> */}
        //     {/* <h1>React App</h1>
        //     <Suspense fallback={<p>Loading...</p>}>
        //         <About />
        //     </Suspense> */}
        //     {/* <h1>Virtualized List</h1>
        //     <VirtualizedList /> */}
        //     {/* <WithStartTransition /> */}
        //     {/* <WithUseDeferredValue /> */}
        //     {/* <ProfiledComponent /> */}
        // </div>

        // <AuthProvider>
        //     <Router>
        //         <div>
        //             <h1>React Route Example</h1>
        //             <Routes>
        //                 <Route path="/" element={<Home />} />
        //                 <Route path="/about" element={<About />} />
        //                 <Route path="/contact" element={<Contact />} />
        //                 <Route path="/users" element={<UserDetail />} />
        //                 <Route path="/users/:id" element={<UserDetail />} />
        //                 <Route path="/login" element={<LoginPage />} />

        //                 {/* ネストされたルート */}
        //                 <Route element={<ProtectedRoute />}>
        //                     <Route path="/dashboard" element={<DashBoard />}>
        //                         <Route path="profile" element={<Profile />} />
        //                         <Route path="settings" element={<Settings />} />
        //                     </Route>
        //                 </Route>

        //                 <Route path="*" element={<NotFound />} />
        //             </Routes>
        //         </div>
        //     </Router>
        // </AuthProvider>

        // <div>
        //     <h1>React Hook Form Example</h1>
        //     {/* <BasicForm /> */}
        //     {/* <FormWithValidation /> */}
        //     {/* <FormWithLiveValidation /> */}
        //     {/* <DynamicForm /> */}
        //     {/* <DynamicFieldForm /> */}
        //     {/* <ResetForm /> */}
        //     {/* <DynamicValidationForm /> */}
        //     {/* <SchemaValidationForm /> */}
        // </div>

        <div>
            {/* <h1>Redux 非同期処理のサンプル</h1>
            <PostList /> */}

            <h1>Redux 非同期処理（createAsyncThunk）</h1>
            <PostList />
        </div>
    );
};

export default App;
