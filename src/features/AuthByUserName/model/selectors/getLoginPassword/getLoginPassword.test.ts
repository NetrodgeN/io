import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

const value = 'Password1234!@#';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: value,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(value);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
