import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../assets/tests/storybook.jpg';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 100,
    },
};
