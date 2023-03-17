declare const useBooleanState: (defaultState?: boolean) => {
    value: boolean;
    toTrue: () => void;
    toFalse: () => void;
    toggle: () => void;
};
export default useBooleanState;
