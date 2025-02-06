import React, { Suspense } from "react";
import AsyncComponent from "./AsyncComponent";

const SuspenseExample: React.FC = () => {
    return (
        <Suspense fallback={<div>データを読み込み中...</div>}>
            <AsyncComponent />
        </Suspense>
    );
};

export default SuspenseExample;
