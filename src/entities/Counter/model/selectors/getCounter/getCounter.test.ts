import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should work correctly when the counter property is a number', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        const result = getCounter(state as StateSchema);
        expect(result).toEqual({ value: 10 });
    });
});
