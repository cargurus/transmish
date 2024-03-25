"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const react_1 = require("react");
/**
 * Custom React hook for creating an interval that executes a callback function.
 * @param {function} callback The function to be executed at each interval.
 * @param {number|null} delay The delay in milliseconds between each execution of the callback function. If `null`, the interval is cleared.
 * @returns {function} A function to stop the interval.
 */
const useInterval = (callback, delay) => {
    const savedCallback = (0, react_1.useRef)(callback);
    const intervalId = (0, react_1.useRef)();
    const stopInterval = () => window.clearInterval(intervalId.current);
    const noOp = () => {
        return;
    };
    (0, react_1.useLayoutEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    (0, react_1.useEffect)(() => {
        if (!delay && delay !== 0) {
            return noOp;
        }
        intervalId.current = window.setInterval(() => savedCallback.current(), delay);
        return stopInterval;
    }, [delay]);
    return stopInterval;
};
exports.useInterval = useInterval;
