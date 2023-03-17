import React from 'react';
import { render } from '@testing-library/react';
import { ScrollOnStateChange } from '.';

describe('ScrollToTop Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should not scroll if value doesn\'t change', () => {
        const value = 'mr crabs';
        const { rerender } = render(<ScrollOnStateChange watchedValue={value} />);
        rerender(<ScrollOnStateChange watchedValue={value} />);
        expect(window.scroll).not.toHaveBeenCalled();
    });

    it('should scroll if value changes', () => {
        const { rerender } = render(<ScrollOnStateChange watchedValue={1} />);
        rerender(<ScrollOnStateChange watchedValue={2} />);
        expect(window.scroll).toHaveBeenLastCalledWith({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
});
