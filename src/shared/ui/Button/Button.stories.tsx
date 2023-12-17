import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from './Button';

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
        theme: ButtonTheme.CLEAR,
        label: 'Clear',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Outline',
    },
};

export const OutlineInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: 'OutlineInverted',
    },
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: 'BG',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: 'BG Invverted',
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: '>',
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: '>',
        square: true,
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: '>',
        square: true,
        size: ButtonSize.XL,
    },
};
