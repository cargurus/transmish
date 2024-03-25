# useIntersectionObserver Hook

A custom React hook for executing a callback function when a component is scrolled into view using the IntersectionObserver API.

## Usage

```tsx
import React from 'react';
import { useIntersectionObserver } from 'transmish';

const MyComponent = () => {
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Do something when component is in view
                console.log('Component is in view!');
            }
        });
    };

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.5 // Trigger when 50% of the component is in view
    };

    const { containerRef } = useIntersectionObserver(handleIntersection, options);

    return (
        <div ref={containerRef} style={{ height: '100vh', backgroundColor: 'lightgray' }}>
            {/* Your component content */}
        </div>
    );
};

export default MyComponent;
```