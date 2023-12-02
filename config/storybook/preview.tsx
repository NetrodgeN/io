import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemePropvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

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
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: Theme.LIGHT,
            toolbar: {
                title: 'Global theme',
                items: [Theme.LIGHT, Theme.DARK, 'side-by-side'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [ThemeDecorator, RouterDecorator],
};

export default preview;
