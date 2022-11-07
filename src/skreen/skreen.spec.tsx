import React from "react";
import { render } from "@testing-library/react";
import skreen from "./index";

describe("skreen test utility tests", () => {
  describe("getParentContent", () => {
    it("should get parent content", () => {
      const hello = "hello";
      const dolly = "dolly";
      render(
        <div>
          {hello}
          <button>{dolly}</button>
        </div>
      );
      expect(skreen.getParentText(dolly)).toBe(hello + dolly);
    });

    it("should fail when text not found", () => {
      render(
        <div>
          Hamburger
          <button>Sundays</button>
        </div>
      );
      expect(() => skreen.getParentText("emotional damage")).toThrow();
    });
  });

  describe("queryInputByType", () => {
    const textValue = "Hawkeye Pierce";
    const numberValue = 4077;

    it("should be able to query inputs by type", () => {
      render(
        <div>
          <input type="text" value={textValue} onChange={() => ({})} />
          <input type="number" value={numberValue} onChange={() => ({})} />
        </div>
      );

      expect(skreen.queryInputByType("text")).toHaveValue(textValue);
      expect(skreen.queryInputByType("number")).toHaveValue(numberValue);
      expect(skreen.queryInputByType("radio")).not.toBeInTheDocument();
    });

    it("should throw if there are multiple input of the same type", () => {
      render(
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      );

      expect(() => skreen.queryInputByType("text")).toThrowError();
    });
  });
  describe("queryAllInputsByType", () => {
    it("should be able to query all inputs by type", () => {
      render(
        <div>
          <input type="text" />
          <input type="text" />
          <input type="number" />
        </div>
      );

      expect(skreen.queryAllInputsByType("text")).toHaveLength(2);
      expect(skreen.queryAllInputsByType("number")).toHaveLength(1);
      expect(skreen.queryAllInputsByType("radio")).toHaveLength(0);
    });
  });
});
