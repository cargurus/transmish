import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import BaseForm, { buttonText } from './BaseForm';

describe('BaseForm Tests', () => {
    it('should render a BaseForm', () => {
        const onClick = jest.fn();
        render(<BaseForm onClick={onClick} />);

        const btn = screen.getByRole('button', { name: buttonText });
        expect(btn).toBeInTheDocument();

        userEvent.click(btn);
        expect(onClick).toHaveBeenCalled();
    });
});
