import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemePropvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {
        text: ''
            + 'export const Normal: Story = {\n'
            + '    args: {\n'
            + '        children: "",\n'
            + '    },\n'
            + '};',
    },
};

export const Dark: Story = {
    args: {
        text: ''
            + 'export const Normal: Story = {\n'
            + '    args: {\n'
            + '        children: "",\n'
            + '    },\n'
            + '};',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
