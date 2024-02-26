import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        const result = getProfileError(state as StateSchema);
        expect(result).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const result = getProfileError(state as StateSchema);
        expect(result).toEqual(undefined);
    });
});
