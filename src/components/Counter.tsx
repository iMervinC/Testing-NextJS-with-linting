import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () =>
    setTimeout(() => {
      setCount((c) => c - 1);
    }, 100);

  return (
    <div>
      <button aria-label="increment" onClick={increment}>
        -
      </button>
      {count}
      <button aria-label="decrement" onClick={decrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
