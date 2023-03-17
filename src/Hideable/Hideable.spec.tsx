import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hideable } from '.';

describe('hideable', () => {
    const testId = 'abc123';
    it('should hide its children with CSS clipping', () => {
        render(
            <Hideable data-testid={testId} show={false}>
        Some Text
            </Hideable>
        );
        const hideable = screen.getByTestId(testId);
        expect(hideable).toHaveStyle({
            position: 'absolute',
            clip: 'rect(0, 0, 0, 0)',
        });
    });

    it('should not hide when show is true', () => {
        render(
            <Hideable data-testid={testId} show={true}>
        Some Text
            </Hideable>
        );
        const hideable = screen.getByTestId(testId);
        expect(hideable).not.toHaveStyle({
            position: 'absolute',
            clip: 'rect(0, 0, 0, 0)',
        });
    });
});
