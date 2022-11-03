import { AsyncEffect, AsyncEffectOptions } from "../useAsyncEffect";
/**
 * Handles the most common state requirements for tracking async behavior.
 *
 * @param func Any async function that you need to track states for.
 * @param options Config object
 */
interface OnMountEffectOptions<T, K> extends AsyncEffectOptions<T> {
    initialProps?: K;
}
export declare const useEffectOnMount: <T, K = unknown>(func: (arg?: K | undefined) => Promise<T>, options?: OnMountEffectOptions<T, K>) => AsyncEffect<T, K>;
export {};
