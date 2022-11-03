"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
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
exports.default = useBooleanState;
