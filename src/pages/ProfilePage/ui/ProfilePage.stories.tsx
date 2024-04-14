import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                age: 22,
                country: Country.Russia,
                lastname: 'Ivanov',
                first: 'Ivan',
                city: 'Moscow',
                currency: Currency.RUB,
                username: 'Username',
            },
        },
    })],
};
