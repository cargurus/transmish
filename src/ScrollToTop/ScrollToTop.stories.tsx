import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollToTop } from './index';

export default {
    title: 'ScrollToTop',
    component: ScrollToTop,
} as ComponentMeta<typeof ScrollToTop>;

const Spacer = () => {
    return <div style={{ background: 'green', height: '200rem', width: 100 }} />;
};

export const Example: ComponentStory<typeof ScrollToTop> = () => {
    const [shouldScrollDown, setShouldScrollDown] = useState(false);
    const [shouldScrollToButton, setShouldScrollToButton] = useState(false);
    const scrollDown = () => {
        setShouldScrollDown(true);
        setTimeout(() => setShouldScrollDown(false), 1);
    };
    const scrollUp = () => {
        setShouldScrollToButton(true);
        setTimeout(() => setShouldScrollToButton(false), 1);
    };
    return (
        <>
            <ScrollToTop shouldScroll={shouldScrollToButton}>
                <button onClick={scrollDown}>Scroll Me</button>
            </ScrollToTop>
            <Spacer />
            <ScrollToTop shouldScroll={shouldScrollDown}>
                <button onClick={scrollUp}>Go Back to the Top</button>
            </ScrollToTop>
            <Spacer />
        </>
    );
};
