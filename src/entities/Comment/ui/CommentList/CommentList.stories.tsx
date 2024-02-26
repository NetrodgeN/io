import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../../../app/providers/ThemePropvider';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'features/CommentList',
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Empty: Story = {
    args: {},
};
const comments = [
    {
        id: '1',
        text: 'default text',
        user: {
            id: '1',
            username: 'Username 1',
        },
    },
    {
        id: '2',
        text: 'Wow',
        user: {
            id: '2',
            username: 'default username 2',
        },
    },
    {
        id: '3',
        text: 'amazing!',
        user: {
            id: '3',
            username: '3 default username',
        },
    },
];
export const Normal: Story = {
    args: {
        comments,
    },
};

export const Dark: Story = {
    args: {
        comments,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Blue: Story = {
    args: {
        comments,
    },
    decorators: [ThemeDecorator(Theme.GARISH_BLUE)],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
