import React, { useState } from 'react';

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React Hooks</h1>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
};

export default CounterHooks;
