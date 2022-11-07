import { useCallback, useState } from "react";
import { Optional } from "../types";

export type AsyncEffect<T, K> = {
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

export const useAsyncEffect = <T, K = unknown>(
  func: (arg?: K) => Promise<T>,
  options: AsyncEffectOptions<T> = {}
): AsyncEffect<T, K> => {
  const [data, setData] = useState<Optional<T>>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Optional<Error>>(null);
  const [timestamp, setTimestamp] = useState<number>(0);

  const { onError, onComplete, onReset } = options;
  const handleError = useCallback(
    (e: Error) => {
      setLoading(false);
      setError(e);
      onError?.(e);
    },
    [onError]
  );

  const handleData = useCallback(
    (d) => {
      setData(d);
      setLoading(false);
      onComplete?.(d);
    },
    [onComplete]
  );

  const fireCallback = useCallback(
    async (arg?: K) => {
      try {
        setTimestamp(Date.now());
        setLoading(true);
        setError(null);
        const res = await func(arg);
        handleData(res);
      } catch (e) {
        if (e instanceof Error) {
          handleError(e);
        }
      }
    },
    [func, handleError, handleData]
  );

  const reset = () => {
    setData(null);
    setError(null);
    onReset?.();
  };

  return { data, timestamp, error, loading, fireCallback, reset };
};
