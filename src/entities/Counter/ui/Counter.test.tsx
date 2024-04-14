import { screen } from '@testing-library/react';

import { ComponentRender } from '@/shared/config/tests/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('is renderer', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
});
