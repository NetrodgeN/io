import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '../../../../entities/Article';

const mock = {
    id: '1',
    title: 'Javascript',
    subtitle: 'Что нового в JS',
    img: '',
    views: 1022,
    user: {},
    createdAt: '26.02.2022',
    type: ['IT'],
    blocks: [
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            ],
        },
    ],
} as Article;

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                // @ts-ignore
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...mock, id: '1' },
                    { ...mock, id: '2' },
                    { ...mock, id: '3' },
                ],
            },
        ],
    },
};
export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>

export const Normal: Story = {
    args: {},
};
