import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notifications';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

const data: Notification = {
    id: '1',
    title: 'Title',
    description: 'Description',
};

export const Normal: Story = {
    args: {
        notification: data,
    },
};

export const WithLink: Story = {
    args: {
        notification: {
            ...data,
            href: '#',
        },
    },
};
