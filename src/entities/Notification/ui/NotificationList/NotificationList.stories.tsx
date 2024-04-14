import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const mock = {
    id: '1',
    title: 'Title',
    description: 'Description',
};

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                // @ts-ignore
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...mock, id: '1' },
                    { ...mock, id: '2' },
                    { ...mock, id: '3' },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
    args: {},
};
