import { useState } from 'react';

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
export const useBooleanState = (defaultState = false) => {
    const [value, setValue] = useState(defaultState);

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
