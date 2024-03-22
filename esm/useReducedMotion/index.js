import { useEffect, useState } from 'react';
export const useReducedMotion = () => {
    const [isReducedMotion, setIsReducedMotion] = useState(true);
    useEffect(() => {
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
