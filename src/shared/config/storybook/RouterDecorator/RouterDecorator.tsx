import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Decorator } from '@storybook/react';

export const RouterDecorator: Decorator = (StoryComponent) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
