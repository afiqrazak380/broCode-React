import React from 'react';
import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function changeColor() {
    setColor(color === 'green' ? 'red' : 'green');
  }

  useEffect(() => {
    document.title = ` count:${count} color:${color}`;
  }, [color]);

  return (
    <>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <br />
      <button onClick={changeColor}>Color</button>
    </>
  );
};

export default UseEffect;
