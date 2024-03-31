import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';

import { Article } from '../../types/article';

import { fetchArticleById } from './fetchArticleById';
import { ArticleType } from 'entities/Article';
import { ArticleBlockType } from 'entities/Article/model/consts/consts';

const data: Article = {
    id: '1',
    title: 'string',
    subtitle: 'subtitle',
    img: 'src',
    views: 100,
    createdAt: '1010101',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'aaaa, username',
    },
    blocks: [{
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'title',
        paragraphs: ['123'],
    }],
};

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
