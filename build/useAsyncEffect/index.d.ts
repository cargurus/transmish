import { Optional } from "../types";
export declare type AsyncEffect<T, K> = {
    data: Optional<T>;
    loading: boolean;
    error: Optional<Error>;
    timestamp: number;
    fireCallback: (arg?: K) => Promise<void>;
    reset: () => void;
};
export interface AsyncEffectOptions<T> {
    /**
     * Optional callback that fires after the effect has completed
     */
    onComplete?: (data: T) => void;
    /**
     * Optional callback that fires after the effect has thrown an error
     */
    onError?: (error: Error) => void;
    /**
     * Optional callback that fires when you reset the state
     */
    onReset?: () => void;
}
/**
 * Handles the most common state requirements for tracking async behavior.
 *
 * @param func Any async function that you need to track states for.
 * @param options Config object
 */
export declare const useAsyncEffect: <T, K = unknown>(func: (arg?: K | undefined) => Promise<T>, options?: AsyncEffectOptions<T>) => AsyncEffect<T, K>;
