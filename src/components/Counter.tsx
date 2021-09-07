import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bigEnough, setBigEnough] = useState(false);

  const increment = () =>
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 100);
  const decrement = () =>
    setTimeout(() => {
      setCount((c) => c - 1);
    }, 100);

  const load = () =>
    setTimeout(() => {
      setBigEnough(true);
    }, 500);

  useEffect(() => {
    if (count >= 15) {
      load();
    } else if (count < 15) {
      setBigEnough(false);
    }
  }, [count]);
  return (
    <div>
      <button aria-label="increment" onClick={increment}>
        +
      </button>
      {count}
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>

      {bigEnough ? null : <div>I am too small</div>}
    </div>
  );
};

export default Counter;
