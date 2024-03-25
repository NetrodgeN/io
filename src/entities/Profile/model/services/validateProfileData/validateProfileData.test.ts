import { Country } from 'entities/Counrty';
import { Currency } from 'entities/Currency';

import { ValidateProfileError } from '../../types/profile';

import { validateProfileData } from './validateProfileData';

const data = {
    age: 22,
    country: Country.Russia,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Moscow',
    currency: Currency.RUB,
    username: 'Username',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('with first and last name', async () => {
        const result = validateProfileData({ ...data, lastname: '', first: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
