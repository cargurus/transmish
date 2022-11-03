import { renderHook } from "@testing-library/react-hooks";
import { useEffectOnMount } from ".";

describe("useEffectOnMount", () => {
  const thisWorks = "this works";

  it("should fire it's callback on mount", async () => {
    const cb = jest.fn().mockImplementation(async () => thisWorks);
    const { result, waitFor } = renderHook(() => useEffectOnMount(cb));
    expect(result.current.data).toBeNull();
    await waitFor(() => {
      expect(cb).toHaveBeenCalledTimes(1);
      expect(result.current.data).toBe(thisWorks);
    });
  });

  it("should allow you to specify initialProps", async () => {
    const initialProps = { foo: "hello" };
    const cb = jest
      .fn()
      .mockImplementation(async ({ foo }: { foo: typeof initialProps }) => {
        if (foo) {
          return "yay";
        }
        return "no";
      });

    const { result, waitFor } = renderHook(() =>
      useEffectOnMount(cb, {
        initialProps,
      })
    );
    expect(result.current.data).toBeNull();
    await waitFor(() => {
      expect(result.current.data).not.toBeNull()
    });

    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith(initialProps);
  });
});
