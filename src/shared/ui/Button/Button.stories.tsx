import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Primary',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        label: 'Clear',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        label: 'Outline',
    },
};
