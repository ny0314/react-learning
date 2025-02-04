import React, { createContext, useState, useContext, ReactNode } from "react";

// 認証状態の型定義
type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

// 初期値（デフォルトは未認証）
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider コンポーネント
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// カスタムフック（認証情報を取得するために使用）
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
