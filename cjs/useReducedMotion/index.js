"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReducedMotion = void 0;
const react_1 = require("react");
const useReducedMotion = () => {
    const [isReducedMotion, setIsReducedMotion] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);
        const listener = () => {
            setIsReducedMotion(mediaQuery.matches);
        };
        mediaQuery.addEventListener('change', listener);
        return () => {
            mediaQuery.removeEventListener('change', listener);
        };
    }, []);
    return isReducedMotion;
};
exports.useReducedMotion = useReducedMotion;
