import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'ArticleRating',
    component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {},
};
