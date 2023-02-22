"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        increment
      </button>
    </div>
  );
};

export default Counter;
