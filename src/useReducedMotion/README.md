# useReducedMotion Hook

A custom React hook to detect the user's preference for reduced motion. This hook is also helpful for determining SSR. See https://react.dev/reference/react/useEffect#displaying-different-content-on-the-server-and-the-client

## Usage

```tsx
import React from 'react';
import { useReducedMotion } from 'transmish';

const MyComponent = () => {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    // This is also the path SSR takes.
    return <p>Reduced motion is enabled, no animation.</p>
  }

  return <p>Complex motion and layout changes here.</p>;
};

export default MyComponent;
```

