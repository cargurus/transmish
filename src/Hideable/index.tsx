import React, { FC } from "react";

export interface HideableProps extends React.HTMLAttributes<HTMLElement> {
  show: boolean;
}

const hiddenStyles = {
  position: "absolute",
  clip: "rect(0, 0, 0, 0)",
};

/**
 * Hideable wraps its children in a div and toggles its visibility based on the truthiness of its `show` prop.
 */
export const Hideable: FC<HideableProps> = ({ children, show, ...rest }) => {
  const style = show ? {} : hiddenStyles;
  return (
    <div {...rest} style={style}>
      {children}
    </div>
  );
};
