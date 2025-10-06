import { createRoot} from 'react-dom/client'
import React, { useState } from 'react';

function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

function Destruct2() {
  return (
    <>
      <Counter />
    </>
  )
}

export default Destruct2