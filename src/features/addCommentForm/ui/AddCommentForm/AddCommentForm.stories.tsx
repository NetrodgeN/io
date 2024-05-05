import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AddCommentForm from './AddCommentForm';
import { Theme } from '../../../../shared/const/theme';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        onSendComment: { action: 'onSendComment' },
    },
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Blue: Story = {
    decorators: [ThemeDecorator(Theme.GARISH_BLUE)],
};
