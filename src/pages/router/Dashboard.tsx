import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashBoard: React.FC = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default DashBoard;
