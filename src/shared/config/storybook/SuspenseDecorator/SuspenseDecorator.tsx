import { Suspense } from 'react';

import { Decorator } from '@storybook/react';

export const SuspenseDecorator: Decorator = (StoryComponent) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
