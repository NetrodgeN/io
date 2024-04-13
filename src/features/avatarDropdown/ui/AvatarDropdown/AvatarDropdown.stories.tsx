import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'AvatarDropdown',
    component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {},
};

