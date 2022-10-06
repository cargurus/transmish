import React, { FC, useEffect, useState } from "react";
import {
  ScrollToTop,
  ScrollToTopProps,
} from "../../build/ScrollToTop/ScrollToTop";

type BaseProps = Omit<ScrollToTopProps, "shouldScroll">;

export interface ScrollOnStateChangeProps extends BaseProps {
  watchedValue: unknown;
}

export const ScrollOnStateChange: FC<ScrollOnStateChangeProps> = ({
  watchedValue,
  ...props
}) => {
  const [prevState, setPrevState] = useState<unknown>(watchedValue);

  const shouldScroll = prevState !== watchedValue;

  useEffect(() => {
    setPrevState(watchedValue);
  }, [watchedValue]);

  return <ScrollToTop shouldScroll={shouldScroll} {...props} />;
};
