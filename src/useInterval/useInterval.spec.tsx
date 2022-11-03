import { renderHook } from "@testing-library/react-hooks";
import useInterval from ".";

describe("useInterval", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  it("should set an interval with correct callback and delay", () => {
    const callback = jest.fn();
    const delay = 2000;
    const { result } = renderHook(() => useInterval(callback, delay));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);

    const stopInterval = result.current;
    stopInterval();
    jest.advanceTimersByTime(20000);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should stop the interval when unmounting", () => {
    const callback = jest.fn();
    const delay = 2000;
    const { unmount } = renderHook(() => useInterval(callback, delay));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(1);
    unmount();
    jest.advanceTimersByTime(20000);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
