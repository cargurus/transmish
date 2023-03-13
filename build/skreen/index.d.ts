import { Screen, screen } from "@testing-library/react";
import { Optional, ValidHTMLInputTypes } from "../types";
interface Skreen extends Screen {
    getParentText: (...args: Parameters<typeof screen.getByText>) => Optional<string> | undefined;
    queryInputByType: (typeOfInput: ValidHTMLInputTypes) => ReturnType<typeof document.querySelector>;
    queryAllInputsByType: (typeOfInput: ValidHTMLInputTypes) => ReturnType<typeof document.querySelectorAll>;
}
/**
 * extends RTL screen to provide helper methods for making queries
 */
declare const skreen: Skreen;
export default skreen;
