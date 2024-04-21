import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Meta, type StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
};
export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({}),
    ],
};
