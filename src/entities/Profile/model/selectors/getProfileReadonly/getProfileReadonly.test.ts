import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should work with filled state ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        const result = getProfileReadonly(state as StateSchema);
        expect(result).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const result = getProfileReadonly(state as StateSchema);
        expect(result).toEqual(undefined);
    });
});
