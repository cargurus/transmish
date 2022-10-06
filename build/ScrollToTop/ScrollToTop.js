"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToTop = void 0;
const react_1 = __importStar(require("react"));
/**
 * This component returns a div that when the shouldScroll changes to be true, will autoscroll to the top of the viewport.
 */
const ScrollToTop = (_a) => {
    var { children, shouldScroll, scrollOffset = 0, behavior = "smooth" } = _a, rest = __rest(_a, ["children", "shouldScroll", "scrollOffset", "behavior"]);
    const scrollRef = (0, react_1.useRef)(null);
    (0, react_1.useLayoutEffect)(() => {
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
    return (react_1.default.createElement("div", Object.assign({ ref: scrollRef }, rest), children));
};
exports.ScrollToTop = ScrollToTop;
