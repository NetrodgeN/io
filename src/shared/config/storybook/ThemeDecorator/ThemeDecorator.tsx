import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemePropvider';

const ThemeBlock = ({ left, children }: {left?: boolean, children: React.ReactNode}) => (
    <div style={{
        position: 'absolute',
        top: 0,
        left: `${left ? 0 : '50vw'}`,
        borderRight: `${left ? '1px solid #202020' : 'none'}`,
        right: `${left ? '50vw' : 0}`,
        width: '50vw',
        height: '100vh',
        bottom: '0',
        overflow: 'auto',
        padding: '1rem',
    }}
    >
        {children}
    </div>
);

export const ThemeDecorator: Decorator = (StoryComponent, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { theme } = context.globals;

    switch (theme) {
    case 'side-by-side': {
        return (
            <>
                <div className={`app ${Theme.LIGHT}`}>
                    <ThemeBlock left>
                        <StoryComponent />
                    </ThemeBlock>
                </div>
                <ThemeBlock>
                    <div className={`app ${Theme.DARK}`}>
                        <StoryComponent />
                    </div>
                </ThemeBlock>
            </>
        );
    }
    default: {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    }
    }
};
