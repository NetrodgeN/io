import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemePropvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    // globalTypes: {
    //     theme: {
    //         description: 'Global theme for components',
    //         defaultValue: 'side-by-side',
    //         toolbar: {
    //             title: 'Global theme',
    //             items: [Theme.LIGHT, Theme.DARK, 'side-by-side'],
    //             dynamicTitle: true,
    //         },
    //     },
    // },
    decorators: [RouterDecorator],
};

export default preview;
