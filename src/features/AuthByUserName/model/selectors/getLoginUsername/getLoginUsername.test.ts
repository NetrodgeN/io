import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

const value = 'username';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: value,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual(value);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
