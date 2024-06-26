import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

const ERROR = 'error';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: ERROR,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual(ERROR);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
