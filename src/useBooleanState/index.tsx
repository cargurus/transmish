import { useState } from 'react';

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
