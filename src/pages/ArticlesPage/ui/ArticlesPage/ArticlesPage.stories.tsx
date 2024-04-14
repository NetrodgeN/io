import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({
        articlesPage: {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            hasMore: false,
            limit: 9,
            order: 'asc',
            search: '',
            sort: ArticleSortField.VIEWS,
            _inited: false,
            type: ArticleType.ALL,
        },
    })],
};
