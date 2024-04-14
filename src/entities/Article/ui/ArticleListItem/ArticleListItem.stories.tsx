import type { Meta, StoryObj } from '@storybook/react';

import { Article } from '../../model/types/article';

import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/consts/consts';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

const mock = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS',
    img: 'https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2018/07/Blog_JS-frames_21.jpg.webp',
    views: 1022,
    user: {
        id: '1',
        username: 'aaaa, username',
        avatar: 'https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp'
            + '-content/uploads/2018/07/Blog_JS-frames_21.jpg.webp',
    },
    createdAt: '26.02.2022',
    type: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», '
                + 'очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего'
                + ' языка.',
                'JavaScript — это язык, программы на котором можно выполнять '
                + 'в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих '
                + 'пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере,'
                + ' это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

export const Normal: Story = {
    args: {
        view: ArticleView.SMALL,
        article: mock,
    },
};

export const Big: Story = {
    args: {
        view: ArticleView.BIG,
        article: mock,

    },
};
