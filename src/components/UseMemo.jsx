import React, { useState, useMemo } from "react";

export const UseMemoComponent = () => {
    const [count, setCount] = useState(0);
    const [otherValue, setOtherValue] = useState(10);

    // useMemo caches the result of the expensive calculation
    const squaredValue = useMemo(() => {
        console.log("Calculating...");
        return otherValue * otherValue;
    }, [otherValue]); // only recalculates when otherValue changes

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ backgroundColor: "black", color: "white" }}
            >
                Increment Count
            </button>

            <p>Other Value: {otherValue}</p>
            <button
                onClick={() => setOtherValue(otherValue + 1)}
                style={{ backgroundColor: "black", color: "white" }}
            >
                Increment Other Value
            </button>

            <p>Squared Value (memoized): {squaredValue}</p>
        </div>
    );
}

export default UseMemoComponent;
