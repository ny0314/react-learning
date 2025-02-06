import React, { Suspense, lazy } from "react";

// ✅ LazyComponent を遅延ロード
const LazyComponent = lazy(() => import("./LazyComponent"));

const SuspenseWrapper: React.FC = () => {
    return (
        <Suspense fallback={<p>Loading Component...</p>}>
            <LazyComponent />
        </Suspense>
    );
};

export default SuspenseWrapper;
