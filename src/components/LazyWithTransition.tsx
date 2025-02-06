import React, { useState, useTransition, Suspense, lazy } from "react";

// ✅ 遅延ロードするコンポーネント
const HeavyComponent = lazy(() => import("./LazyComponent"));

const LazyWithTransition: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>Lazy & Transition Example</h2>
            <button
                onClick={() => startTransition(() => setShow((prev) => !prev))}
            >
                {show ? "非表示" : "表示"}
            </button>

            {isPending && <p>Loading...</p>}

            <Suspense fallback={<p>Loading Component...</p>}>
                {show && <HeavyComponent />}
            </Suspense>
        </div>
    );
};

export default LazyWithTransition;
