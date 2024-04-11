// useEffect - Run code when the component mounts and cleanup when the component unmounts
import React, { useEffect, useState } from 'react';

const Clicker = () => {
  const [name, setName] = useState();
  // 1.Basic usage
  useEffect(() => {
    // Run code when the component mounts
    console.log('Component mounted');

    // Cleanup when the component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means run only once

  // 2.Run Effect on Dependency Change: Run code when a specific dependency changes.
  useEffect(() => {
    console.log('Name updated:', name);
  }, [name]); // Run when 'name' changes

  // 3.Run Effect After Render: Run code after every render (including the initial
  // render).
  useEffect(() => {
    console.log('Component rendered');
  }); // No dependency array

  // 4.Cleanup on Dependency Change: Clean up previous effect when a dependency
  // changes.
  useEffect(() => {
    return () => {
      console.log('Previous component cleaned up');
    };
  }, [name]); // Clean up when 'name' changes

  return <h1>Hello World!</h1>;
};

export default Clicker;
