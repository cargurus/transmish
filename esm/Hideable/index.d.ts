import React, { FC } from "react";
export interface HideableProps extends React.HTMLAttributes<HTMLElement> {
    show: boolean;
}
/**
 * Hideable wraps its children in a div and toggles its visibility based on the truthiness of its `show` prop.
 */
export declare const Hideable: FC<HideableProps>;
