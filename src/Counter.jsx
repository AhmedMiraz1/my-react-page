import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handelAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handelRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div
      style={{
        border: "2px solid yellow",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button onClick={handelAdd}>Add</button>
      <button onClick={handelRemove}>Remove </button>
    </div>
  );
}
