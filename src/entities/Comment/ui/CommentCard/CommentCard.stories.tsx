import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentCard } from './CommentCard';
import { Theme } from '../../../../shared/const/theme';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'default text',
            user: {
                id: '1',
                username: 'Username 1',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'default text',
            user: {
                id: '1',
                username: 'Username 1',
            },
        },
        isLoading: true,
    },
};

export const Dark: Story = {
    args: {
        comment: {
            id: '1',
            text: 'default text',
            user: {
                id: '1',
                username: 'Username 1',
            },
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Blue: Story = {
    args: {
        comment: {
            id: '1',
            text: 'default text',
            user: {
                id: '1',
                username: 'Username 1',
            },
        },
    },
    decorators: [ThemeDecorator(Theme.GARISH_BLUE)],
};
