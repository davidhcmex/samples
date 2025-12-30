import React, { useState, useCallback } from "react";

// Componente Hijo que solamente vuelve a renederizar si los 'props' cambian

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button
    onClick={onClick}
    style={{ backgroundColor: "black", color: "white" }}
  >
    Increment
  </button>;
});

export const UseCallbackParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Este callback depende de count, solo se actualiza cuando count cambia
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleIncrement} />
      < br />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

