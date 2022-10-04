// Building a custom Hook
import { useState } from 'react';

const useToggle = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(st => !st);
  };
  return [state, toggle];
};

export default useToggle;
