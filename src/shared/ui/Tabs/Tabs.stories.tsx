import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Tabs',
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: 'tab 2',
                content: 'tab 2',
            },
            {
                value: 'tab 3',
                content: 'tab 3',
            },
        ],
        value: 'tab 2',
    },
    argTypes: {
        onTabClick: { action: 'onSendComment' },
    },
};
