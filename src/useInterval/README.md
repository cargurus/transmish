# useInterval Hook

A custom React hook for creating intervals that execute a callback function.

## Usage

```tsx
import React, { useState } from 'react';
import { useInterval } from 'transmish';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Define your callback function
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Use the useInterval hook
  // This will increment count every 1000ms (1 second)
  useInterval(incrementCount, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
```