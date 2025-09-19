import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

// count current value (state variable).  setCount = ek function jo count ko update karega

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
