import React, { useState } from 'react';

const CountActivity = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count Activity</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}

export default CountActivity;
