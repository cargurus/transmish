import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hideable } from '.';

export default {
    title: 'Hideable',
    component: Hideable,
} as ComponentMeta<typeof Hideable>;

export const Example: ComponentStory<typeof Hideable> = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <p>
                <code>Hideable</code> shows or hides its children depending on the value
        of its <code>show</code> prop.
                <br />
        Current state is: {String(show)}
            </p>
            <button onClick={() => setShow((s) => !s)}>Click to toggle</button>
            <Hideable show={show} style={{ whiteSpace: 'pre' }}>
                <h2>Bing bong!</h2>
            </Hideable>
        </>
    );
};
