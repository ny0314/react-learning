import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("タイマー開始");

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("タイマー停止");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h2>タイマー</h2>
            <p>{seconds} 秒経過</p>
        </div>
    );
};

export default Timer;
