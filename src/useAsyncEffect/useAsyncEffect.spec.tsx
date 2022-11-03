import { act, renderHook } from "@testing-library/react-hooks";
import { useAsyncEffect } from ".";

describe("useAsyncEffect", () => {
  const thisWorks = "this works";
  const cb = jest.fn().mockResolvedValue(thisWorks);

  it("should provide a way to call its callback", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsyncEffect(cb));
    const { fireCallback } = result.current;
    act(() => {
      fireCallback();
    });
    await waitForNextUpdate();
    expect(cb).toHaveBeenCalled();
  });

  it("should track data loading states", async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(() =>
      useAsyncEffect(cb)
    );
    const { fireCallback, data, loading, reset } = result.current;
    expect(loading).toBeFalsy();
    expect(data).toBeNull();

    act(() => {
      fireCallback();
    });
    await waitFor(() => expect(result.current.loading).toBeTruthy());
    await waitForNextUpdate();

    expect(result.current.data).toBe(thisWorks);

    act(() => {
      reset();
    });

    expect(result.current.data).toBe(null);
  });

  it("should track error states", async () => {
    const dontWork = "dont work";
    const shouldThrow = jest.fn().mockImplementation(() => {
      throw new Error(dontWork);
    });
    const { result, waitFor } = renderHook(() =>
      useAsyncEffect(() => shouldThrow())
    );
    const { fireCallback, data, error, reset } = result.current;
    expect(error).toBeFalsy();
    expect(data).toBeNull();

    act(() => {
      fireCallback();
    });

    await waitFor(() => {
      expect(result.current.error?.message).toBe(dontWork);
    });

    act(() => {
      reset();
    });

    expect(result.current.error).toBeNull();
  });

  it("should fire provided callbacks at appropriate times", async () => {
    const mockRequest = jest.fn();

    const options = {
      onComplete: jest.fn(),
      onError: jest.fn(),
      onReset: jest.fn(),
    };
    const { result, waitFor } = renderHook(() =>
      useAsyncEffect(() => mockRequest(), options)
    );

    const { fireCallback, reset } = result.current;

    const error = new Error("oops");
    // first time will error
    mockRequest.mockImplementationOnce(() => {
      throw error;
    });
    act(() => {
      fireCallback();
    });

    await waitFor(() => {
      expect(options.onError).toHaveBeenCalledWith(error);
    });

    // reset
    act(() => {
      reset();
    });
    expect(options.onReset).toHaveBeenCalled();

    const data = true;
    // second one should work
    mockRequest.mockResolvedValue(data);
    act(() => {
      fireCallback();
    });

    await waitFor(() => {
      expect(options.onComplete).toHaveBeenCalledWith(data);
    });
  });
});
