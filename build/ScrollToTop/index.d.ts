import React, { FC } from "react";
export interface ScrollToTopProps extends React.HTMLAttributes<HTMLDivElement> {
    shouldScroll: boolean;
    scrollOffset?: number;
    behavior?: "smooth" | "auto";
}
/**
 * ScrollToTop will automatically scroll its children elements to the top of the
 * viewport in response to changes to its `shouldScroll` prop.
 */
export declare const ScrollToTop: FC<ScrollToTopProps>;
