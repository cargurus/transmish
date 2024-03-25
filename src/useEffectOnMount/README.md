# useEffectOnMount React Hook

A custom React hook for handling common state requirements for tracking async behavior when a component mounts.

## Usage

```tsx
import React, { useState } from 'react';
import { useEffectOnMount } from 'transmish';

const MyComponent = () => {
    // Define an async function to be executed
    const fetchData = async ({ url }) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    // Define initial props (optional)
    const initialProps = {
        url: 'https://api.example.com/data',
    };

    // Use useEffectOnMount hook
    const { loading, data, error } = useEffectOnMount(fetchData, { initialProps });

    // Render loading state
    if (loading) return <div>Loading...</div>;

    // Render error state
    if (error) return <div>Error</div>;

    // Render data
    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```