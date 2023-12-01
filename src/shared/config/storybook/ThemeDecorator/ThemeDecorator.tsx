import React from 'react';
import { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = (StoryComponent, context) => {
    const { theme } = context.globals;
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
