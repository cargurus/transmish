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
in UIs. `transmish` also provides hooks, types and constants
for a variety of common UI use cases. 

## Installation

Run `npm install transmish` or `yarn add transmish`.

## Usage

```typescript
import { useEffectOnMount, Hideable, useIntersectionObserver } from "transmish";
```

### Components

- Hideable
- ScrollOnStateChange
- ScrollToTop

### Hooks

- [useAsyncEffect](/src/useAsyncEffect/README.md)
- [useBooleanState](/src/useBooleanState/README.md)
- [useEffectOnMount](/src/useEffectOnMount/README.md)
- [useIntersectionObserver](/src/useIntersectionObserver/README.md)
- [useInterval](/src/useInterval/README.md)
- [useReducedMotion](/src/useReducedMotion/README.md)

## Development

1. Install all dependencies with `yarn install`.
2. Run `yarn build` to check types and compile the
	code to JavaScript and `*.d.ts` files.
3. Run tests with `yarn test`. To generate a coverage report
	run `yarn test --coverage`. Code in this repo should have close to 100% coverage.
4. View documentation by running `yarn storybook` from the project root.
	The Storybook documentation should open in a new browser window.
