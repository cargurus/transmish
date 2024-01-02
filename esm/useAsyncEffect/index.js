var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback, useState } from 'react';
/**
 * Handles the most common state requirements for tracking async behavior.
 *
 * @param func Any async function that you need to track states for.
 * @param options Config object
 */
export const useAsyncEffect = (func, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [timestamp, setTimestamp] = useState(0);
    const { onError, onComplete, onReset } = options;
    const handleError = useCallback((e) => {
        setLoading(false);
        setError(e);
        onError === null || onError === void 0 ? void 0 : onError(e);
    }, [onError]);
    const handleData = useCallback((d) => {
        setData(d);
        setLoading(false);
        onComplete === null || onComplete === void 0 ? void 0 : onComplete(d);
    }, [onComplete]);
    const fireCallback = useCallback((arg) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setTimestamp(Date.now());
            setLoading(true);
            setError(null);
            const res = yield func(arg);
            handleData(res);
        }
        catch (e) {
            if (e instanceof Error) {
                handleError(e);
            }
        }
    }), [func, handleError, handleData]);
    const reset = () => {
        setData(null);
        setError(null);
        onReset === null || onReset === void 0 ? void 0 : onReset();
    };
    return { data, timestamp, error, loading, fireCallback, reset };
};
