import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>ログイン</button>
        </div>
    );
};

export default LoginPage;
