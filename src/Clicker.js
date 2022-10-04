import React, { useEffect, useState } from 'react';

const Clicker = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });
  // useEffect(() => {
  //   console.log('This will execute only once');
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    // return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h1>count is : {count}</h1>
      {/* <button onClick={() => setCount(200)}>Add</button> */}
    </div>
  );
};

export default Clicker;
