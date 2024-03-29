import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet',
    },
};

export const TextOnly: Story = {
    args: {
        text: 'consectetur adipisicing elit. '
            + 'Aliquam consectetur consequuntur corporis,'
            + ' eaque exercitationem impedit labore nemo nostrum '
            + 'praesentium quam qui quibusdam ratione reiciendis repellendus '
            + 'reprehenderit, sint velit, veniam vitae.',
    },
};

export const TitleWithText: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet',
        text: 'consectetur adipisicing elit. '
            + 'Aliquam consectetur consequuntur corporis,'
            + ' eaque exercitationem impedit labore nemo nostrum '
            + 'praesentium quam qui quibusdam ratione reiciendis repellendus '
            + 'reprehenderit, sint velit, veniam vitae.',
    },
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
        title: 'Lorem ipsum dolor sit amet',
        text: 'consectetur adipisicing elit. '
            + 'Aliquam consectetur consequuntur corporis,'
            + ' eaque exercitationem impedit labore nemo nostrum '
            + 'praesentium quam qui quibusdam ratione reiciendis repellendus '
            + 'reprehenderit, sint velit, veniam vitae.',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet',
        text: 'consectetur adipisicing elit. '
            + 'Aliquam consectetur consequuntur corporis,'
            + ' eaque exercitationem impedit labore nemo nostrum '
            + 'praesentium quam qui quibusdam ratione reiciendis repellendus '
            + 'reprehenderit, sint velit, veniam vitae.',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
};
