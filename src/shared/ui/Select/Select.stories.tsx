import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Default label text',
        options: [
            { value: 'value1', content: 'content1' },
            { value: 'value2', content: 'content2' },
            { value: 'value4', content: 'content4' },
            { value: 'value3', content: 'content3' },
        ],
    },
};
