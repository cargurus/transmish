import React, { FC, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScrollOnStateChange } from "./index";

export default {
  title: "ScrollOnStateChange",
  component: ScrollOnStateChange,
} as ComponentMeta<typeof ScrollOnStateChange>;

const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      style={{ display: "block", margin: "1rem auto", padding: "10px 1rem" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const hundo = new Array(100).fill(null);

export const Example: ComponentStory<typeof ScrollOnStateChange> = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <ScrollOnStateChange watchedValue={value}>
        <p>Component will scroll to the top when the watched value changes.</p>
        <p>
          The current value is: <b>{value}</b>
        </p>
        <p>
          Scroll down, and click a button to set a new value and watch it
          scroll.
        </p>
      </ScrollOnStateChange>
      {hundo.map((_, i) => {
        return (
          <Button
            key={i}
            onClick={() => {
              console.log(i);
              setValue(i);
            }}
          >
            {i}
          </Button>
        );
      })}
    </>
  );
};
