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
export declare const useBooleanState: (defaultState?: boolean) => {
    value: boolean;
    toTrue: () => void;
    toFalse: () => void;
    toggle: () => void;
};
