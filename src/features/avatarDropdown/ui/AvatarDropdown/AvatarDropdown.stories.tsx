import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Admin: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                roles: ['ADMIN'],
                id: '1',
                username: 'username',
                avatar: 'https://avatars.githubusercontent.com/u/55?v=4',
            },
        },
    })],
};

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                roles: ['USER'],
                id: '1',
                username: 'username',
                avatar: 'https://avatars.githubusercontent.com/u/55?v=4',
            },
        },
    })],
};
