import { useEffect } from "react";
import { useAsyncEffect, } from "../useAsyncEffect";
export const useEffectOnMount = (func, options = {}) => {
    const effect = useAsyncEffect(func, options);
    useEffect(() => {
        effect.fireCallback(options.initialProps);
    }, []);
    return effect;
};
