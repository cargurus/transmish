import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * Custom React hook for creating an interval that executes a callback function.
 * @param {function} callback The function to be executed at each interval.
 * @param {number|null} delay The delay in milliseconds between each execution of the callback function. If `null`, the interval is cleared.
 * @returns {function} A function to stop the interval.
 */
export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);
    const intervalId = useRef<number>();
    const stopInterval = () => window.clearInterval(intervalId.current);
    const noOp = () => {
        return;
    };

    useLayoutEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (!delay && delay !== 0) {
            return noOp;
        }
        intervalId.current = window.setInterval(
            () => savedCallback.current(),
            delay
        );
        return stopInterval;
    }, [delay]);

    return stopInterval;
};
