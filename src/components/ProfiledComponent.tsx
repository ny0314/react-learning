import React, { useState, Profiler } from "react";

const ProfiledComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    const onRenderCallback = (
        id: string,
        phase: string,
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number
    ) => {
        console.log(`Component: ${id}`);
        console.log(`Phase: ${phase}`);
        console.log(`Actual Duration: ${actualDuration}ms`);
        console.log(`Base Duration: ${baseDuration}ms`);
        console.log(`Start Time: ${startTime}ms`);
        console.log(`Commit Time: ${commitTime}ms`);
    };

    return (
        <Profiler id="Counter" onRender={onRenderCallback}>
            <div>
                <h2>Profiler Example</h2>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        </Profiler>
    );
};

export default ProfiledComponent;
