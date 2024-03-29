import { ArticleInfiniteList } from './ArticleInfiniteList';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
};

export default meta;

type Story = StoryObj<typeof ArticleInfiniteList>
export const Normal: Story = {
    args: {}
};
