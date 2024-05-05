import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Code } from './Code';
import { Theme } from '../../const/theme';

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
