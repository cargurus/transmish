"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
/**
 * extends RTL screen to provide helper methods for making queries
 */
const skreen = Object.assign(Object.assign({}, react_1.screen), { 
    /**
     * returns all text content of parent node if it exists
     */
    getParentText: (...args) => {
        var _a;
        return (_a = react_1.screen.getByText(...args).parentNode) === null || _a === void 0 ? void 0 : _a.textContent;
    }, queryInputByType: (typeOfInput) => {
        var _a;
        const inputs = document.querySelectorAll(`input[type="${typeOfInput}"]`);
        if (inputs.length > 1)
            throw new Error(`Multiple inputs found with type "${typeOfInput}". Consider using skreen.queryAllInputsByType.`);
        return (_a = inputs[0]) !== null && _a !== void 0 ? _a : null;
    }, queryAllInputsByType: (typeOfInput) => {
        return document.querySelectorAll(`input[type="${typeOfInput}"]`);
    } });
exports.default = skreen;
