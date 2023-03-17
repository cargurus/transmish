import { FC } from "react";
import { ScrollToTopProps } from "../ScrollToTop";
declare type BaseProps = Omit<ScrollToTopProps, "shouldScroll">;
export interface ScrollOnStateChangeProps extends BaseProps {
    watchedValue: unknown;
}
export declare const ScrollOnStateChange: FC<ScrollOnStateChangeProps>;
export {};
