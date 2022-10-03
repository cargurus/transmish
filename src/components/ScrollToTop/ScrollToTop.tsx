import React, { FC, useLayoutEffect, useRef } from 'react';

export interface ScrollToTopProps extends React.HTMLAttributes<HTMLDivElement> {
    shouldScroll: boolean;
    scrollOffset?: number;
    behavior?: 'smooth' | 'auto';
}

/**
 * This component returns a div that when the shouldScroll changes to be true, will autoscroll to the top of the viewport.
 */
export const ScrollToTop: FC<ScrollToTopProps> = ({
    children,
    shouldScroll,
    scrollOffset = 0,
    behavior = 'smooth',
    ...rest
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (shouldScroll) {
            if (scrollRef && scrollRef.current) {
                // add some space
                const top = scrollRef.current.offsetTop - scrollOffset;
                try {
                    window.scroll({
                        top,
                        left: 0,
                        behavior,
                    });
                } catch (e) {
                    window.scrollTo(0, top);
                }
            }
        }
    }, [behavior, shouldScroll, scrollOffset]);
    return (
        <div ref={scrollRef} {...rest}>
            {children}
        </div>
    );
};
