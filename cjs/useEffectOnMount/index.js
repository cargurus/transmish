"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectOnMount = void 0;
const react_1 = require("react");
const useAsyncEffect_1 = require("../useAsyncEffect");
const useEffectOnMount = (func, options = {}) => {
    const effect = (0, useAsyncEffect_1.useAsyncEffect)(func, options);
    (0, react_1.useEffect)(() => {
        effect.fireCallback(options.initialProps);
    }, []);
    return effect;
};
exports.useEffectOnMount = useEffectOnMount;
