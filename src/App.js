import React, { useState, useEffect } from 'react';
import './style.css';
export default function App() {
  const [count, setCount] = useState(0);
  const addToCart1 = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        <button onClick={addToCart1}>AddToCart</button>
      </p>
      {!count === 0 && <p>your count is {count}</p>}
    </div>
  );
}
