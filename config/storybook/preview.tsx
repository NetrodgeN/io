import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen'
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
    decorators: [RouterDecorator, SuspenseDecorator],
};

export default preview;
