import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                padding: "10px",
            }}
        >
            <h2>useContext の例</h2>
            <p>現在のテーマ: {theme}</p>
            <button onClick={toggleTheme}>テーマを切り替え</button>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
};

export default App;
