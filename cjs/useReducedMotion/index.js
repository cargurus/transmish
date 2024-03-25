"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReducedMotion = void 0;
const react_1 = require("react");
/**
 * A custom React hook to detect the user's preference for reduced motion.
 * This hook is also helpful for determining server-side rendering (SSR).
 * SSR ignores the useEffect hook, so this hook will always return true on the server-side.
 * See https://react.dev/reference/react/useEffect#displaying-different-content-on-the-server-and-the-client
 * @summary Detects user's preference for reduced motion and accounts for server-side rendering.
 * @returns {boolean} Boolean value indicating whether reduced motion is preferred.
 * @example
 * // Example usage:
 * import { useReducedMotion } from 'transmish';
 *
 * export const MyComponent = () => {
 *   const isReducedMotion = useReducedMotion();
 *
 *   return (
 *     <div>
 *       {isReducedMotion ? (
 *         <p>Reduced motion is enabled</p>
 *       ) : (
 *         <p>Normal motion is enabled</p>
 *       )}
 *     </div>
 *   );
 * };
 *
 */
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
