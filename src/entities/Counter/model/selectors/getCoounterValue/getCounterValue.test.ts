import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should work correctly when the counter property is a number', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        const result = getCounterValue(state as StateSchema);
        expect(result).toEqual(10);
    });
});
