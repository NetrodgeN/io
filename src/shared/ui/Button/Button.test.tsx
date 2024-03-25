import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('is renderer', () => {
        render(<Button label="TEST" />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR} label="TEST" />);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
