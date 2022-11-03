import { act, renderHook } from "@testing-library/react-hooks";
import useBooleanState from ".";

describe("useBooleanState", () => {
  it("should have a toggleable boolean state", () => {
    const { result } = renderHook(() => useBooleanState());
    expect(result.current.value).toBe(false);

    act(() => {
      result.current.toTrue();
    });
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toFalse();
    });
    expect(result.current.value).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });

  it("can default to true if you want", () => {
    const { result } = renderHook(() => useBooleanState(true));
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });
});
