import React, { useState } from "react";
import userEvent from "@testing-library/user-event/dist";
import { render, screen } from "@testing-library/react";
import { ScrollToTop } from ".";

describe("ScrollToTop Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not scroll if shouldScroll === false", () => {
    render(<ScrollToTop shouldScroll={false} />);
    expect(window.scroll).not.toHaveBeenCalled();
  });

  it("should scroll if shouldScroll === true", () => {
    const scrollOffset = 24601;
    render(
      <ScrollToTop
        shouldScroll={true}
        scrollOffset={scrollOffset}
        behavior="auto"
      />
    );
    expect(window.scroll).toHaveBeenLastCalledWith(
      expect.objectContaining({
        top: -scrollOffset,
        left: 0,
        behavior: "auto",
      })
    );
  });

  it("should fallback if scroll is not implemented", () => {
    const scrollOffset = 24601;
    jest.spyOn(window, "scroll").mockImplementationOnce(() => {
      throw new TypeError("Failed to execute 'scroll' on 'Window'");
    });

    render(
      <ScrollToTop
        shouldScroll={true}
        scrollOffset={scrollOffset}
        behavior="auto"
      />
    );

    expect(window.scrollTo).toHaveBeenLastCalledWith(0, -scrollOffset);
  });

  test("functional test", () => {
    const scrollOffset = 8675309;
    const Wrapper = () => {
      const [shouldScroll, setShouldScroll] = useState(false);
      return (
        <>
          <ScrollToTop
            shouldScroll={shouldScroll}
            scrollOffset={scrollOffset}
          />
          <button onClick={() => setShouldScroll(true)} />
        </>
      );
    };

    render(<Wrapper />);
    expect(window.scroll).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("button"));

    expect(window.scroll).toHaveBeenLastCalledWith(
      expect.objectContaining({
        top: 0 - scrollOffset,
        left: 0,
        behavior: "smooth",
      })
    );
  });
});
