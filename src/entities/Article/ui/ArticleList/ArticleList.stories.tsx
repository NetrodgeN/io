import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../model/types/article';

import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/ArticleList',
    component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const isLoading: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
};

export const isLoadingBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
};
