import { StateSchema } from '@/app/providers/StoreProvider';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        const result = getArticleDetailsData(state as StateSchema);
        expect(result).toEqual(data);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        const result = getArticleDetailsIsLoading(state as StateSchema);
        expect(result).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        const result = getArticleDetailsError(state as StateSchema);
        expect(result).toEqual('error');
    });
});
