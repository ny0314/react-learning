import React, { useMemo } from "react";

interface ExpensiveComponentProps {
    count: number;
}

// 計算負荷の高い処理
const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ count }) => {
    const squaredNumber = useMemo(() => {
        console.log("値を計算中...");
        return count ** 2;
    }, [count]);

    return (
        <div>
            <p>入力値の2乗: {squaredNumber}</p>
        </div>
    );
};

export default React.memo(ExpensiveComponent);
