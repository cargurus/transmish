/**
 * Custom React hook for creating an interval that executes a callback function.
 * @param {function} callback The function to be executed at each interval.
 * @param {number|null} delay The delay in milliseconds between each execution of the callback function. If `null`, the interval is cleared.
 * @returns {function} A function to stop the interval.
 */
export declare const useInterval: (callback: () => void, delay: number | null) => () => void;
