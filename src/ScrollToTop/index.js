var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useLayoutEffect, useRef } from "react";
/**
 * ScrollToTop will automatically scroll its children elements to the top of the
 * viewport in response to changes to its `shouldScroll` prop.
 */
export const ScrollToTop = (_a) => {
    var { children, shouldScroll, scrollOffset = 0, behavior = "smooth" } = _a, rest = __rest(_a, ["children", "shouldScroll", "scrollOffset", "behavior"]);
    const scrollRef = useRef(null);
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
                }
                catch (e) {
                    window.scrollTo(0, top);
                }
            }
        }
    }, [behavior, shouldScroll, scrollOffset]);
    return (React.createElement("div", Object.assign({ ref: scrollRef }, rest), children));
};
