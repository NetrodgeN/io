import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should work with filled state ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        const result = getProfileIsLoading(state as StateSchema);
        expect(result).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const result = getProfileIsLoading(state as StateSchema);
        expect(result).toEqual(undefined);
    });
});
