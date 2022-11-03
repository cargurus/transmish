import { useEffect, useLayoutEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);
  const intervalId = useRef<number>();
  const stopInterval = () => window.clearInterval(intervalId.current);
  const noOp = () => {
    return;
  };

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return noOp;
    }
    intervalId.current = window.setInterval(
      () => savedCallback.current(),
      delay
    );
    return stopInterval;
  }, [delay]);

  return stopInterval;
};

export default useInterval;
