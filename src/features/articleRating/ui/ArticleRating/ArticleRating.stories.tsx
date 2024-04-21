import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                // @ts-ignore
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
};
export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                // @ts-ignore
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
