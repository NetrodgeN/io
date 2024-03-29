import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return data', () => {
        const data = {
            age: 22,
            country: Country.Russia,
            lastname: 'Ivanov',
            first: 'Ivan',
            city: 'Moscow',
            currency: Currency.RUB,
            username: 'Username',

        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        const result = getProfileForm(state as StateSchema);
        expect(result).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const result = getProfileForm(state as StateSchema);
        expect(result).toEqual(undefined);
    });
});
