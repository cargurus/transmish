import { act, renderHook } from '@testing-library/react-hooks';
import { useReducedMotion } from '.';

const MockEventListeners: Record<string, () => void> = {};

const MockedWatchMediaAddEventListener = jest
    .fn()
    .mockImplementation((eventName: string, callback: () => void) => {
        MockEventListeners[eventName] = callback;
    });
const MockedWatchMediaRemoveEventListener = jest.fn();

const MockedMediaReturnVal = {
    matches: true,
    addEventListener: MockedWatchMediaAddEventListener,
    removeEventListener: MockedWatchMediaRemoveEventListener,
};

const MockedWatchedMediaImplementation = jest
    .fn()
    .mockImplementation(() => MockedMediaReturnVal);

describe('useReducedMotion', () => {
    beforeAll(() => {
    // Mock matchMedia
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: MockedWatchedMediaImplementation,
        });

        MockedMediaReturnVal.matches = true;
    });

    it('should initialize with reduced motion preference', () => {
        const { result } = renderHook(() => useReducedMotion());
        expect(result.current).toBe(true);
    });

    it('should update reduced motion preference on media query change', () => {
        const { result } = renderHook(() => useReducedMotion());

        // Simulate media query change
        const changeListener = MockEventListeners['change'];
        act(() => {
            MockedMediaReturnVal.matches = false;
            changeListener();
        });

        expect(result.current).toBe(false);
    });

    it('should remove event listener on unmount', () => {
        const removeEventListenerMock = jest.fn();
        MockedWatchedMediaImplementation.mockImplementationOnce(() => ({
            matches: true,
            addEventListener: jest.fn(),
            removeEventListener: removeEventListenerMock,
        }));

        const { unmount } = renderHook(() => useReducedMotion());
        unmount();

        expect(removeEventListenerMock).toHaveBeenCalled();
    });
});
