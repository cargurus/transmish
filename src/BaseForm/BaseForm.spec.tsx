import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { BaseForm } from './BaseForm';

describe('BaseForm Tests', () => {
    it('should render a BaseForm', () => {
        const onSubmit = jest.fn();
        render(
            <BaseForm
                onSubmit={onSubmit}
                button={<button type="submit">submit</button>}
                title="cool"
            >
                <input name="foo" />
                <input name="cool" value="yes" type="checkbox" />
            </BaseForm>
        );

        const btn = screen.getByRole('button', {
            name: 'submit',
        }) as HTMLButtonElement;
        expect(btn.disabled).toBeTruthy();

        userEvent.type(screen.getByRole('textbox'), 'bar');
        userEvent.click(screen.getByRole('checkbox'));

        expect(btn.disabled).toBeFalsy();
        userEvent.click(btn);

        expect(onSubmit).toHaveBeenCalledWith({
            foo: 'bar',
            cool: 'yes',
        });
    });
});
