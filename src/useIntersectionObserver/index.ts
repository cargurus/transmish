import { useEffect, useRef } from 'react';

/**
 * Warps useEffect for functions that are meant to be called when a component is scrolled into view. Does it by
 * using the IntersectionObserver API to watch a div element for when a certain percentage of it gets into view and
 * then calls the callback function passed as a parameter to run.
 * @param callback A callback function to run when the component is in view
 * @param options A variable that contains the properties: root, rootMargin, and threshold.
 *      @property root <Element|null>: The element that is used as the viewport for checking visibility of the target.
 *      @property rootMargin <undefined|string>: Margin around the root.
 *      @property threshold <number|number[]>: Either a single number or an array of numbers which indicate at what
 *      percentage of the target's visibility the observer's callback should be executed.
 */
export const useIntersectionObserver = (
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverInit
) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(callback, options);
            const container = containerRef.current;
            if (container) {
                observer.observe(container);
            }

            return () => {
                if (container) observer.unobserve(container);
            };
        } else {
            return () => null;
        }
    }, [containerRef, options, callback]);

    return { containerRef };
};
