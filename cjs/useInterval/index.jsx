"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
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
exports.default = useInterval;
