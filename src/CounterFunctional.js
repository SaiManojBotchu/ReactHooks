import React, { useState } from 'react';

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(st => st + 1);

  return (
    <div>
      <h1>React Hooks</h1>
      <h1>The count is: {count}</h1>
      <button onClick={incrementCounter}>Add 1</button>
    </div>
  );
};

export default CounterFunctional;
