import { Screen, screen } from "@testing-library/react";
import { Optional, ValidHTMLInputTypes } from "../types";

interface Skreen extends Screen {
  getParentText: (
    ...args: Parameters<typeof screen.getByText>
  ) => Optional<string> | undefined;
  queryInputByType: (
    typeOfInput: ValidHTMLInputTypes
  ) => ReturnType<typeof document.querySelector>;
  queryAllInputsByType: (
    typeOfInput: ValidHTMLInputTypes
  ) => ReturnType<typeof document.querySelectorAll>;
}

/**
 * extends RTL screen to provide helper methods for making queries
 */
const skreen: Skreen = {
  ...screen,
  /**
   * returns all text content of parent node if it exists
   */
  getParentText: (...args) => {
    return screen.getByText(...args).parentNode?.textContent;
  },
  queryInputByType: (typeOfInput: ValidHTMLInputTypes) => {
    const inputs = document.querySelectorAll(`input[type="${typeOfInput}"]`);
    if (inputs.length > 1)
      throw new Error(
        `Multiple inputs found with type "${typeOfInput}". Consider using skreen.queryAllInputsByType.`
      );
    return inputs[0] ?? null;
  },
  queryAllInputsByType: (typeOfInput: ValidHTMLInputTypes) => {
    return document.querySelectorAll(`input[type="${typeOfInput}"]`);
  },
};

export default skreen;
