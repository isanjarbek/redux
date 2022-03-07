import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, set } = useCounter();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => increment()}>INCREMENT</button>
      <button onClick={() => set(0)}>Reset</button>
      <button onClick={() => decrement()}>DECREMENT</button>
    </div>
  );
};

export default Counter;
