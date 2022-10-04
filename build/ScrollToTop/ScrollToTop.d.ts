import React, { FC } from 'react';
export interface ScrollToTopProps extends React.HTMLAttributes<HTMLDivElement> {
    shouldScroll: boolean;
    scrollOffset?: number;
    behavior?: 'smooth' | 'auto';
}
/**
 * This component returns a div that when the shouldScroll changes to be true, will autoscroll to the top of the viewport.
 */
export declare const ScrollToTop: FC<ScrollToTopProps>;
