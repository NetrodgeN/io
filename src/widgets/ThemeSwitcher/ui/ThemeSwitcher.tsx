import React from 'react';

import { Theme, useTheme } from 'app/providers/ThemePropvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// TODO: need refactoring
export const ThemeSwitcher = React.memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={classNames('', {}, [])}
            onClick={toggleTheme}
            title={theme === Theme.DARK ? 'LIGHT' : 'DARK'}
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
