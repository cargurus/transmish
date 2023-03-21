# transmish

React Utility Library

## Motivation

`transmish` is a collection of components, hooks, and
functions for supporting front-end development in React.
These are meant to be simple and reusable abstractions
over tasks that React developers do on a regular basis.

`transmish` is not a component library in the sense of
Bootstrap or Material. Its components are almost entirely
lacking in CSS, but rather focus on common behaviors
in UIs.

## Installation

## Usage

0. (TODO) run `npm install transmish` or `yarn add transmish`.
1. For now you can install `transmish` directly from source control with this command:
	`yarn add schwifty@git@code.cargurus.com:ischwartz/transmish.git`
	If you need specify a specific branch add it to the end 
	`yarn add schwifty@git@code.cargurus.com:ischwartz/transmish.git#my-branch`.

### Development

1. Install all dependencies with `yarn install`.
2. Run `yarn build` to check types and compile the
	code to JavaScript and `*.d.ts` files.
3. Run tests with `yarn test`. To generate a coverage report
	run `yarn test --coverage`. Code in this repo should have close to 100% coverage.
4. View documentation by running `yarn storybook` from the project root.
	The Storybook documentation should open in a new browser window.
