import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};


export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
};
