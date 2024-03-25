# useAsyncEffect React Hook
A custom React hook for handling common state requirements for tracking asynchronous behavior.

## Description
This hook simplifies the management of asynchronous operations in React components by providing state variables and callbacks to track loading, data, and error states. It executes an asynchronous function and provides the result, error, and loading state.

## Usage

```tsx
import React from 'react';
import { useAsyncEffect } from 'transmish';

const MyComponent = () => {
    // Define an async function to be executed
    const fetchData = async () => {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    };

    // Use useAsyncEffect hook
    const { data, loading, error, fireCallback } = useAsyncEffect(fetchData, {
        // Optional callbacks
        onComplete: (data) => console.log('Data fetched successfully:', data),
        onError: (error) => console.error('Error fetching data:', error),
        onReset: () => console.log('State reset'),
    });

    // Render loading state
    if (loading) return <div>Loading...</div>;

    // Render error state
    if (error) return <div>Error: {error.message}</div>;

    // Render data
    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => fireCallback()}>Fetch Data</button>
        </div>
    );
};

export default MyComponent;
```