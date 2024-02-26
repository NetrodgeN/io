import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleBlockType, ArticleType, Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    id: '1',
    title: 'string',
    subtitle: 'subtitle',
    img: 'src',
    views: 100,
    createdAt: '1010101',
    type: [ArticleType.IT],
    blocks: [{
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'title',
        paragraphs: ['123'],
    }],
};

describe('articleDetailsSlice', () => {
    test('test update service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
        )).toEqual({
            isLoading: false,
            data,
        });
    });
});