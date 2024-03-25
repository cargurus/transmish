"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanState = void 0;
const react_1 = require("react");
/**
 * Custom React hook for managing boolean state.
 * @param {boolean} [defaultState=false] The default state value.
 * @returns {{
*   value: boolean,
*   toTrue: () => void,
*   toFalse: () => void,
*   toggle: () => void
* }} An object containing the boolean state value and functions to manipulate it.
*/
const useBooleanState = (defaultState = false) => {
    const [value, setValue] = (0, react_1.useState)(defaultState);
    const toTrue = () => {
        setValue(true);
    };
    const toFalse = () => {
        setValue(false);
    };
    const toggle = () => {
        setValue((v) => !v);
    };
    return {
        value,
        toTrue,
        toFalse,
        toggle,
    };
};
exports.useBooleanState = useBooleanState;
