# useBooleanState React Hook

A custom React hook for managing boolean state. This hook provides functionality to manage boolean state within React components. It includes functions to set the state to true, false, or toggle between the two states.

## Usage

```tsx
import React from 'react';
import { useBooleanState } from 'transmish';

const MyComponent = () => {
    const { value, toTrue, toFalse, toggle } = useBooleanState(false);

    return (
        <div>
            <p>Current state: {value.toString()}</p>
            <button onClick={toTrue}>Set to true</button>
            <button onClick={toFalse}>Set to false</button>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default MyComponent;
```