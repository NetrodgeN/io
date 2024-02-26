import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should work with filled state ', () => {
        const errors = [
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        const result = getProfileValidateErrors(state as StateSchema);
        expect(result).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const result = getProfileValidateErrors(state as StateSchema);
        expect(result).toEqual(undefined);
    });
});
